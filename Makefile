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


