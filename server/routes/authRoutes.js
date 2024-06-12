import passport from 'passport';

export default (app) => {
    app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
    app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }),
        function (req, res) {
            // Successful authentication, redirect to the frontend in localhost3000.
            res.redirect('/auth/current_user')
        });

    app.get('/auth/logout', (req, res) => {
        req.logout();
        res.redirect('/auth/current_user');
    });
    
    app.get('/auth/current_user', (req, res) => {
        console.log('current_user', req.user);
        res.send(req.user);
    });
};
