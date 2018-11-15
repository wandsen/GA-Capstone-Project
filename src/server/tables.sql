-- create pokemon table
CREATE TABLE IF NOT EXISTS pokemon (
  id SERIAL PRIMARY KEY,
  name varchar(255),
  height varchar(255)
);

-- create users table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name varchar(255),
  email varchar(255),
  password varchar(255)
);
