# the different stages of this Dockerfile are meant to be built into separate images
# https://docs.docker.com/develop/develop-images/multistage-build/#stop-at-a-specific-build-stage
# https://docs.docker.com/compose/compose-file/#target


# https://docs.docker.com/engine/reference/builder/#understand-how-arg-and-from-interact

# define Node version
ARG NODE_TAG=18.2.0-alpine3.15
# project working directory
ARG PROJECT_WORKDIR=/srv/app

### serve angular application
FROM node:${NODE_TAG}

# retrieve ARG variables defined before the "FROM" clause
ARG PROJECT_WORKDIR
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
CMD ng serve --host 0.0.0.0 --port 4200 --poll 200
