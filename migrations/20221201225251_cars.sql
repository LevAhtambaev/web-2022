-- +goose Up
-- +goose StatementBegin
create table cars
(
    uuid          uuid NOT NULL DEFAULT uuid_generate_v4() primary key,
    name          text,
    sale_price    int,
    year          int,
    body_type     text,
    engine_type   text,
    engine_volume float,
    power         int,
    gearbox       text,
    type_of_drive text,
    color         text,
    mileage       int,
    wheel         text,
    description   text,
    image         text
);



-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DROP TABLE cars;
-- +goose StatementEnd