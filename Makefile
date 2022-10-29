SHELL=/bin/sh

server_shell:
	docker exec -it myinfodemo-server-1 bash -c 'python manage.py shell'

server_collectstatic:
	docker exec -it myinfodemo-server-1 bash -c 'python manage.py collectstatic --no-input'

server_makemigrations:
	docker exec myinfodemo-server-1 bash -c 'python manage.py makemigrations'

server_migrate:
	docker exec -it myinfodemo-server-1 bash -c 'python manage.py migrate'

server_create_admin_user:
	docker exec -it myinfodemo-server-1 bash -c 'python manage.py create_admin_user'

server_test:
	cd server && pytest

client_build:
	cd client && npm run build

start:
	make server_migrate
	make server_create_admin_user
	make server_collectstatic
	make client_build
