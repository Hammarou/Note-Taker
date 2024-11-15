// Import Express.js
const express = require("express");
const fs = require("fs/promises");

// Import Node.js package "path" to resolve file paths that are located on server
const path = require("path");

const { v4: uuidv4 } = require("uuid");

// Specify the port Express.js will run
const PORT = 3005;

// Create express app
const app = express();

// Needed to parse request bodies that are JSON middleware
app.use(express.json());

// Used to serve static files
console.log("__dirname", __dirname);
app.use(express.static(path.join(__dirname, "public")));

// Path to the db.json file
const db = path.join(__dirname,"db", "db.json");

console.log(db);

// Route to send index.html to the browser
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/home", (req, res) => {
  return res.json({ hello: "home" });
});

// Route to send notes.html to the browser
app.get("/notes", (req, res) => {
  // res.json({hello: "world"})
  res.sendFile(path.join(__dirname, "public", "notes.html"));
});

// Route that sends the response with the db.json in JSON format
app.get("/api/notes", async (req, res) => {
  const notes = await fs.readFile(db);
  const data = JSON.parse(notes);
console.log("data", data)
  // Send data in JSON format
  return res.json(data);
});

app.post("/api/notes", async (req, res) => {
  // req.body contains the parsed JSON whose data that comes from an HTML Form
  const note = req.body;
  console.log(note);

  // uidv4 creates a random id
  note.id = uuidv4();
  const data = await fs.readFile(db);
  const notes = JSON.parse(data);
  notes.push(note);
  await fs.writeFile(db, JSON.stringify(notes));
  return res.status(201).json(note);
});

app.delete("/api/notes/:id", async (req, res) => {
  const id = req.params.id;
  const data = await fs.readFile(db);
  const notes = JSON.parse(data);
  const newNotes = notes.filter((note) => note.id !== id);
  await fs.writeFile(db, JSON.stringify(newNotes));
  return res.status(204).json();
});

// Listen for the endpoints
app.listen(PORT, () => {
  console.log(`listen on ${PORT}`);
  console.log(
    "ndex.html file path",
    path.join(__dirname, "public", "index.html")
  );
});
