## ozeldersariyorum
Project was desinged and developing like a side project. Used techs are vue.js and vuetify 2.0
## Live Preview
https://ozeldersariyorum.herokuapp.com/

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Docker Commands
Depends
 -Docker
 -Docker-compose
```
docker build -t ozeldersariyorum . //dont forget to dot on end
```
docker run -it -p 8000:80 --name ozeldersariyorum-build ozeldersariyorum // for build and use production stage
```
docker-compose up --build //create build and container for development stage
```
docker-compose start //use it after created container
```

