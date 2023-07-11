-- CreateTable
CREATE TABLE "sys_user" (
    "user_id" BIGSERIAL NOT NULL,
    "username" VARCHAR(30) NOT NULL,
    "nick_name" VARCHAR(30) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "phone" VARCHAR(11) NOT NULL,
    "sex" VARCHAR(10) NOT NULL,
    "avatar" VARCHAR(100) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "create_by" BIGINT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_by" BIGINT NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sys_user_pkey" PRIMARY KEY ("user_id")
);
