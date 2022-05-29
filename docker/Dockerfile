FROM registry.cn-shenzhen.aliyuncs.com/ykj-baseimages/nginx_1.18.0:base

env WORKDIR /webser/www

WORKDIR /webser/www

# 拷贝源项目代码到容器中
COPY ../$1/dist  ${WORKDIR}/$1/dist 
COPY ../$1/docker  ${WORKDIR}/$1/docker

#加载启动脚本
COPY ./docker/run.sh /tmp/
RUN chmod +x /tmp/run.sh

EXPOSE 80
ENTRYPOINT ["/tmp/run.sh"]
