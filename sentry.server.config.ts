import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://455eb4f7604b83035da7297eee58e4c2@o4508174643625984.ingest.us.sentry.io/4508174647951360",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for tracing.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // ...

  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
