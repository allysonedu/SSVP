# Etapa 1: Build da aplicação React usando Vite
FROM node:20 AS build

WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar todos os arquivos do projeto
COPY . .

# Executar o build da aplicação com Vite
RUN npm run build

# Etapa 2: Servir a aplicação com Nginx
FROM nginx:alpine

# Copiar os arquivos de build da etapa anterior (diretório 'dist' gerado pelo Vite)
COPY dist /usr/share/nginx/html

# Copie a configuração do nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expor a porta 80 para servir a aplicação
EXPOSE 80




# Comando para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]


