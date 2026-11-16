var express = require('express');
var router = express.Router(); // a mini app just for routes. app.js mounts this on /

// router.get runs on a normal visit. the first arg is the path after the domain
router.get('/', function(req, res, next) {
  // res.render looks in views/ for index.ejs and passes this object in
  // title goes in the tab. page is only so the nav knows which link is active
  res.render('index', { title: 'Home', page: 'home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', {
    title: 'About Me',
    page: 'about'
  });
});

router.get('/projects', function(req, res, next) {
  // the ejs file just loops this. a new card = a new object, i dont make a new page
  var projects = [
    {
      name: 'Portfolio site',
      blurb: 'This site. Four pages, one route each, rendered with EJS.',
      tag: 'Express, EJS',
      icon: 'fa-solid fa-code'
    },
    {
      name: 'Shared layout',
      blurb: 'The nav and footer are written once in the layout. Each route only sends the middle of the page.',
      tag: 'EJS',
      icon: 'fa-solid fa-table-columns'
    },
    {
      name: 'Contact form',
      blurb: 'The form posts to /contact. The browser checks the fields, then the route checks them again.',
      tag: 'JavaScript, Express',
      icon: 'fa-solid fa-envelope'
    }
  ];

  res.render('projects', {
    title: 'Projects',
    page: 'projects',
    projects: projects // this name is what the ejs file uses: projects.forEach
  });
});

router.get('/contact', function(req, res, next) {
  // error and success start empty so neither alert shows on a fresh visit
  res.render('contact', {
    title: 'Contact Me',
    page: 'contact',
    error: '',
    success: ''
  });
});

// same url as the get, but post only happens when the form is submitted
router.post('/contact', function(req, res, next) {
  // req.body exists because of express.urlencoded in app.js. || '' so trim doesnt crash if its missing
  var name = (req.body.name || '').trim();
  var email = (req.body.email || '').trim();
  var message = (req.body.message || '').trim();
  var problem = '';

  if (!name || !email || !message) {
    problem = 'You left a box empty.';
  } else if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
    // indexOf returns -1 when the character isnt there. not a real email check, just a quick one
    problem = 'That email needs an @ and a dot.';
  }

  if (problem) {
    // return so the success render below doesnt also run
    return res.render('contact', {
      title: 'Contact Me',
      page: 'contact',
      error: problem,
      success: ''
    });
  }

  // nothing is saved and no email is sent. the page just says it worked
  res.render('contact', {
    title: 'Contact Me',
    page: 'contact',
    error: '',
    success: 'Thanks ' + name + '. I got your message.'
  });
});

module.exports = router; // app.js does require('./controllers/index') and gets this
