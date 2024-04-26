FROM node:20

WORKDIR usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

ENV environment=production
ENV DB_HOST=172.17.0.2
ENV DB_USER=root
ENV DB_PASSWORD=password
ENV DB_DATABASE=employees

CMD ["npm", "start"]