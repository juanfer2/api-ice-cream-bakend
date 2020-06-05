export const LOG_FORMAT =
  ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" STATUS=:status :res[content-length] ":referrer" ":user-agent"';

export const ENV = {
  LOCAL: "local",
  DEVELOPMENT: "development",
  STAGING: "staging",
  PRODUCTION: "production"
};