import passport from 'passport';

export default (app) => {
    app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
    app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }),
        function (req, res) {
            // Successful authentication, redirect to the frontend in localhost3000.
            res.redirect('http://localhost:3000')
        });
};
