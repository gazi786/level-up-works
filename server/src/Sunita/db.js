const express = require('express');
const mysql = require('mysql2');
const cors = require("cors");
require('dotenv').config();

const app = express();

//Middleware
app.use(cors());

app.use(express.json());

//Create connection
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 2,

});

app.get("/", (req, res) => {
    res.send("Hey backend is connected.");
});

//Project library
app.get("/api/projectLibrary", (req, res) => {
    pool.query(`SELECT * FROM missio20_team5.project;`, function (err, result) {
        if (err) {
            res.status(500).send('Error retrieving data from database for id ');
        } else {
            res.send(result);
        }
    });
});

//Project library used for filtering FREE projects
app.get("/api/projectLibrary-free", (req, res) => {
    pool.query(`SELECT * FROM missio20_team5.project WHERE subscription = "Free";`, function (err, result) {
        if (err) {
            res.status(500).send('Error retrieving data from database for id ');
        } else {
            res.send(result);
        }
    });
});


//Project library used for filtering PREMIUM projects
app.get("/api/projectLibrary-premium", (req, res) => {
    pool.query(`SELECT * FROM missio20_team5.project WHERE subscription = "Premium";`, function (err, result) {
        if (err) {
            res.status(500).send('Error retrieving data from database for id ');
        } else {
            res.send(result);
        }
    });
});

//Project library used for filtering BEGINNER & FREE projects
app.get("/api/projectLibrary-beginnerFree", (req, res) => {
    pool.query(`SELECT * FROM missio20_team5.project WHERE course = "Beginner" && subscription = "Free";`, function (err, result) {
        if (err) {
            res.status(500).send('Error retrieving data from database for id ');
        } else {
            res.send(result);
        }
    });
});

//Project library used for filtering BEGINNER & PREMIUM projects
app.get("/api/projectLibrary-beginnerPremium", (req, res) => {
    pool.query(`SELECT * FROM missio20_team5.project WHERE course = "Beginner" && subscription = "Premium";`, function (err, result) {
        if (err) {
            res.status(500).send('Error retrieving data from database for id ');
        } else {
            res.send(result);
        }
    });
});

//Project library used for filtering INTERMEDIATE & FREE projects
app.get("/api/projectLibrary-intermediateFree", (req, res) => {
    pool.query(`SELECT * FROM missio20_team5.project WHERE course = "Intermediate" && subscription = "Free";`, function (err, result) {
        if (err) {
            res.status(500).send('Error retrieving data from database for id ');
        } else {
            res.send(result);
        }
    });
});

//Project library used for filtering INTERMEDIATE & PREMIUM projects
app.get("/api/projectLibrary-intermediatePremium", (req, res) => {
    pool.query(`SELECT * FROM missio20_team5.project WHERE course = "Intermediate" && subscription = "Premium";`, function (err, result) {
        if (err) {
            res.status(500).send('Error retrieving data from database for id ');
        } else {
            res.send(result);
        }
    });
});

//Project library used for filtering ADVANCE && FREE projects
app.get("/api/projectLibrary-advanceFree", (req, res) => {
    pool.query(`SELECT * FROM missio20_team5.project WHERE course = "Advance"  && subscription = "Free";`, function (err, result) {
        if (err) {
            res.status(500).send('Error retrieving data from database for id ');
        } else {
            res.send(result);
        }
    });
});

//Project library used for filtering ADVANCE && PREMIUM projects
app.get("/api/projectLibrary-advancePremium", (req, res) => {
    pool.query(`SELECT * FROM missio20_team5.project WHERE course = "Advance"  && subscription = "Premium";`, function (err, result) {
        if (err) {
            res.status(500).send('Error retrieving data from database for id ');
        } else {
            res.send(result);
        }
    });
});


// Students Profile Viewer
app.get("/api/studentProfile", (req, res) => {

    // const studentID = req.body.student_id; // body of the API request
    const studentID = 1; // body of the API request

    pool.query(`SELECT student_id, profile_pic, name, school, teacher_name, course, date_of_birth, contact_number, email FROM missio20_team5.student where student_id = 1;`, function (err, result) {
        if (err) {
            res.status(500).send('Error retrieving data from database for id ');
        } else {
            if (studentID === result[0].student_id) {
                res.send(result);
            } else {
                res.status(401).send("Incorrect ID")
            }

        }
    });
});

module.exports = app;