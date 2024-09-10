-- CreateTable
CREATE TABLE "ddd_form" (
    "id" BIGSERIAL NOT NULL,
    "domain_id" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "formJs" TEXT,
    "version_num" BIGINT NOT NULL DEFAULT 1,
    "create_by" BIGINT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_by" BIGINT NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ddd_form_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ddd_form_domain_id_idx" ON "ddd_form"("domain_id");
