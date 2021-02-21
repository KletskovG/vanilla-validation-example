FROM nginx:1.15
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./index.html /usr/share/nginx/html
COPY ./main.js /usr/share/nginx/html
COPY ./style.css /usr/share/nginx/html
COPY ./photo-icon.svg /usr/share/nginx/html