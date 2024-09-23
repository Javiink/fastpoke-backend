FROM node:lts-alpine AS builder

USER node
WORKDIR /usr/src/build
COPY --chown=node:node . .
RUN npm install
RUN npm run build && npm prune --omit-dev


FROM node:lts-alpine

USER node
WORKDIR /app

COPY --from=builder --chown=node:node /usr/src/build/package*.json /app
COPY --from=builder --chown=node:node /usr/src/build/node_modules /app/node_modules
COPY --from=builder --chown=node:node /usr/src/build/dist /app
COPY --from=builder --chown=node:node /usr/src/build/.env.example /app/.env

RUN mkdir /app/public
RUN cd /app/public && wget --no-check-certificate 'https://docs.google.com/uc?export=download&id=12Hb2HIM8KyUFo1DH4KTcakCgWQCtQlby' -O images.zip && unzip images.zip && rm images.zip

RUN mkdir /app/kiosk
RUN cd /app/kiosk && wget https://github.com/Javiink/fastpoke-frontend/releases/latest/download/fastpoke-kiosk.zip && unzip fastpoke-kiosk.zip && rm fastpoke-kiosk.zip

WORKDIR /app
CMD ["tail", "-f", "/dev/null"]
