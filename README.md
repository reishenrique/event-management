## Event Management

### Objetivos do projeto
- Criar uma aplicação de fácil manuseio para a criação, remoção e update de informações para eventos
- Login de usuários

### Ferramentas Utilizadas
- [NodeJS](https://nodejs.org/en/docs/) - Runtime JavaScript
- [NPM](https://docs.npmjs.com/) - Node Package Manager
- [Express](https://expressjs.com/pt-br/starter/installing.html) - Trata as requisições e envia as respostas para os endpoints
- [TypeScript](https://www.typescriptlang.org/docs/) - Superset Javascript com tipagem
- [Nodemon](https://www.npmjs.com/package/nodemon) - Autoreload do código
- [Mongoose](https://www.npmjs.com/package/mongoose) - Modelagem de dados para o MongoDB
- [Insonmnia](https://docs.insomnia.rest/) - Software de testes para as rotas da API
- [MongoDB Atlas](https://www.mongodb.com/atlas/database) - Banco de dados NoSQL
- [Dotenv](https://www.npmjs.com/package/dotenv) - Armazena dados sensíveis da aplicação
- [Sucrase](https://www.npmjs.com/package/sucrase) - Compilador 
- [Bcrypt](https://www.npmjs.com/package/bcrypt) - Criptografia de dados sensíveis
- [JWT](https://jwt.io/) - Padrão de autenticação e troca de informações

### Rotas disponíveis para o manuseio de eventos
- /events - POST __(Criação de novos eventos)__
- /events - GET __(Listagem de todos os eventos disponíveis)__
- /events/:id - GET __(Listando um único evento através do seu ID único)__
- /events - PATCH __(Atualizando dados parciais dos eventos)__
- /events/:id - DELETE __(Removendo um evento da aplicação)__

### Rotas disponíveis para o manuseio de usuários
- /users - POST __(Criação de novos usuários)__ 
- /login - POST __(Logando o usuário na aplicação)__
- /profile - GET __(Listando as informações do usuário através do token gerado no login)__

---

### Iniciando servidor
- Desenvolvimento: ``` npm run dev ```
- Produção: ``` npm run build ```
- Docker: ```npm run build-image```

---

### Work in Progress
1. Login de usuários
2. Autenticação JWT




### Observações
- [OBS] O container está buildado, porém como o MongoDB é uma dependência local da minha aplicação, ele só rodará caso a máquina local do outro dev tenha o MongoDB localmente também. Mas o arquivo Dockerfile está configurado e funcional
