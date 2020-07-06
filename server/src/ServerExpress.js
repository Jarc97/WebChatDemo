
// required libraries
var express = require("express");
var bodyParser = require("body-parser");
var EcoUser = require("./Entities.js").EcoUser;
var EcoMessage = require("./Entities.js").EcoMessage;

// global variables
var app = express();
const PORT = process.env.PORT || process.argv[2] || 8090;

// configuration
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static(__dirname + "/../webapp/"));
app.use(express.json());


var cors = require("cors");
// Set up a whitelist and check against it:
var whitelist = ['localhost:3000'];

var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
// Then pass them to cors:
app.use(cors());

// URLs
const INDEX_URL = "/";
const GLOBAL_CHAT_URL = "/chat";
const GET_CHAT_URL = "/getchat";

// start the server
app.listen(PORT, function() {
    console.log("EcoTuanis server listening on port " + PORT);

});

// events api


// global chat api
var globalMessages = [];
var lastMessageID = 0;

function createMessage(_user, _text) {
    let msgId = lastMessageID;
    lastMessageID = lastMessageID + 1;
    return {id: msgId, user: _user, text: _text};
}

app.get(INDEX_URL, function(req, res) {
    console.log("ping received");
    return res.json("success");
});

app.get(GET_CHAT_URL, function(req, res) {
  return res.json(globalMessages);
});

app.post(GLOBAL_CHAT_URL, function(req, res) {
    /*
    let from = req.body.from;
    let text = req.body.text;
    let msg = new EcoMessage(from, text);
    let size = globalMessages.push(msg);

    if (size > 10) {
        // remove older messages
        globalMessages.shift();
    }
    */
    console.log(req.body);
    let user = req.body.user;
    let text = req.body.text;
    globalMessages.push(createMessage(user, text));
    console.log(globalMessages);
    return "Hello!";
});

/*
app.get(GLOBAL_CHAT_URL, function(req, res) {
    let lastKnownMessageID = req.params.lastKnownMessageID;
    if (lastKnownMessageID >= globalMessages.size()) {
        // message id doesn't exists yet
    } else {
        for (let i = 0; i < ) {
            
        }
    }
});
*/