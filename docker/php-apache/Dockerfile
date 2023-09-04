FROM php:8.1-apache

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        wget \
        apt-utils \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libmcrypt-dev \
        libpng-dev \
        libzip-dev \
        libicu-dev \
        graphicsmagick

RUN docker-php-ext-configure gd --with-freetype --with-jpeg
RUN docker-php-ext-configure zip
RUN docker-php-ext-install -j$(nproc) pdo mysqli zip gd intl opcache

RUN a2enmod rewrite

RUN apt-get clean && \
    apt-get -y purge \
        libxml2-dev libfreetype6-dev \
        libjpeg62-turbo-dev \
        libmcrypt-dev \
        libpng-dev \
        zlib1g-dev && \
    rm -rf /var/lib/apt/lists/* /usr/src/*

RUN pecl install xdebug
RUN docker-php-ext-enable xdebug

ARG TYPO3_VERSION
RUN echo "TYPO3_VERSION: ${TYPO3_VERSION}"

RUN cd /var/www/html && \
    wget -O - https://get.typo3.org/${TYPO3_VERSION} | tar -xzf - && \
    ln -s typo3_src-${TYPO3_VERSION}* typo3_src && \
    ln -s typo3_src/index.php && \
    ln -s typo3_src/typo3

COPY 000-default.conf /etc/apache2/sites-available/000-default.conf

COPY ./files/FIRST_INSTALL /var/www/html/

EXPOSE 9000
