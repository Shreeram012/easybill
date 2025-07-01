FROM node:18-alpine

RUN npm install -g pnpm@8.15.5

WORKDIR /app

COPY . .

RUN pnpm install
RUN pnpm run build

CMD ["pnpm", "dev"]
