/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';

Thing.find({}).remove()
  .then(() => {
    Thing.create({
      name: 'Crazy Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    });
  });

// find all remove and recreate
User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'test',
      firstName: 'Joe',
      lastName: 'Doe',
      email: 'test@example.com',
      score: 100,
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      firstName: 'Admin',
      lastName: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    }, {

      provider: 'local',
      firstName: 'Jane',
      lastName: 'Doe',
      name: 'Fake User',
      gender: 'Female',
      score: 10,
      Newsletter: true,
      optInDate: Date.now(),
      dateOfBirth: Date('2000-01-01'),
      height: 170,
      mobile: '111222333444',
      address: {
        street: 'Some street',
        house: '1',
        plz: '10367',
        city: 'Berlin',
        country: 'Deutschland'
      },
      dances: [{name: 'Salsa', proficiency: 7}, {name: 'Bachata', proficiency:2}],
      bioText: 'Hi i am Jane and I love to dance',
      photos: ['photo1.jpg', 'photo2.jpg'],
      membershipType: 'basic',
      userSince: Date('2010-01-01'),
      lastLogin: Date('2010-01-01'),
      email: 'test@example.com',
      password: 'password'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
