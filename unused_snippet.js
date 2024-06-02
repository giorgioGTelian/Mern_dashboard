/* eslint-disable */
/** server for using google api for calendar and events */


function exampleFunction(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
        if (err) { return done(err); }

        // Use the accessToken to interact with a Google API
        const oauth2Client = new google.auth.OAuth2();
        oauth2Client.setCredentials({ access_token: accessToken });

        const calendar = google.calendar({ version: 'v3', auth: oauth2Client });
        calendar.events.list({
            calendarId: 'primary',
        }, (err, res) => {
            if (err) return console.log('The API returned an error: ' + err);
            const events = res.data.items;
            if (events.length) {
                console.log('Upcoming 10 events:');
                events.map((event, i) => {
                    const start = event.start.dateTime || event.start.date;
                    console.log(`${start} - ${event.summary}`);
                });
            } else {
                console.log('No upcoming events found.');
            }
        });

        return done(null, user);
    });
}