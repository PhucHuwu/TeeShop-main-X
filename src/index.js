const express = require('express');
const connect = require('./app/config/DB');
const webRouter = require('./routers/web');
const cookieParser = require('cookie-parser');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const app = express();
const port = 3000;

app.use(
    session({
        secret: 'secret_key',
        resave: false,
        saveUninitialized: false,
    }),
);

app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressLayouts);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.set('layout', 'layout');

app.use(webRouter);

async function start() {
    try {
        await connect();
        app.listen(port, () => {
            console.log(`Server start in http://localhost:${port}/`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();
