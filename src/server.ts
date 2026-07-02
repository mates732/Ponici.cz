import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

const ERROR_HEADERS = { "content-type": "text/html; charset=utf-8" as const };

function isH3ErrorResponse(body: string): boolean {
  try {
    const p = JSON.parse(body) as { unhandled?: boolean; message?: string };
    return p.unhandled === true && p.message === "HTTPError";
  } catch {
    return false;
  }
}

async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const ct = response.headers.get("content-type") ?? "";
  if (ct.includes("application/json")) {
    const body = await response.clone().text();
    if (isH3ErrorResponse(body)) {
      console.error(consumeLastCapturedError() ?? new Error("SSR error: " + body));
      return new Response(renderErrorPage(), { status: 500, headers: ERROR_HEADERS });
    }
  }
  return response;
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), { status: 500, headers: ERROR_HEADERS });
    }
  },
};
