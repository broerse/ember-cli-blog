module.exports = function (deployTarget) {
  var ENV = {};

  if (deployTarget === 'production') {
    ENV.couchdb = {
      db: process.env.db,
    };
  }

  return ENV;
};
