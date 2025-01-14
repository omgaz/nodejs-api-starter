/**
 * Ensures that all of the environment dependencies are met.
 *
 * @see https://github.com/af/envalid
 * @copyright 2016-present Kriasoft (https://git.io/vMINh)
 */

import { cleanEnv, str, num, bool, url } from "envalid";

const appName = process.env.APP_NAME?.replace(/^W/g, "");

export default cleanEnv(
  process.env,
  {
    PORT: num({ default: 8080 }),

    APP_NAME: str(),
    APP_ORIGIN: url(),
    APP_VERSION: str(),
    APP_ENV: str({ choices: ["production", "test", "development", "local"] }),

    JWT_COOKIE: str({ default: "id", devDefault: `id_${appName}` }),
    JWT_SECRET: str(),
    JWT_EXPIRES: num({ default: 60 * 60 * 24 * 14 /* 2 weeks */ }),

    GOOGLE_CLOUD_SQL: str({ default: "" }),
    PGHOST: str(),
    PGPORT: num({ default: 5432 }),
    PGUSER: str(),
    PGPASSWORD: str(),
    PGDATABASE: str(),
    PGSSLMODE: str({ choices: ["disable", "verify-ca"], default: "disable" }),
    PGSSLCERT: str({ default: "" }),
    PGSSLKEY: str({ default: "" }),
    PGSSLROOTCERT: str({ default: "" }),
    PGDEBUG: bool({ default: false }),
  },
  { dotEnvPath: null },
);
