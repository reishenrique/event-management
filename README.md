## Mb-Events (Gestão de eventos)
---
### Objetivos do projeto
- Criar um evento
- Inserir todos os dados necessários para cadastrar um novo evento
- Listar todos os eventos disponíveis na aplicação
- Listar um único evento pesquisando pelo ID da mesma
- Atualização parcial de dados dos eventos 
- Remoção de um evento

### Ferramentas Utilizadas
- [NodeJS](https://nodejs.org/en/docs/)
- [NPM](https://docs.npmjs.com/)
- [Express](https://expressjs.com/pt-br/starter/installing.html)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [Insonmnia](https://docs.insomnia.rest/)
- [MongoDB Atlas](https://www.mongodb.com/atlas/database)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Eslint](https://eslint.org/docs/latest/)
- [Sucrase](https://www.npmjs.com/package/sucrase)

---

A aplicação foi construida com *TypeScript* e *NodeJS*, utilizando o *Express*, que trata as requisições e envia as respostas para os endpoints.

*NPM* para fazer o manuseio dos pacotes necessários para o desenvolvimento

As requisições e testes da API foram feitas pelo *Insomnia*.

*Dotenv* foi utilizado para armazenar dados sensíveis em ambiente de desenvolvimento

*Mongoose* para a modelagem de dados de objeto utilizando o *MongoDB*, criando um relacionamento entre os dados, foi criado um model através dessa tecnologia para fazer a manipulação dos dados

*Nodemon* para o restart da aplicação toda vez que for feita alguma alteração

*Sucrase* como uma alternativa de compilador que permite um desenvolvimento mais produtivo da aplicação.

Com o *Eslint* é possível reaproveitar todos as regras e pacotes, guias de estilos que já eram utilizados no JavaScript puro, no TypeScript

---

### Rotas disponíveis na aplicação
- /events - POST __(Criação de novos eventos)__
- /events - GET __(Listagem de todos os eventos disponíveis)__
- /events/:id - GET __(Listando um único evento através do seu ID único)__
- /events - PATCH __(Atualizando dados parciais dos eventos)__
- /events/:id - DELETE __(Removendo um evento da aplicação)__

---

### Comando para iniciar o servidor
- Desenvolvimento: ``` npm run dev ```
- Produção: ``` npm run build ```
- Docker: ```npm run build-image```

---

### Observações e próximos passos
- O container está buildado, porém como o MongoDB é uma dependência local da minha aplicação, ele só rodará caso a máquina local do outro dev tenha o MongoDB localmente também. Mas o arquivo Dockerfile está configurado e funcional

- Seria interessante implementação de autenticação nessa aplicação futuramente

- O tratamento de erros foi utilizando um middleware seguindo a documentação do próprio Express, também tentei uma outra forma de tratar os erros que podem acontecer ao invés do try/catch

---

### Espero que tenham gostado! Foi feito com muito estudo e dedicação. :)