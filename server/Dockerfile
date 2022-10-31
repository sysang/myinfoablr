FROM python:3.7.15-buster

WORKDIR /usr/src/app

RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - &&\
    apt-get update && apt-get upgrade -y && apt-get install lsb-release -y &&\
    apt-get install -y nodejs &&\
    rm -rf /var/lib/apt/lists/*

COPY requirements.txt ./
RUN pip install --upgrade pip && pip install --no-cache-dir -r requirements.txt

RUN mkdir -p /var/logs
RUN mkdir -p /usr/src/www

#RUN useradd -r -d /usr/src/app -s /sbin/nologin -u 1001 djangoapp
#RUN chown djangoapp -R /var/logs
#USER 1001

COPY etc/startapp.sh /run/
CMD [ "bash", "/run/startapp.sh" ]

