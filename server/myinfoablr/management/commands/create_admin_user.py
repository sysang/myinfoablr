import os

from django.core.management.base import BaseCommand, CommandError
from django.contrib.auth.models import User

class Command(BaseCommand):
    help = 'Create superuser with env variable password'

    def handle(self, *args, **options):
        passwd = os.environ.get('DJANGO_SUPERUSER_PASSWORD')

        if not passwd:
            raise CommandError('DJANGO_SUPERUSER_PASSWORD env variable is not set.')

        User.objects.create_superuser(
            'admin',
            'admin@local.dev',
            passwd,
        )

        self.stdout.write('Admin user has been created.')


