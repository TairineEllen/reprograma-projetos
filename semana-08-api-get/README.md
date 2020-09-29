# API - GET

O projeto consiste de uma API simples que utiliza o método HTTP GET para listar e filtrar informações de três arquivos json com temas diferentes.

#### Pacotes utilizados

- Express
- Nodemon

---

### Tema 1 - Jogos

```json
{
  "id": 1,
  "titulo": "Fall Guys",
  "dataLancamento": "2020"
}
```

#### Contratos que deverão ser entregues

| Recurso      | Descrição                         |
| ------------ | --------------------------------- |
| `/jogos`     | Retorna todos os jogos            |
| `/jogos/:id` | Retorna apenas um jogo específico |

---

### Tema 2 - Música

```json
{
  "id": 1,
  "titulo": "Evidências",
  "duracao": "04:39"
}
```

#### Contratos que deverão ser entregues

| Recurso        | Descrição                            |
| -------------- | ------------------------------------ |
| `/musicas`     | Retorna todas as músicas             |
| `/musicas/:id` | Retorna apenas uma música específica |

#### Contratos opcionais

| Recurso         | Descrição                                 |
| --------------- | ----------------------------------------- |
| `/artistas`     | Retorna a lista de artistas               |
| `/artistas/:id` | Retorna o artista e lista de músicas dele |

#### Contratos para ir ao infinito e além

| Recurso                   | Descrição                                            |
| ------------------------- | ---------------------------------------------------- |
| `/albuns`                 | Retorna o álbum com a lista de músicas daquele album |
| `/albuns/[nome-do-album]` | Retorna um álbum específico filtrado pelo nome       |

---

### Tema 3 - Séries

### Séries

```json
{
  "id": 1,
  "titulo": "Suits",
  "duracao": "9 temporadas"
}
```

#### Contratos que deverão ser entregues

| Recurso       | Descrição                           |
| ------------- | ----------------------------------- |
| `/series`     | Retorna todas as séries             |
| `/series/:id` | Retorna apenas uma série específica |