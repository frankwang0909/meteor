Package.describe({
  summary: "Github OAuth flow",
  version: "1.1.9-beta.12"
});

Package.onUse(function(api) {
  api.use('oauth2', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('http', ['server']);
  api.use('underscore', 'client');
  api.use('templating@1.2.13', 'client');
  api.use('random', 'client');
  api.use('service-configuration', ['client', 'server']);

  api.export('Github');

  api.addFiles(
    ['github_configure.html', 'github_configure.js'],
    'client');

  api.addFiles('github_server.js', 'server');
  api.addFiles('github_client.js', 'client');
});
