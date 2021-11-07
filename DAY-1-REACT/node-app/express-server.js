const app = require('express')();
const routes = require('./routes');

//  Connect all our routes to our application
app.use('/', routes);

// Turn on server!
app.listen(8081, () => {
  console.log('App listening on port 8081 ');
});
