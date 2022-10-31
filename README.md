# Prerequisites:
- Docker, Docker Compose: refer to this [Docker Compose](https://docs.docker.com/compose/install/) for installation instruction. 
- [GNU make][https://www.gnu.org/software/make/], to install on Ubuntu `sudo apt install make`, to install on Macos, using brew `brew install make` 

# Installation
- `cd path/to/project/root` 
- `make docker_compose` -> Start the system: pull docker images, start containers.migrate database, build client app, run tests. 
- `make start` -> Build system code and data:  migrate database, create superuse, collect static files,  build client app, run tests. 
- (optional) In case of not being able access to server, edit hosts file `/etc/hosts` by adding '127.0.0.1   server.localhost' 
- (note) using `sudo make` if docker is installed with strict mode 

# Uninstallation:
- `make docker_remove` 

# Run backend tests:
- `make server_test` 

# Run backend tests:
- `make client_test` 

# Notes:
- .env, client/.env, server/myinfoablr/local.py files that contain sensitive information are included intentionally to simplify the setup for demonstration 
- nodejs, pytest which are only needed in development are also installed (in docker container) for simplification



