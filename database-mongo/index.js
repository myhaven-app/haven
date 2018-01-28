const {} = require('dotenv/config');
const mongoose  = require('mongoose');

const mongoUri = `mongodb://${process.env.haven}`;

const db = mongoose.connect(mongoUri, { useMongoClient: true });

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  hash: String,
  salt: String,
  lastLoggedIn: Date,
  firstName: String,
  lastName: String,
  location: String
});

const eventSchema = mongoose.Schema({
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

const subeventSchema = mongoose.Schema({
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

//const Item = mongoose.model('Item', itemSchema);

const selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;