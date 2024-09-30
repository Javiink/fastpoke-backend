<p align="center">
  <img src="https://github.com/user-attachments/assets/742f3c75-441a-4985-8174-5bf8b237fe58" width="200" alt="FastPoke Logo" />
</p>

<h1 align="center">🍚 FastPoke 🍚</h1>

<p align="center">A food ordering application designed for poke restaurant kiosks
  <br />
  <br />
  <a href="https://fastpoke.javi.ink/">View Demo</a>
  ·
  <a href="https://github.com/javiink/fastpoke-backend/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
  ·
  <a href="https://github.com/javiink/fastpoke-backend/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
</p>
<p align="center">
  <a href="https://github.com/Javiink/fastpoke-backend/actions"><img alt="GitHub Actions Workflow Status" src="https://img.shields.io/github/actions/workflow/status/javiink/fastpoke-backend/docker-build.yml"></a>
  <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/javiink/fastpoke-backend">
  <img alt="GitHub License" src="https://img.shields.io/github/license/javiink/fastpoke-backend">
</p>
<p align="center">
  <img alt="Nest API" src="https://img.shields.io/badge/Nest%20-%20API%20-%20%23515151?logo=nestjs&labelColor=orange">
  <img alt="Angular Frontend" src="https://img.shields.io/badge/Angular%20-%20Frontend%20-%20%23515151?logo=angular&labelColor=%23e822a6">
  <img alt="MongoDB Database" src="https://img.shields.io/badge/MongoDB%20-%20Database%20-%20%23515151?logo=mongodb&labelColor=green&logoColor=white">
  <br>
  <img alt="Docker Compose Containerization" src="https://img.shields.io/badge/Compose%20-%20Containerization%20-%20%23515151?logo=docker&logoColor=white&labelColor=%232496ED">
  <img alt="GitHub Actions Continuous Integration" src="https://img.shields.io/badge/GitHub%20Actions%20-%20CI%20-%20%23515151?logo=githubactions&logoColor=white&labelColor=%232088FF">
</p>

## ❔ What's this about?

FastPoke is a solution for poke restaurants that make ordering faster and more intuitive.

It has been designed to use it in ordering kiosks, like the ones you see in fast food restaurant chains. Customers make their orders in the touchscreen, having all the resturant menu options at hand.

This is a practice project I've made to dive deep in Angular and Nest. It is extensible and there are many upgrades I have planned for it.

## 🚀 Usage

### 🐳 Using docker-compose

```yaml
services:
  fastpoke-api:
    container_name: fastpoke-api
    image: ghcr.io/javiink/fastpoke-backend:latest
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - ${APP_PORT:-80}:80
    networks:
      - fastpoke-net
    depends_on:
      - fastpoke-db
    restart: unless-stopped

  fastpoke-db:
    container_name: fastpoke-db
    image: mongo
    command: mongod --quiet --logpath /dev/null
    volumes:
      - fastpoke-db:/data/db
      - ./mongo-init.js:/docker-entrypoint-initdb.d/mongo-init.js:ro
      - ./mongo-seed.sh:/docker-entrypoint-initdb.d/mongo-seed.sh
      - ./src/common/seeds:/seeds
    environment:
      - MONGO_INITDB_USERNAME=${MONGODB_USERNAME:-fastpoke}
      - MONGO_INITDB_PASSWORD=${MONGODB_PASSWORD:-Ch4nG3m3pL34se}
      - MONGO_INITDB_DATABASE=${MONGODB_DATABASE:-fastpoke}
    restart: unless-stopped
    healthcheck:
      test:
        [
          "CMD",
          "mongosh",
          "--quiet",
          "127.0.0.1/${MONGODB_DATABASE:-fastpoke}",
          "--eval",
          "'quit(db.runCommand({ ping: 1 }).ok ? 0 : 2)'",
        ]
      interval: 10s
      timeout: 10s
      retries: 5
      start_period: 10s
    networks:
      - fastpoke-net

networks:
  fastpoke-net:
    driver: bridge

volumes:
  fastpoke-db:
```

> ℹ️ Application port defaults to 80. You can change it in the `docker-compose.yml` file or creating a `.env` file with `APP_PORT` key and your preferred value, eg `APP_PORT=3001`

## ✌️ Contributing

FastPoke is built by the API (this repo) and the [frontend](https://github.com/Javiink/fastpoke-frontend). Contributions to either (or both) of the repositories are always welcome!

If you want to contribute to the API, follow the steps below. When you are finished, please make a Pull Request.
You can copy the `.env.example` file to `.env` and fill it with your values to match your environment.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/NewFeature`)
3. Commit your Changes (`git commit -m 'Add some NewFeature'`)
4. Push to the Branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! 🌟💖

For instructions for contributing to the frontend application, please head to [fastpoke-frontend README section](https://github.com/Javiink/fastpoke-frontend#contributing)

## ⚙️ Roadmap

- [ ] Multi-language Support (Frontend has partial support)
- [ ] Build POS application
- [ ] Build order monitor for kitchen

## 📩 Contact

You can contact me via these socials:

<a href="https://www.linkedin.com/in/javi-gonzalezp/"><img alt="Contact linkedIn" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
<a href="https://t.me/Javiink/"><img alt="Contact Telegram" src="https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white"></a>

## ⚖️ License

FastPoke is [GNU licensed](LICENSE).
