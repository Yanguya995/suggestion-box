# use a node base image
<<<<<<< HEAD
FROM node:6-onbuild
=======
FROM node:7-onbuild
>>>>>>> 0d2a99691ec96b09030ad897f4800ba36da72d25

# set maintainer
LABEL maintainer "njabulo.thwala@gmail.com"

# set a health check
HEALTHCHECK --interval=5s \
            --timeout=5s \
            CMD curl -f http://127.0.0.1:3000 || exit 1

# tell docker what port to expose
EXPOSE 3000
