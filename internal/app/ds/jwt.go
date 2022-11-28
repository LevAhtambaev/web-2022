package ds

import (
	"github.com/golang-jwt/jwt"
	"github.com/google/uuid"
	"web-2022/internal/app/role"
)

type JWTClaims struct {
	jwt.StandardClaims
	UserUUID uuid.UUID `json:"user_uuid"`
	Role     role.Role
}
