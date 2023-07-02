const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

//db
const db = require('./config/keys').mongoURI;

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

const notesSchema= {
    email: String,
    content: String
}

const Note = mongoose.model("Note",notesSchema);

app.get("/",function(req,res){
    res.sendFile(__dirname + "client/src/components/Contact.js")
})

app.post('/', function(req,res){
     let newNote = new Note({
        email: req.body.email,
        content: req.body.text
     });
     newNote.save();
     console.log("Sended Successfully");
     res.redirect('/');
})
// app.post('/message', function(req,res){
//     var email =req.body.email;
//     var text = req.body.text;
  
//     var data = {
//         "email":email,
//         "text":text
//     }
//     db.collection('details').insertOne(data,function(err, collection){
//         if (err) throw err;
//         console.log("Sended Successfully");
              
//     });
//     // return res.redirect('.html');
// })
  



//connect
mongoose.connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

//use routes
app.use('/api/items',items);

    const port = process.env.PORT || 5000;

    app.listen(port, () => console.log('Server stated on port ${port}'));

// app.listen(5000,function(){})