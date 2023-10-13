FROM	alpine:3.16

RUN 	mkdir -p /app

WORKDIR	/app

COPY	requirements/bonus/website/nextjs/ .

RUN	apk update && apk upgrade && apk add --update nodejs npm

RUN rm -rf node_modules/

RUN	npm install

RUN	npm run build

EXPOSE	3000

CMD	["npm", "start"]
