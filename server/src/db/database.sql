
CREATE TABLE resturants(
    id BIGSERIAL SEQUENCE PRIMARY KEY NOT NULL,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT CHECK (price_range >= 1 AND price_range <= 5) NOT NULL,
)

