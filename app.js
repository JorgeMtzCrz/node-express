require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');
const passport = require('./config/passport')
const snowflake = require('snowflake-sdk')



const connection = snowflake.createConnection({
    account: 'zxventures',
    username: 'vendor_superlikers',
    password: 'whAG1XfP6CCU4a_.b',
    region: 'us-east-1',
    warehouse: 'WH_INTERACTIVE'
});
connection.connect(
    function(err, conn) {
        if (err) {
            console.error('Unable to connect: ' + err.message);
        } else {
            console.log('Successfully connected to Snowflake.');
            // Optional: store the connection ID.
            connection_ID = conn.getId();
        }
    }
);
const query = connection.execute({
    sqlText: 'select * from DTC_EXTERNAL.MX_MODELORAMA_THIRDPARTY.VW_DIM_MPG_GOALS limit 5'
})

const queryStream = query.streamRows()
queryStream.on('data', function(row) {
    console.log(row)
})

console.log(queryStream)

mongoose
    .connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((x) => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch((err) => console.error('Error connecting to mongo', err));

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

app.use(
    cors({
        credentials: true,
        origin: [process.env.FRONTENDPOINT, process.env.FRONTENDPOINT2, process.env.FRONTENDPOINT3, process.env.FRONTENDPOINT4, process.env.FRONTENDPOINT5, process.env.FRONTENDPOINT6, process.env.FRONTENDPOINT7]
    })
);

app.use(passport.initialize())
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(logger('dev'));

const auth = require('./routes/auth');
const product = require('./routes/products');
const header = require('./routes/headers');
const banner = require('./routes/banner');
const card = require('./routes/card');
const subscriber = require('./routes/subscriber')
const index = require('./routes/index')

app.use('/', index)
app.use('/auth', auth);
app.use('/product', product);
app.use('/header', header)
app.use('/banner', banner)
app.use('/card', card)
app.use('/subscriber', subscriber)


// Uncomment this line for production
// app.get('/*', (req, res) => res.sendFile(__dirname + '/public/index.html'));

module.exports = app;