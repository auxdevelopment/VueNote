const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const cors = require('cors');

const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({
    notes: []
}).write();


const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000
;

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


// Routes

app.route('/notes').get(getAllNotes);
app.route('/note').post(addNewNote);

// End Routes

function getAllNotes(req, res) {
    const notes = db.get('notes');
    res.json(notes);
}

/*
A note looks like this:

note: {
    title: string;
    content: string;
}

*/
function addNewNote(req, res) {
    const noteTitle = req.body.title;
    const noteContent = req.body.content;

    if (!noteTitle || !noteContent) {
        res.status(500).json({ 'error': 'body must containt "title" and "content" attribute' });
        return;
    }

    db.get('notes').push({
        'title': noteTitle,
        'content': noteContent
    }).write();

    res.json({ 'status': 'created' });
}


app.listen(port);