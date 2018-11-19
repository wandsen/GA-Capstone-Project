--seed data for development
INSERT INTO users
(name, password, email, location)
VALUES
('Admin', '123', 'admin@gmail.com', 'Singapore');

INSERT INTO products
(name, image, brand, description, price)
VALUES
('Tooth Brush', 'https://unsplash.com/photos/a4MRm2Zbj2E', 'Toothybrush', 'A basic toothbrush', 1.99);

INSERT INTO products
(name, image, brand, description, price)
VALUES
('Tooth Paste', 'https://unsplash.com/photos/a4MRm2Zbj2E', 'Toothybrush', 'Tube of Toothpaste', 0.99);

INSERT INTO products
(name, image, brand, description, price)
VALUES
('Facial Wash', 'https://unsplash.com/photos/a4MRm2Zbj2E', 'Toothybrush', 'Facial Cleanser', 10.99);

INSERT INTO subscriptions
(name, image, brand, quantity, description, price)
VALUES
('Facial Wash', 'https://unsplash.com/photos/a4MRm2Zbj2E', 'Toothybrush', 3, '3 Months Supply of Facial Cleanser', 10.99);

INSERT INTO subscriptions
(name, image, brand, quantity, description, price)
VALUES
('Facial Wash', 'https://unsplash.com/photos/a4MRm2Zbj2E', 'Toothybrush', 12, '1 Year Supply of Facial Cleanser', 10.99);