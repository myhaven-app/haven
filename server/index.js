const app = require('express')();
const bodyParser = require('body-parser');
const db = require('../database-mongo');

app.use(express.static(__dirname + '/../react-client/dist'));

app.use('/api/events', require('./event/event-router'));
app.use('/api/stories', require('./story/story-router'));

app.listen(3000, function() {
  console.log('listening on port 3000!');
});