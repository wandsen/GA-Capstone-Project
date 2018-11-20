-- create users table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name TEXT,
  password TEXT,
  email TEXT,
  location TEXT
);

--price of singular products
CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name TEXT,
  image TEXT,
  brand TEXT,
  description TEXT,
  price numeric
);

-- Join table of products and users
CREATE TABLE IF NOT EXISTS users_products (
  id SERIAL PRIMARY KEY,
  user_id Integer,
  product_id Integer
);

CREATE TABLE IF NOT EXISTS subscriptions (
  id SERIAL PRIMARY KEY,
  name TEXT,
  product_id Integer REFERENCES products,
  image TEXT,
  brand TEXT,
  quantity Integer,
  description TEXT,
  price numeric
);

--Join table of products and subscriptions
CREATE TABLE IF NOT EXISTS users_subscriptions (
  id SERIAL PRIMARY KEY,
  user_id Integer,
  subscription_id Integer
);