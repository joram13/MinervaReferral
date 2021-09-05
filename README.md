# Minerva Referral Project

[![CI Tests](https://github.com/minerva-schools/cs162-minerva-referral/actions/workflows/ci.yaml/badge.svg)](https://github.com/minerva-schools/cs162-minerva-referral/actions/workflows/ci.yaml)

## Build Project

### Docker
```
docker build -t minerva-referral:latest .
docker run -d --name=minerva-referral-instance --env-file .env -p 8000:8000 minerva-referral
```

### Manual
1. Install `yarn` with 
    - (mac OS)  ```brew install node```
    - (Windows) ```TODO```
2. Edit `.env` to your like
3. Activate python virtual environment(see below)
4. Do the following inside the repo

```
cd ./minerva-referral
yarn
yarn build
cd ../
flask run
```

## Database Setup

1. Work on the virtual environment.
2. Install requirements with ```pip install -r requirements.txt```
3. Check if the database (```web.db```) exists. 
```
cd ./web
ls
```
4. If exists, delete the current database.
```
rm web.db
```
5. Set up the new database.
```
python3 init_db.py
python3 insert.py
```

## Use Case

[![Use-case.png](https://i.postimg.cc/yY9ZMF41/Use-case.png)](https://postimg.cc/XpjqFBYm)

## Database Structure Diagram

- [Version 1](https://dbdiagram.io/d/60481ac4fcdcb6230b23607)


- [Version 2](https://dbdiagram.io/d/604a2dd0fcdcb6230b23b0cf)

[![CS162-minerva-referral-db-1.png](https://i.postimg.cc/mDK9vCW5/CS162-minerva-referral-db-1.png)](https://postimg.cc/JDctJynN)

## Run Virtual Environment

Virtual environment is a key component in ensuring that the application is configured in the right environment

##### Requirements
* Python 3
* Pip 3

```bash
$ brew install python3
```

Pip3 is installed with Python3

##### Installation
To install virtualenv via pip run:
```bash
$ pip3 install virtualenv
```

##### Usage
Creation of virtualenv:

    $ virtualenv -p python3 venv

If the above code does not work, you could also do

    $ python3 -m venv venv

To activate the virtualenv:

    $ source venv/bin/activate

Or, if you are **using Windows** - [reference source:](https://stackoverflow.com/questions/8921188/issue-with-virtualenv-cannot-activate)

    $ venv\Scripts\activate

To deactivate the virtualenv (after you finished working):

    $ deactivate

Install dependencies in virtual environment:

    $ pip3 install -r requirements.txt

## Environment Variables

All environment variables are stored within the `.env` file and loaded with dotenv package.

**Never** commit your local settings to the Github repository!

## Run Application

Start the server by running:

    $ export FLASK_ENV=development
    $ export FLASK_APP=web
    $ python3 -m flask run

## Unit Tests
To run the unit tests use the following commands:

    $ python3 -m venv venv_unit
    $ source venv_unit/bin/activate
    $ pip install -r requirements-unit.txt
    $ export DATABASE_URL='sqlite:///web.db'
    $ pytest unit_test

## Integration Tests
Start by running the web server in a separate terminal.

Now run the integration tests using the following commands:

    $ python3 -m venv venv_integration
    $ source venv_integration/bin/activate
    $ pip3 install -r requirements-integration.txt
    $ pytest integration_test

## Deployment
We will use Heroku as a tool to deploy your project, and it is FREE

We added Procfile to help you deploy your repo easier, 
but you may need to follow these steps to successfully deploy the project

1. You need to have admin permission to be able to add and deploy your repo to Heroku 
(Please ask your professor for permission)
2. You need to create a database for your website. 
We recommend you use [Heroku Postgres](https://dev.to/prisma/how-to-setup-a-free-postgresql-database-on-heroku-1dc1)
3. You may need to add environment variables to deploy successfully - [Resource](https://devcenter.heroku.com/articles/config-vars#using-the-heroku-dashboard)
