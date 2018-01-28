import faker from 'faker';
import {db, User, Event, Subevent} from './index.js';

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
    userId: await User.findOne({}),
    location: {
      streetAddress: 1600,
      streetName: 'Amphitheatre Parkway',
      city: 'Mountain View',
      county: 'Santa Clara County',
      state: 'State'
      postal: 94043,
      formattedAddress: '1600 Amphitheatre Parkway, Mountain View, CA',
      latitude: 37.4224764,
      longitude: -122.0842499
    }
  }

  return fakeEvent;
}

const generateSubevent = async () => {
  let fakeSubevent = {
    let mainEvent = await Event.findOne({});
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
    let fakeUser = new User(generateUser());
    await fakeUser.save((err, data) => {
      if (err) {
        console.log(`error saving with ${err}`);
      }
    })
  }
}

const generateNEvents = async (n) => {
  for (let i = 1; i <= n; i++) {
    let fakeEvent = new Event(generateEvent());
    await fakeEvent.save((err, data) => {
      if (err) {
        console.log(`error saving with ${err}`);
      }
    })
  }
}

const generateNSubevents = async (n) => {
  for (let i = 1; i <= n; i++) {
    let fakeSubevent = new Subevent(generateSubevent());
    await fakeSubevent.save((err, data) => {
      if (err) {
        console.log(`error saving with ${err}`);
      }
    })
  }
}


generateNUsers(15);