#!/bin/bash
gunicorn -b 0.0.0.0:${APP_PORT} -t 600 myinfoablr.wsgi:application
