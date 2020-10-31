# Myapp

[![Known Vulnerabilities](https://snyk.io/test/github/broerse/ember-cli-blog/badge.svg)](https://snyk.io/test/github/broerse/ember-cli-blog)

This README outlines the details of collaborating on this Ember application.

## Working example

[https://bloggr.exmer.com/](https://bloggr.exmer.com/)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Ember CLI](http://ember-cli.com/)

## Installation

To get up and running with this project:

* `git clone` this repository and cd into it `cd ember-cli-blog`
* `npm install` to install npm dependencies
* `ember s` to start the server!

Data will be stored in an in memory database and if configured, also replicated to a CouchDB instance.

## Optional Installation

To setup CouchDB data replication, configure `ENV.remote_couch` inside `./config/environment.js` to point to your CouchDB location.

To setup a CouchDB instance on your own machine:

* install couchDB from http://couchdb.apache.org/
* `npm install -g add-cors-to-couchdb`
* `add-cors-to-couchdb`
* update `config/environment.js` `local_couch` and `remote_couch` to your CouchDB
  instance name.
* update `config/environment.js` `ENV.rootURL` in the production environment
* To use deploy create a file `.env.deploy.production` in the root of this project containing something like `db=https://username:password@my.couchcluster.com/bloggr`


## Running

* `ember s`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build` (development)
* `ember build --environment production` (production)

## Deploy

To deploy to your CouchDB cluster

* `ember deploy production` (Set your credentials in the `.env.deploy.production` file)

## Authentication

ember-simple-auth-pouch authenticator with custom data adapter to setup push replication after login. See `/src/simple-auth/authenticators/pouch.js` and `/src/data/models/application/adapter.js` for further details.

## Authorization

### CouchDB write protected database:

Registration required example for write permission: Add users in the normal CouchDB way.
For example by adding the following document to the `_users` database:
```
{
  "_id": "org.couchdb.user:test",
  "name": "test",
  "password": "test",
  "roles": [
    "user"
  ],
  "type": "user"
}
```

After that you can protect your `bloggr` database from unauthorized writes by adding the following design document to the `bloggr` database.
```
{
  "_id": "_design/only_users_write",
  "validate_doc_update": "function (newDoc, oldDoc, userCtx) {\n\tif (userCtx.roles.indexOf(\"user\") == -1 && userCtx.roles.indexOf(\"_admin\") == -1) {\n\t\tthrow({unauthorized: \"Only registered users can save data!\"});\n\t}\n}"
}
```

For the free [CloudStation](https://cloudstation.com) you have to create an User and a Database and insert the userdocument from above. Make sure to update your `config/environment.js` `remote_couch` and `rootURL` to match your production settings. Typical `rootURL` values are `/` and `/yourdb/_design/myapp/_rewrite/` If you run your own CouchDB you can use the Hoodie [CouchDB User Management App](https://gr2m.github.io/couchdb-user-management-app/) to create users.

### Secret route

There is one `secret` route setup to demonstrate how to use ember-simple-auth to protect routes. More instructions can be read there.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* [ember-cli-deploy-couchdb](https://github.com/martinic/ember-cli-deploy-couchdb)
* [ember-simple-auth](https://ember-simple-auth.com/)
* [ember-simple-auth-pouch](https://github.com/martinic/ember-simple-auth-pouch)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
