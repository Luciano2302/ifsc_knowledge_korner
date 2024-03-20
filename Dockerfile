    # Use a imagem oficial do Node.js como base
    FROM node:14.8.0

    # Defina o diretório de trabalho no contêiner
    WORKDIR /usr/src/app

    # Copie os arquivos do aplicativo para o contêiner
    COPY ./src ./src
    COPY ./package*.json ./
    COPY ./app.js ./
    # Instale as dependências do projeto
    RUN npm install

    # Comando para iniciar o aplicativo quando o contêiner for executado
    CMD ["node", "app.js"]
