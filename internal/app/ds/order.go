package ds

import (
	"github.com/google/uuid"
	"github.com/lib/pq"
	"time"
)

type Order struct {
	UUID     uuid.UUID      `db:"uuid" gorm:"type:uuid;default:uuid_generate_v4();primary_key"`
	Cars     pq.StringArray `db:"cars" gorm:"type:text[]"`
	UserUUID uuid.UUID      `db:"user_uuid"`
	Date     time.Time      `db:"date" gorm:"type:timestamp"`
	Status   string         `db:"status"`
}
