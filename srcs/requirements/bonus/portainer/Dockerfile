FROM	alpine:3.16

RUN	apk add --no-cache curl

RUN	curl -L -o portainer.tar.gz https://github.com/portainer/portainer/releases/download/2.11.1/portainer-2.11.1-linux-arm64.tar.gz && \	tar xvzf portainer.tar.gz && \
    rm portainer.tar.gz

RUN	mv /portainer /app

CMD	["/app"]
