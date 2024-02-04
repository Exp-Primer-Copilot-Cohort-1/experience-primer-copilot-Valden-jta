// create web serer
var express = require('express');
var router = express.Router();

// create connection to database
var connection = require('../db/sql.js');

/* GET comments listing. */
router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM comments', function(err, rows, fields) {
    if (err) throw err;
    res.json(rows);
  });
});

// get comments by id
router.get('/:id', function(req, res, next) {
  connection.query('SELECT * FROM comments WHERE id = ?', req.params.id, function(err, rows, fields) {
    if (err) throw err;
    res.json(rows);
  });
});

// add comment
router.post('/', function(req, res, next) {
  connection.query('INSERT INTO comments SET ?', req.body, function(err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// update comment
router.put('/:id', function(req, res, next) {
  connection.query('UPDATE comments SET ? WHERE id = ?', [req.body, req.params.id], function(err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// delete comment
router.delete('/:id', function(req, res, next) {
  connection.query('DELETE FROM comments WHERE id = ?', req.params.id, function(err, result) {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = router;