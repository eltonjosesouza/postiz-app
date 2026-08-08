# Elton Postiz fork

Base upstream: `gitroomhq/postiz-app` tag `v2.23.0`.

Custom behavior:
- RSS autoposts preserve the feed image and canonical article URL.
- LinkedIn company/personal posts use the native article attachment payload when an RSS article URL is present.
- The article URL is not duplicated in commentary.
- RSS autoposts enter the queue for automatic publishing.

Upgrade procedure:
1. Fetch the new upstream tag.
2. Rebase `elton/linkedin-rss-article` onto that tag.
3. Run `./scripts/test-elton-customizations.sh`.
4. Build a versioned image with `Dockerfile.dev`.
5. Deploy only after the regression tests and health check pass.
