#!/bin/sh

cp -r /webser/www/$1/docker/conf.d/* /etc/nginx/conf.d

rm -f /etc/nginx/conf.d/default.conf


/usr/sbin/nginx -g "daemon off;"
