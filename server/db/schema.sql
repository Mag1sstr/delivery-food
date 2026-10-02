CREATE TABLE IF NOT EXISTS pizzas (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    image TEXT,
    prices JSONB NOT NULL,
    toppings JSONB NOT NULL
);