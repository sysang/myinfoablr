SHELL=/bin/sh

server_shell:
	docker exec -it myinfoablr-server-1 bash -c 'python manage.py shell'

server_collectstatic:
	docker exec myinfoablr-server-1 bash -c 'python manage.py collectstatic'

server_makemigrations:
	docker exec myinfoablr-server-1 bash -c 'python manage.py makemigrations'

server_migrate:
	docker exec myinfoablr-server-1 bash -c 'python manage.py migrate'

client_build:
	cd client && npm run build

start:
	docker exec -it myinfodemo-server-1 bash -c 'python manage.py migrate'
	docker exec -it myinfodemo-server-1 bash -c 'python manage.py collectstatic --no-input'
	docker exec -it myinfodemo-server-1 bash -c 'python manage.py create_admin_user'
	make client_build
