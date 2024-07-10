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
3. [Program Execution](#program-execution)
   - [Execute Microservice](#execute-microservice)
4. [DockerHub](#dockerhub)
   - [DockerHub Repository](#dockerhub-repository)
5. [AWS](#aws)
   - [Evidence](#evidence-create)


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
Before starting the application you must change the database credentials in the index.js file if you want to use the application locally and independently, this is because initially the application is configured to be used in conjunction with the rest of the Microservices.

Port Verification

Current:
```sh
const port = 8088;
```


## Program Execution
### Execute Microservice

```sh
npm run start
```

## DockerHub
### DockerHub Repository
https://hub.docker.com/r/brayanbj27/bd-create-gym-services

Docker Pull Command
```sh
docker pull brayanbj27/bd-create-gym-services
```

## AWS
### Evidence
**Summary of the Instance** 

![image](https://github.com/BrayanBJ27/gymBackendAddMicroservice/assets/87538474/b933d141-615a-4be4-b13b-cad53965f21d)


**Service running on the instance IP**

![image](https://github.com/BrayanBJ27/gymBackendAddMicroservice/assets/87538474/02240717-7636-4d20-9cea-b7b63e45899d)
