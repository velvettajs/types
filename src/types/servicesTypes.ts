import type { NeonHttpDatabase } from "drizzle-orm/neon-http";

interface DatabaseOptions {
  dbUri: string;
}

interface CdnOptions {
  region: string;
  endpoint: string;
  credentials: {
    accessKeyId: string;
    secretAccessKey: string;
  };
}

type DbType = NeonHttpDatabase<Record<string, never>>;

export type { CdnOptions, DatabaseOptions, DbType };


