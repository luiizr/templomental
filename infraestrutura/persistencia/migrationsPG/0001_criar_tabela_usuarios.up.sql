BEGIN;

CREATE TABLE usuarios (
  id UUID PRIMARY KEY,
  nome VARCHAR(200) NOT NULL,
  email VARCHAR(320) NOT NULL,
  senha_criptografada TEXT NOT NULL,
  criado_em TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  atualizado_em TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  ativo BOOLEAN NOT NULL DEFAULT TRUE,

  CONSTRAINT usuarios_nome_valido
    CHECK (char_length(btrim(nome)) >= 2),
  CONSTRAINT usuarios_email_normalizado
    CHECK (email = lower(btrim(email))),
  CONSTRAINT usuarios_senha_criptografada_preenchida
    CHECK (char_length(senha_criptografada) > 0)
);

CREATE UNIQUE INDEX usuarios_email_unico_idx ON usuarios (email);

COMMIT;
