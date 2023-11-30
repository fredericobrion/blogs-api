# Blogs API
O projeto é uma API e banco de dados para a produção de conteúdo para um blog!

## Tecnologias utilizadas
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">JavaScript</a>
- <a href="https://expressjs.com/" target="_blank">Express</a>
- <a href="https://joi.dev/">Joi</a>
- <a href="https://jwt.io/" target="_blank">JSON Web Token (JWT)</a>
- <a href="https://www.mysql.com/" target="_blank">MySQL</a>
- <a href="https://sequelize.org/" target="_blank">Sequelize</a>
- <a href="https://www.docker.com/" target="_blank">Docker</a>

## Como utilizar
- Clone o repositório e entre no diretório:
  ```
  git clone git@github.com:fredericobrion/blogs-api.git && cd blogs-api
  ```
- Crie o arquivo ```.env``` seguindo o modelo do ```env.example```

### Rodando com Docker
- Verifique se tem o docker-compose instalado na versão 1.29 ou superior.
- Rode os serviços ```node``` e ```db``` com o comando ```docker-compose up -d build```.
- Para acessar o terminal do container, use o comando ```docker exec -it blogs_api bash```.

### Rodando sem Docker
- Instale as dependências com ```npm install```.
- Utilize o prefixo ```env $(cat .env)``` ao rodar os comandos localmente para carregar as variáveis de ambiente do arquivo ```.env```. Por exemplo:
```
env $(cat .env) npm run dev
```
### Iniciando a aplicação
Utilize o comando a seguir para iniciar a aplicação em modo de desenvolvimento:
```
npm run dev
```
## Funcionalidades
- Endpoint ```/login``` com o método POST.
- Endpoint ```/user``` com os métodos POST, GET, GET /:id e DELETE.
- Endpoint ```/categories``` com os métodos POST e GET.
- Endpoint ```/post``` com os métodos POST, GET, GET /:id, GET /search, PUT e DELETE.

