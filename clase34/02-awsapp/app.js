var AWS = require('aws-sdk');
var express = require('express');
var bodyParser = require('body-parser');

AWS.config.region = process.env.AWS_REGION

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
})

console.log(`REGION = ${process.env.AWS_REGION}`);
var sns = new AWS.SNS();
var ddb = new AWS.DynamoDB();

var ddbTable = process.env.STARTUP_SIGNUP_TABLE;
var snsTopic = process.env.NEW_SIGNUP_TOPIC;
var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.render('index', {
        static_path: 'static',
        theme: process.env.THEME || 'flatly',
        flask_debug: process.env.FLASK_DEBUG || 'false'
    });
});

app.post('/signup', function (req, res) {
    console.log(`DDB TABLE NAME = ${ddbTable}`);

    var item = {
        'email': { 'S': req.body.email },
        'name': { 'S': req.body.name },
        'preview': { 'S': req.body.previewAccess },
        'theme': { 'S': req.body.theme }
    };

    ddb.putItem({
        'TableName': ddbTable,
        'Item': item,
        'Expected': { email: { Exists: false } }
    }, function (err, data) {
        if (err) {
            var returnStatus = 500;

            if (err.code === 'ConditionalCheckFailedException') {
                returnStatus = 409;
            }

            res.status(returnStatus).send({ msg: 'DDB Error: ' + err });
            console.log('DDB Error: ' + err);
        } else {
            sns.publish({
                'Message': 'Name: ' + req.body.name + "\r\nEmail: " + req.body.email
                    + "\r\nPreviewAccess: " + req.body.previewAccess
                    + "\r\nTheme: " + req.body.theme,
                'Subject': 'New user sign up!!!',
                'TopicArn': snsTopic
            }, function (err, data) {
                if (err) {
                    res.status(returnStatus).send({ msg: 'SNS Error: ' + err });
                } else {
                    res.status(201).end();
                }
            });
        }
    });
});

var port = process.env.PORT || 3000;

var server = app.listen(port, function () {
    console.log('Server running at http://127.0.0.1:' + port + '/');
});
