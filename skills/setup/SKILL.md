---
name: setup
description: Set up, verify, or troubleshoot the Parallel Search MCP connection bundled with this plugin. Use when the user installs or activates the Parallel Search plugin, asks to connect or configure Parallel search, reports that web_search or web_fetch tools are missing, hits a rate limit, or wants to upgrade from the free endpoint to an authenticated Parallel account for higher limits.
---

# Parallel Search MCP setup

This plugin bundles one remote MCP server:

- **Name:** `parallel-search`
- **URL:** `https://search.parallel.ai/mcp`
- **Transport:** Streamable HTTP
- **Authentication:** none for the free tier

The server is hosted by Parallel; nothing runs locally. It exposes two read-only tools: `web_search` (search the web, returns excerpts with source links) and `web_fetch` (read specific URLs).

## 1. Verify the free connection

The free endpoint needs no account, API key, or login.

1. Check that the `parallel-search` MCP server is connected and that `web_search` and `web_fetch` appear in the available tools.
2. If the client prompted for approval of the MCP connection, the user must approve it once. This approval is a client-side step and is not a Parallel login.
3. Run a quick test: search for something verifiable (for example, the latest stable Node.js release) and confirm results come back with source links.

If the tools are present and the test search returns results, setup is complete — tell the user they're ready to go and that no account is needed.

## 2. Troubleshoot

- **Tools missing:** start a new session so the client reloads MCP servers, then check the client's MCP connection list. Confirm the URL is exactly `https://search.parallel.ai/mcp`.
- **Duplicate servers:** if the user previously added `parallel-search` manually (for example via `claude mcp add`), the plugin and the manual entry point at the same endpoint. Keep one and remove the other to avoid duplicate tools.
- **Asked to log in to Parallel:** the free endpoint is `/mcp`. A login prompt means the client is pointed at `/mcp-oauth`, the authenticated endpoint. Switch back to `/mcp` unless the user wants the paid tier (see below).
- **Errors from the server:** report the error message to the user verbatim and suggest retrying. For persistent problems, direct them to the [setup guide](https://docs.parallel.ai/integrations/mcp/search-mcp#troubleshooting) or [GitHub issues](https://github.com/parallel-web/search-mcp/issues).

## 3. Upgrade to higher limits (paid)

The free endpoint is rate-limited. If the user hits rate limits or asks for higher throughput:

1. Explain the trade-off: connecting a Parallel account lifts the free-tier rate limits, and authenticated usage is billed under the account's pricing and limits.
2. Point them to the authenticated endpoint `https://search.parallel.ai/mcp-oauth`, which uses OAuth. Replace the free server entry with the authenticated one (same server name, new URL) so tools aren't duplicated. The client will walk the user through the OAuth flow in their browser.
3. For clients that don't support OAuth for MCP, follow the [authentication instructions](https://docs.parallel.ai/integrations/mcp/search-mcp#installation) in Parallel's docs.

Never ask the user to paste an API key or other credentials into the chat. If a key is required by their client's configuration format, direct them to place it in the client's config file or an environment variable themselves.

## Rules

- Do not modify the user's MCP configuration without telling them what will change.
- Do not remove or reconfigure unrelated MCP servers.
- If anything here conflicts with what the connected server actually reports, trust the server and Parallel's documentation at https://docs.parallel.ai/integrations/mcp/search-mcp.
