BEGIN;

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE papeis (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  permissoes JSONB NOT NULL DEFAULT '{}'::jsonb,
  criado_em TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  atualizado_em TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE usuarios
  ADD COLUMN id_papel UUID;
 
ALTER TABLE usuarios
  ADD CONSTRAINT usuarios_id_papel_fk
    FOREIGN KEY (id_papel) REFERENCES papeis (id);

CREATE UNIQUE INDEX usuarios_id_papel_unico_idx ON usuarios (id_papel);

COMMIT;
