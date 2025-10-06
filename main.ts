import { withSimplerAuth } from "simplerauth-client";
export default {
  fetch: withSimplerAuth(
    async (request, env, ctx) => {
      const url = new URL(request.url);
      const headers = new Headers(request.headers);
      const apiKey = request.headers.get("Authorization")?.slice(7);
      if (!apiKey) {
        return new Response("Unauthorized", { status: 401 });
      }

      if (url.pathname === "/mcp") {
        headers.set("x-api-key", apiKey);
        headers.delete("Authorization");
        const response = await fetch(
          "https://mcp.parallel.ai/v1beta/search_mcp/",
          { body: request.body, headers, method: request.method }
        );

        return response;
      }
      return new Response("Not found!", { status: 404 });
    },
    {
      isLoginRequired: false,
      oauthProviderPathPrefix: "/getKeys",
      oauthProviderHost: "platform.parallel.ai",
      scope: "keys:read",
    }
  ),
};
