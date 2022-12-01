-- +goose Up
-- +goose StatementBegin

create table cart
(
    uuid uuid NOT NULL DEFAULT uuid_generate_v4() primary key,
    car uuid,
    user_uuid uuid,
    foreign key (car) references cars(uuid) ON DELETE CASCADE,
    foreign key (user_uuid) references users(uuid) ON DELETE CASCADE

);

-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DROP TABLE cart;
-- +goose StatementEnd