FROM node

COPY . .

RUN npm ci --only=production

EXPOSE 5000

CMD [ "node", "./src/index.js" ]
