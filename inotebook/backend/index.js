// const connectToMongo = require('/full/path/to/db');
const connectToMongo = require("./db");

const express = require("express");

connectToMongo();

const app = express();
const port = 5000;

app.use(express.json());

// Available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// const connectToMongo = require('./db');
// const express = require('express');
// const authRoutes = require('./routes/auth');
// const notesRoutes = require('./routes/notes');

// connectToMongo();

// const app = express();
// const port = 3000;

// app.use('/api/auth', authRoutes);
// app.use('/api/notes', notesRoutes);

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
