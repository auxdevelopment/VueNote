const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const cors = require('cors');
const shortid = require('shortid');

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
app.route('/note').post(addNewNote).delete(removeNote);

// End Routes

function getAllNotes(req, res) {
    const notes = db.get('notes');
    res.json(notes);
}

/*
A note looks like this:

note: {
    id: string;
    title: string;
    content: string;
}

*/
function addNewNote(req, res) {
    const noteTitle = req.body.title;
    const noteContent = req.body.content;

    if (!noteTitle || !noteContent) {
        res.status(500).json({ 'error': 'body must contain "title" and "content" attribute' });
        return;
    }

    db.get('notes').push({
        'id': shortid.generate(),
        'title': noteTitle,
        'content': noteContent
    }).write();

    res.json({ 'status': 'created' });
}

function removeNote(req, res) {
    const noteId = req.body.id;

    if (!noteId) {
        res.status(500).json({ 'error' : 'body must contain "id" attribute' });
        return;
    }

    db.get('notes').remove({
        id: noteId
    }).write();

    res.json({ message: 'deleted' });
}


app.listen(port);