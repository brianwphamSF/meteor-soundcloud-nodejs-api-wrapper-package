Package.describe({
  name: 'brianwphamSF:soundcloud-nodejs-api-wrapper',
  summary: 'Meteor wrapper for npm package soundcloud-nodejs-api-wrapper. (Modified to work with Soundcloud OAuth by Brian)',
  version: '0.2.7',
  git: 'https://github.com/brianwphamSF/meteor-soundcloud-nodejs-api-wrapper-package/'
});

function configurePackage(api) {

  if(api.versionsFrom) {
    api.versionsFrom('METEOR@1.0');
  }

  Npm.depends({
      "soundcloud-nodejs-api-wrapper": "0.3.0",
    });

  api.addFiles('server.js', 'server');

  api.export('NpmSoundcloud');
  api.export('SoundCloud');
}

Package.onUse(function(api) {
  configurePackage(api);
});

Package.onTest(function(api) {
  configurePackage(api);

  api.use('tinytest');
  // api.addFiles('tests.js');
});