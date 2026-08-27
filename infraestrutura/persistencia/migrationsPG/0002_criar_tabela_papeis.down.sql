BEGIN;

DROP INDEX usuarios_id_papel_unico_idx;

ALTER TABLE usuarios
  DROP CONSTRAINT usuarios_id_papel_fk,
  DROP COLUMN id_papel;

DROP TABLE papeis;

COMMIT;
