# Awaab's portfolio

Express portfolio for INFR3120 assignment 2. Pages: Home, About, Projects, Contact.

## How the folders ended up

express-generator built the starting files (`app.js`, `bin/www`, `public/`, `views/`, `package.json`).

- `app.js` turns Express on, sets EJS, and loads the routes
- `controllers/index.js` has one route per page, plus the contact form post
- `views/layout.ejs` is the shared shell
- `views/partials/` is the header and footer
- `views/index.ejs`, `about.ejs`, `projects.ejs`, `contact.ejs` are the four pages
- `public/stylesheets/style.css` is my CSS
- `public/javascripts/main.js` checks the contact form, swaps button text on hover, counts page visits, and shows a bar if the mouse leaves the window
- `public/images/profile.png` is the picture on the home page
- `bin/www` starts the server. It reads `process.env.PORT`, and uses 3000 if that isn't set

The generator made a `routes/` folder with `index.js` and `users.js`. I renamed `routes` to `controllers` and removed `users.js`, since this site has no users page.

Before you submit, change the GitHub and LinkedIn links in `app.js`. They're still placeholders.

## Code that isn't mine

- Express generator made the starter project: https://expressjs.com/en/starter/generator.html
- Bootstrap 5.3, linked in `views/partials/header.ejs` and the footer: https://getbootstrap.com/
- Font Awesome 6, linked in the same header file: https://fontawesome.com/
- `express-ejs-layouts`, used so `views/layout.ejs` wraps every page: https://www.npmjs.com/package/express-ejs-layouts

That library is the only extra package. The page HTML, the routes, and the CSS are written for this assignment.

# Links
render : https://awaab-portfolio.onrender.com/
github : https://github.com/
github project : https://github.com/Awaab-Hallaj/Personal-Portfolio