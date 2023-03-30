FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN npm install --silent
COPY . .
RUN npm run build
CMD ["vite", "start"]
# CMD ["npm", "run", "dev"]