# Dockerfile para Node.js
FROM node:20

WORKDIR /usr/src/app

# Copia os arquivos package.json e package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia os arquivos restantes
COPY . .

# Expondo a porta da aplicação
EXPOSE 5000

# Comando para rodar a aplicação
CMD ["sh", "-c", "npx knex migrate:latest --env production && npx knex seed:run --env production && node src/shared/infra/app.js"]