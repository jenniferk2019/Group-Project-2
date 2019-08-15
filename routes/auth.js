var authController = require('../controllers/authcontroller.js');

module.exports = function (app, passport) {

    app.get('/signup', authController.signup);
    app.get('/signin', authController.signin);
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/404'
    }
    ));
    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/welcome',
        failureRedirect: '/404'
    }
    ));
    app.get('/welcome', authController.welcome);
    app.get('/logout', authController.logout);
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');
    }
    // app.get('/dashboard',isLoggedIn, authController.dashboard);
}