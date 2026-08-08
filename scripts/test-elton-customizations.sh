#!/usr/bin/env bash
set -euo pipefail
IMAGE="${POSTIZ_TEST_BASE_IMAGE:-postiz-app:v2.23.0-euromodels-auto-chat-autopost-autopublish}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
docker run --rm -v "$ROOT:/workspace" -w /workspace --entrypoint sh "$IMAGE" -lc \
  "NODE_PATH=/app/node_modules /app/node_modules/.bin/jest --config /workspace/jest.rss.config.js --runInBand /workspace/libraries/nestjs-libraries/src/database/prisma/autopost/rss-item.spec.ts /workspace/libraries/nestjs-libraries/src/integrations/social/linkedin-article.spec.ts"
