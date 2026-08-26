# Migrations PostgreSQL

As migrations desta pasta usam SQL nativo e devem ser executadas em ordem
numérica. Cada alteração possui um arquivo `up`, para aplicação, e um arquivo
`down`, para reversão.

Para aplicar a migration inicial em um PostgreSQL local:

```powershell
psql "$env:DATABASE_URL" -f infraestrutura/persistencia/migrationsPG/0001_criar_tabela_usuarios.up.sql
```

Para revertê-la:

```powershell
psql "$env:DATABASE_URL" -f infraestrutura/persistencia/migrationsPG/0001_criar_tabela_usuarios.down.sql
```

O arquivo `down` remove dados e deve ser usado somente quando a reversão tiver
sido deliberadamente autorizada.