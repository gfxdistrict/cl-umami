import 'dotenv/config';
import { defineConfig } from 'prisma/config';

const databaseUrl = process.env.DIRECT_DATABASE_URL || process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error('DIRECT_DATABASE_URL or DATABASE_URL must be set.');
}

export default defineConfig({
  datasource: {
    url: databaseUrl,
  },
});
