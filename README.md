# E-commerce Back End

## Project Description

AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

## Acceptance Criteria

GIVEN a functional Express.js API

1. WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
   THEN I am able to connect to a database using Sequelize
2. WHEN I enter schema and seed commands
   THEN a development database is created and is seeded with test data
3. WHEN I enter the command to invoke the application
   THEN my server is started and the Sequelize models are synced to the MySQL database
4. WHEN I open API GET routes in Insomnia Core for categories, products, or tags
   THEN the data for each of these routes is displayed in a formatted JSON
5. WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
   THEN I am able to successfully create, update, and delete data in my database

## Installation

run

```
mysql source schema.sql
```

on mysql server

```
npm install
```

on the root folder.

run

```
node seeds/index.js
```

to seed some data. Then run

```
node server.js
```

## Video

You can watch a video for demonstrating how this app is used on here.
https://drive.google.com/file/d/13kckwcKTZnIOamZ3PmrSuEwoTn0X9pmF/view
