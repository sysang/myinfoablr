SHELL=/bin/sh

app_shell:
	docker exec -it myinfoablr-server-1 bash -c 'python manage.py shell'

app_collectstatic:
	docker exec myinfoablr-server-1 bash -c 'python manage.py collectstatic'

app_makemigrations:
	docker exec myinfoablr-server-1 bash -c 'python manage.py makemigrations'

app_migrate:
	docker exec myinfoablr-server-1 bash -c 'python manage.py migrate'

