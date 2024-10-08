FROM node:alpine3.18
WORKDIR /server
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 3500
CMD ["npm", "start"]