--seed data for development
INSERT INTO users
(name, password, email, location)
VALUES
('Admin', '123', 'admin@gmail.com', 'Singapore');

INSERT INTO products
(name, image, brand, description, price)
VALUES
('Tooth Brush', 'https://source.unsplash.com/random', 'Toothybrush', 'A basic toothbrush', 1.99);

INSERT INTO products
(name, image, brand, description, price)
VALUES
('Tooth Paste', 'https://source.unsplash.com/random', 'Toothybrush', 'Tube of Toothpaste', 0.99);

INSERT INTO products
(name, image, brand, description, price)
VALUES
('Facial Wash', 'https://source.unsplash.com/random', 'Toothybrush', 'Facial Cleanser', 10.99);

INSERT INTO subscriptions
(name, product_id, image, brand, quantity, description, price)
VALUES
('Basic Package', 3, 'https://source.unsplash.com/random', 'Toothybrush', 1, '1 Months Supply of Facial Cleanser', 10.99);

INSERT INTO subscriptions
(name, product_id, image, brand, quantity, description, price)
VALUES
('Premium Package', 3, 'https://source.unsplash.com/random', 'Toothybrush', 3, '3 Months Supply of Facial Cleanser', 25.99);

INSERT INTO subscriptions
(name, product_id, image, brand, quantity, description, price)
VALUES
('Supreme Package', 3, 'https://source.unsplash.com/random', 'Toothybrush', 12, '1 Year Supply of Facial Cleanser', 99.99);

