# Create Reservations Machines GYM Service

This is the microservice to create reservations for the GYM FITNESS BODY machines.

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

### Evidence
![Imagen de WhatsApp 2024-07-07 a las 23 13 48_7c32f3cf](https://github.com/BrayanBJ27/gymBackendAddMicroservice/assets/87538474/75fa3592-b7aa-48d9-b8a3-7aed6d6c8769)

## Usage

### Verify Server Functionality

Method: GET  
URL: `http://localhost:8088/`  
Description: This route displays a message to verify that the server is running.
![Captura de pantalla 2024-07-03 214528](https://github.com/BrayanBJ27/gymBackendAddMicroservice/assets/87538474/680eeaaf-dec5-4e66-8fad-2df6fc5bac14)

### Add a New Reserve

Method: POST  
URL: `http://localhost:8088/reservations`  
Description: This route allows adding a new reserve machine.  
Example request body (JSON):

```json
{
    "machineName": "Treadmill",
    "userName": "John",
    "startTime": "2024-07-05 10:00:00",
    "endTime": "2024-07-05 11:00:00"
}
```
![image](https://github.com/BrayanBJ27/gymBackendAddMicroservice/assets/87538474/8c7fdc18-f8b6-4303-9e41-0ddb093df8d6)

## Program Execution
### Create Docker Image with DockerFile
```sh
docker build -t gymadd .
```
![Imagen de WhatsApp 2024-07-07 a las 22 24 35_601f96e7](https://github.com/BrayanBJ27/gymBackendAddMicroservice/assets/87538474/662c5d54-838a-43ae-b4a9-67e8a5131ae0)

## DockerHub
### DockerHub Repository
[brayanbj27/bj-gymadd](https://hub.docker.com/r/brayanbj27/bj-gymadd)

Docker Pull Command
```sh
docker pull brayanbj27/bj-gymadd
```
