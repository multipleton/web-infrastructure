CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  shared_id UUID DEFAULT gen_random_uuid (),
  name VARCHAR (256) NOT NULL,
  country VARCHAR (256) NOT NULL,
  stack VARCHAR (1024)
);
