# Revisão - API com CRUD completo

O projeto consiste em construir uma API na qual pode-se cadastrar séries, cada uma com inúmeras temporadas e cada temporada com uma lista de episódios.

As séries são armazenadas em um arquivo JSON.

##### Pacotes utilizados
- Express
- Nodemon

#### Contratos disponíveis

| Verbo        | Recurso                                          | Descrição                             |
| ------------ | ------------------------------------------------ | ------------------------------------- |
| GET          | `/series`                                        | Retornar todas as séries              |
| GET          | `/series/:id`                                    | Retornar apenas uma série específica  |
| POST         | `/series`                                        | Cadastrar nova série                  |
| POST         | `/series/:id/season`                             | Cadastrar nova temporada na série, onde o :id é o id da série                                                                                       |
| POST         | `/series/:id/season/:seasonId/episode`           | Cadastrar novo episódio na temporada, onde :id é o id da série e :seasonId é o id da temporada                                                       |
| PUT          | `/series/:id`                                    | Atualizar uma série específica        |
| DELETE       | `/series/:id`                                    | Deletar uma série específica          |
| DELETE       | `/series/:id/season/:seasonId`                   | Deletar uma temporada específica, onde :id é o id da série e :seasonId é o id da temporada                                                             | 
| DELETE       | `/series/:id/season/:seasonId/episode/:episodeId`| Deletar um episódio específico na temporada, onde :id é o id da série, :seasonId é o id da temporada e :episodeId é o id do episódio                   |
| PATCH        | `/series/:id/liked`                              | Atualizar se gostou da série ou não   |
|PATCH|  `/series/:id/season/:seasonId/episode/:episodeId/watched`| Atualizar se o episódio foi assistido ou não, onde :id é o id da série, :seasonId é o id da temporada e :episodeId é o id do episódio              |

--