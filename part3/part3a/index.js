// using express
require('dotenv').config();
const express = require('express'); // importing express
const cors = require('cors');
// const mongoose = require('mongoose');
const app = express();
const Note = require('./models/note');
app.use(express.static('dist'));
app.use(express.json());
app.use(cors());


// let notes = [
//   {
//     id: 1,
//     content: "HTML is easy",
//     important: true
//   },
//   {
//     id: 2,
//     content: "Browser can execute only JavaScript",
//     important: false
//   },
//   {
//     id: 3,
//     content: "GET and POST are the most important methods of HTTP protocol",
//     important: true
//   }
// ];

const generateId = () => {
  const maxId = notes.length > 0 ? Math.max(...notes.map(n => n.id)) : 0;

  return maxId + 1;
};


// routes 
// GET home page
app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
});

// GET all notes
app.get('/api/notes', (request, response) => {
  Note.find({}).then(notes => {
    console.log(notes);
    response.json(notes);
  });
});

// GET single note
app.get('/api/notes/:id', (request, response) => {
  Note.findById(request.params.id).then(note => {
    response.json(note);
  });
});

// POST a new note
app.post('/api/notes', (request, response) => {
  const body = request.body;

  if (!body.content) {
    return response.status(400).json({
      error: 'content missing'
    });
  }

  const note = new Note({
    content: body.content,
    important: Boolean(body.important) || false,
  });

  note.save().then(savedNote => {
    response.json(note);
  });

});

// DELETE note
app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id);
  notes = notes.filter(note => note.id !== id);

  response.status(204).end();
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});



