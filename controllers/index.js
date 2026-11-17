var express = require('express');
var router = express.Router();

//Explain what this route renders when the home URL is requested.
router.get('/', function (req, res, next) {
  // res.render looks in views/ for index.ejs and passes this object in
  // title goes in the tab. page is only so the nav knows which link is active
  res.render('index', { title: 'Home', page: 'home' });
});

//Explain how this route connects the About URL to its view.
router.get('/about', function (req, res, next) {
  res.render('about', {
    title: 'About Me',
    page: 'about'
  });
});

//Explain how this route prepares project data for the view.
router.get('/projects', function (req, res, next) {
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
    projects: projects
  });
});

//Explain what a fresh GET request shows on the contact page.
router.get('/contact', function (req, res, next) {
  res.render('contact', {
    title: 'Contact Me',
    page: 'contact',
    error: '',
    success: ''
  });
});

router.post('/contact', function (req, res, next) {
  //Explain how submitted form fields reach this handler.
  var name = (req.body.name || '').trim();
  var email = (req.body.email || '').trim();
  var message = (req.body.message || '').trim();
  var problem = '';

  if (!name || !email || !message) {
    problem = 'You left a box empty.';
  } else if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
    problem = 'That email needs an @ and a dot.';
  }

  if (problem) {
    return res.render('contact', {
      title: 'Contact Me',
      page: 'contact',
      error: problem,
      success: ''
    });
  }
  res.render('contact', {
    title: 'Contact Me',
    page: 'contact',
    error: '',
    success: 'Thanks ' + name + '. I got your message.'
  });
});

module.exports = router;
