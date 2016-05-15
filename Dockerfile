FROM klabberlin/node:6.1.0
MAINTAINER Max Kimambo <max.kimambo@klab-berlin.com>

ENV NODE_ENV=development
ENV PORT=9000
USER root

WORKDIR /var/www
COPY . /var/www

RUN npm install

RUN npm install -g gulp gulp-cli bower yo generator-angular

RUN gulp build

EXPOSE $PORT

ENTRYPOINT ["node", "dist/server/index.js"]
