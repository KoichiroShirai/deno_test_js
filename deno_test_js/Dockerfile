FROM ubuntu:18.04
WORKDIR /app
RUN apt-get -qq update && apt-get -qq -y install curl zip unzip && \
    curl -fsSL https://deno.land/x/install/install.sh | sh && \
    apt-get -y remove curl zip unzip

RUN echo 'export DENO_INSTALL="/root/.deno"' >> ~/.bash_profile
RUN echo 'export PATH="$DENO_INSTALL/bin:$PATH"' >> ~/.bash_profile
