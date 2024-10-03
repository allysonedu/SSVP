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
CMD ["node", "index.js"]  # Substitua index.js pelo seu arquivo principal
