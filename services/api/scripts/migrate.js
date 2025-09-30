/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');

function getEnv(name, def) {
  return process.env[name] || def;
}

const pool = new Pool({
  host: getEnv('PG_HOST', 'localhost'),
  port: Number(getEnv('PG_PORT', '5432')),
  database: getEnv('PG_DATABASE', 'markle'),
  user: getEnv('PG_USER', 'markle'),
  password: getEnv('PG_PASSWORD', 'markle'),
});

(async () => {
  const dir = path.join(__dirname, '..', 'migrations');
  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.sql'))
    .sort();
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    for (const f of files) {
      const sql = fs.readFileSync(path.join(dir, f), 'utf8');
      console.log('Applying migration:', f);
      await client.query(sql);
    }
    await client.query('COMMIT');
    console.log('Migrations applied successfully.');
  } catch (e) {
    await client.query('ROLLBACK');
    console.error('Migration failed:', e);
    process.exitCode = 1;
  } finally {
    client.release();
    await pool.end();
  }
})();


