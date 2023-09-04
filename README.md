# typo3-docker-template

With this package, you get a ready to use package for fast and easy development of TYPO3 Sites or Extensions
It will generate a docker-project with two containers, after start of the project, you will have a TYPO3 in "FIRST_INSTALL" mode.

## Enviroment variables

The docker-container will be built with some enviroment-settings

You can find the .env file here:
```
./docker/.env
```

### COMPOSE_PROJECT_NAME

This will be used as the project name of all created containers
This installation will generate two services:
1. Database
2. PHP/Apache

With the project-name, it will be nice organised in your docker-desktop (twisty)

### SITE_NAME

This will be used as prefix for the container-names
The containers will be named like this:

```
${SITE_NAME}-mariadb
```
and
```
${SITE_NAME}-php-apache
```

### TYPO3_VERSION

Chose the used TYPO3 version, you are able to fill master or minor versions as well, in this case the most 

### MARIADB_USER

Type in the mariadb-username (non root) that will be used for the normal access (TYPO3)

### MARIADB_PASSWORD

Type in the mariadb-password used for the ```${MARIADB_USER}```

### MARIADB_ROOT_PASSWORD

Type in the root password for the database, you will need this 

### MARIADB_EXTERNAL_PORT

In case you have a Mariadb/MySQL installation on your system, you can fill here the external port of the Database.
This is to avoid any port-conflicts with your host-system.

### APACHE_EXTERNAL_PORT

Same as for the Database but für Apache, in case you have allready used port 80, you can change the external port here.


## TS and SCSS

Open the terminal in ```./src/```

Make shure you have installed the latest node-js on your system (and npm)

Type:
```
npm i
```

This will install all needed node-packages

After successfully install you can start the grunt-file by typing:

```
grunt
```

This will start the process witch will creates the css and js files from SCSS and TS.
It will also copy all the vendors-libs to the customerext public-folger.

At the end, the process will start a watch for some files and will start the preprocess if needed

Now you can start changing the scss/ts:
```
./src/script.ts
```

```
./src/style.scss
```

The TYPO3 FE will automatically reload the page in case the SCSS or the TS changed (in fact, it will reload in case the css or the js was changet)

