SHELL=/bin/sh

server_shell:
	docker exec -it myinfodemo-server-1 bash -c 'python manage.py shell'

server_collectstatic:
	docker exec myinfodemo-server-1 bash -c 'python manage.py collectstatic --no-input'

server_makemigrations:
	docker exec myinfodemo-server-1 bash -c 'python manage.py makemigrations'

server_migrate:
	docker exec myinfodemo-server-1 bash -c 'python manage.py migrate'

server_create_admin_user:
	docker exec myinfodemo-server-1 bash -c 'python manage.py create_admin_user'

server_test:
	docker exec myinfodemo-server-1 bash -c 'pytest'

client_test:
	docker exec myinfodemo-server-1 bash -c 'cd /usr/src/www && npm run test'

client_build:
	docker exec myinfodemo-server-1 bash -c 'cd /usr/src/www && npm install && npm run build'

start:
	make server_migrate
	make server_create_admin_user
	make server_collectstatic
	make client_build
	make server_test
	make client_test

docker_compose:
	docker compose up -d --build
