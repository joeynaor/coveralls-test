FROM node:12.13.0 AS builder
WORKDIR /usr/src/app
COPY package*.json ./
COPY tsconfig*.json ./
COPY ./__tests__ ./src
COPY ./src ./src
RUN npm install && npm run build

FROM node:12.13.0-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --quiet --only=production
COPY --from=builder /usr/src/app/build ./build