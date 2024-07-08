# Create Reservations Machine GYM Service

This is the microservice for creating reservations machines in the GYM FITNESS BODY.

## Group Members

- Christopher Pallo
- Brayan Davila

## Table of Contents

1. [Microservice Description](#microservice-description)
2. [Installation](#installation)
   - [Requirements](#requirements)
   - [Clone the Repository](#clone-the-repository)
   - [Install Dependencies](#install-dependencies)
   - [Start the Server](#start-the-server)
   - [Evidence](#evidence-create)
3. [Usage](#usage)
   - [Verify Server Functionality](#verify-server-functionality)
   - [Add a New Product](#add-a-new-product)
4. [Program Execution](#program-execution)
   - [Create Docker Image](#create-docker-image)
5. [DockerHub](#dockerhub)
   - [DockerHub Repository](#dockerhub-repository)


## Microservice Description

The microservice `gymBackendAddMicroservice` is in charge of managing the creation of new reservations of the gym machines. It allows adding new reservations through an HTTP POST request to the corresponding path.

## Installation

### Requirements

- Node.js
- npm (Node Package Manager)

### Clone the Repository

```sh
git clone https://github.com/BrayanBJ27/gymBackendAddMicroservice.git
cd gymBackendAddMicroservice
```

### Install Dependencies
```sh
npm install
```

### Start the Server
Before starting the application you must change the database credentials in the index.js file if you want to use the application locally and independently, this is because initially the application is configured to be used in conjunction with the rest of Microservices through Docker-Compose, if you do not want to run the application independently, you must leave the file as it is and subsequently execute the DockerCompose file found in the attached repository, where you will find how to run it, and thus the application It will work together through Docker.
Repository:

Changes to run locally and independently
We are located on line of code 5

Current:
```sh
const port = process.env.PORT || 8088;
```
New:
```sh
const port = 8088;
```

We are located on line of code 11 to 16

Current:
```sh
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
```
New:
```sh
const db = mysql.createConnection({
    host: 'mysql-programaciondis.alwaysdata.net',
    user: '357676_bj',
    password: 'Uyt:tBHLgt4Kk_E',
    database: 'programaciondis_gym'
});
```

```sh
npm run start
```