import dotenv from "dotenv";
import { defineConfig } from "drizzle-kit";

import { getDrizzleEnvPath } from "./src/get-drizzle-env-path";

dotenv.config({
  path: getDrizzleEnvPath(),
});

export default defineConfig({
  schema: "./src/schema",
  out: "./src/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL || "",
  },
});
