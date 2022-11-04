const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();

//Database Connection
const db = require('./config/database');
db.authenticate().then(() => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Error: ' + err);
})



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors("*"));

app.use('/', require('./routes/routes'));

const PORT = process.env.PORT || 5000;
db.sync().then(() => {
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
}).catch(err => console.log("Error: " + err));

module.exports = app;