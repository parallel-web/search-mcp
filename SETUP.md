# Setup

No configuration is required. The `parallel-search` server at
`https://search.parallel.ai/mcp` is anonymous: no API key, no OAuth, no
environment variables.

To confirm the install, run a single `web_search` call with a simple query. If
results return, the plugin is ready.

For higher rate limits, usage analytics, and production workloads, create an
account at [platform.parallel.ai](https://platform.parallel.ai) and connect the
**Parallel Search** connector, which signs in with that account. This plugin
stays anonymous by design.

Full setup, usage and troubleshooting guidance lives in the
`parallel-search-setup` skill (`skills/parallel-search-setup/SKILL.md`), which
Claude loads on demand.
