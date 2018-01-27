var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var userSchema = mongoose.Schema({
  username: String,
  email: String,
  hash: String,
  salt: String,
  lastLoggedIn: Date,
  firstName: String,
  lastName: String,
  location: String
});

var eventSchema = mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  userId: Number,
  location: {
    streetAddress: Number,
    streetName: String,
    city: String,
    county: String,
    postal: Number,
    formattedAddress: String,
    latitude: Number,
    longitude: Number
  }
});

var subeventSchema = mongoose.Schema({
  eventId: Number,
  userId: Number,
  comment: String,
  Media: [{
    originalName: String,
    size: String,
    MIMEtype: String,
    mediaType: String,
    S3url: String
  }]
});

var Item = mongoose.model('Item', itemSchema);

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;