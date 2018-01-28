const faker = require('faker');
const db = require('./index.js');

const generateUser = () => {
  let userFirstName = faker.name.firstName();
  let userLastName = faker.name.lastName();

  let fakeUser = {
    username: faker.internet.userName(userFirstName, userLastName),
    email: faker.internet.email(userFirstName, userLastName),
    hash: 'fakehashedpw',
    salt: 'fakesalt',
    lastLoggedIn: new Date(),
    firstName: userFirstName,
    lastName: userLastName,
    location: 'San Francisco, CA'
  }

  return fakeUser;
}

const generateEvent = async () => {
  let fakeEvent = {
    title: 'Sample Event Title',
    description: 'Sample Event Description',
    date: new Date(),
    userId: await db.User.findOne({})._id,
    location: {
      streetAddress: 1600,
      streetName: 'Amphitheatre Parkway',
      city: 'Mountain View',
      county: 'Santa Clara County',
      state: 'State',
      postal: 94043,
      formattedAddress: '1600 Amphitheatre Parkway, Mountain View, CA',
      latitude: 37.4224764,
      longitude: -122.0842499
    }
  }

  console.log('fake event is', fakeEvent);
  return fakeEvent;
}

const generateSubevent = async () => {
  let mainEvent = await db.Event.findOne({});
  let fakeSubevent = {
    eventId: mainEvent.ObjectId,
    userId: mainEvent.userId,
    comment: 'Sample comment about an event',
    Media: [{
      originalName: 'stuff.jpg',
      size: '12345',
      MIMEtype: 'jpg',
      mediaType: 'img',
      S3url: 'https://i.imgur.com/1yT2ZTX.jpg'
    }]
  }

  return fakeSubevent;
}

const generateNUsers = async (n) => {
  for (let i = 1; i <= n; i++) {
    let fakeUser = new db.User(generateUser());
    await fakeUser.save((err, data) => {
      if (err) {
        console.log(`error saving with ${err}`);
      } else {
        console.log(`user saved with ${data}`);
      }
    })
  }
}

const generateNEvents = async (n) => {
  for (let i = 1; i <= n; i++) {
    let fakeEvent = new db.Event(await generateEvent());
    await fakeEvent.save((err, data) => {
      if (err) {
        console.log(`error saving with ${err}`);
      } else {
        console.log(`event saved with ${data}`);
      }
    })
  }
}

const generateNSubevents = async (n) => {
  for (let i = 1; i <= n; i++) {
    let fakeSubevent = new db.Subevent(await generateSubevent());
    await fakeSubevent.save((err, data) => {
      if (err) {
        console.log(`error saving with ${err}`);
      } else {
        console.log(`user saved with ${data}`);
      }
    })
  }
}

// generateNUsers(15);
// generateNEvents(20);
generateNSubevents(20);