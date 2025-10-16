// app.js

const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 5000;

// Create a MySQL connection
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydata",
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database");
});

// Set up routes
app.get("/", (req, res) => {
  res.send("Welcome to the portal!");
});

app.get("/contacts", (req, res) => {
  // Handle contact form submission
  const { firstName, lastName, email, message } = req.query;
  
  const sql = "INSERT INTO users (firstName, lastName, email, message) VALUES ?";
  const values = [[firstName, lastName, email, message]];

  con.query(sql, [values], (err, result) => {
    if (err) throw err;
    console.log("Record inserted:", result.affectedRows);
    res.send("Contact form submitted successfully!");
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
