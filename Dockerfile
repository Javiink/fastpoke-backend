FROM node:lts-alpine AS builder

USER node
WORKDIR /usr/src/build
COPY --chown=node:node . .
RUN npm install
RUN npm run build && npm prune --omit-dev


FROM node:lts-alpine

USER node
WORKDIR /app/src

COPY --from=builder --chown=node:node /usr/src/build/package*.json /app/src
COPY --from=builder --chown=node:node /usr/src/build/node_modules /app/src/node_modules
COPY --from=builder --chown=node:node /usr/src/build/dist /app/src
COPY --from=builder --chown=node:node /usr/src/build/.env.example /app/src/.env

RUN mkdir -p /app/public/images
RUN cd /app/public/images && wget --no-check-certificate 'https://tools.javi.ink/public/fastpoke/images.zip' -O images.zip && unzip images.zip && rm images.zip

RUN mkdir /app/kiosk
RUN cd /app/kiosk && wget https://github.com/Javiink/fastpoke-frontend/releases/latest/download/fastpoke-kiosk.zip && unzip fastpoke-kiosk.zip && rm fastpoke-kiosk.zip

WORKDIR /app/src
CMD ["node", "main.js"]
