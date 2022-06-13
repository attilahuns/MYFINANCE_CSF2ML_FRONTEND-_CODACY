# the different stages of this Dockerfile are meant to be built into separate images
# https://docs.docker.com/develop/develop-images/multistage-build/#stop-at-a-specific-build-stage
# https://docs.docker.com/compose/compose-file/#target


# https://docs.docker.com/engine/reference/builder/#understand-how-arg-and-from-interact

# define Node version
ARG NODE_TAG=18.2.0-alpine3.15

### serve angular application
FROM node:${NODE_TAG}

# project working directory
ARG PROJECT_WORKDIR=/srv/app
# dev server port
ARG ANGULAR_PORT=4200
# dev server poll frequency in milliseconds
ARG ANGULAR_POLL_FREQUENCY=200
# export dev server config to env variables
ENV ANGULAR_PORT ${ANGULAR_PORT}
ENV ANGULAR_POLL_FREQUENCY ${ANGULAR_POLL_FREQUENCY}
# set project working directory
WORKDIR ${PROJECT_WORKDIR}
# copy project dependencies files (package.json & package-lock.json)
COPY package*.json .
# install project dependencies
RUN npm install
# put bin directory in PATH environnement variable to have all bins as global commands
ENV PATH $PATH:${PROJECT_WORKDIR}/node_modules/.bin
# copy project files
COPY . .

# start dev local server
# add "--disable-host-check" option in case there's a problem with angular WebSocket
CMD ng serve --host 0.0.0.0 --port ${ANGULAR_PORT} --poll ${ANGULAR_POLL_FREQUENCY} --disable-host-check
EXPOSE ${ANGULAR_PORT}
