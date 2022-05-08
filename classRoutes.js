'use strict'
const express = require('express')
const path = require('path')
const router = express.Router()
const classList = require('./classList.js')
const { add, get } = require('./classList.js')

// let classList = ['Daniel', 'Sifiso']

// Restful api
router.get('/api/list', function (req, res) {
  const myStudents = get()
  res.json(myStudents)
})

router.get('/api/get/:id', function (req, res) {
  res.json(classList[req.params.id])
})

router.post('/api/create', function (req, res) {
  console.log('creating the following student: ', req.body.student)
  add(req.body.student)
  // respond with the following endpoint
  // localhost:3000/class/api/list
  res.redirect(req.baseUrl)
})

// Question 6
// Implementation below when id is from the HTML form
/* router.post('/api/delete/:id', function (req, res) {
  const ID = parseInt(req.params.id, 10)
  const found = classList.find(student => student.id === ID)
  console.log(found)
  if (found) {
    classList = classList.filter(student => student.id !== ID)
    res.redirect(req.baseUrl + '/api/list')
  } else {
    res.status(404).json({ message: 'student not found' })
  }
  console.log('deleting a student entry')
}) */

// Delete student according to name
/* router.post('/api/delete', function (req, res) {
  const NameOfStudentToDelete = req.body.studentName
  const found = classList.find(student => student === NameOfStudentToDelete)
  if (found) {
    classList = classList.filter(student => student !== NameOfStudentToDelete)
    res.redirect(req.baseUrl)
  } else {
    res.status(404).json({ message: 'student not found' })
  }
  console.log('Deleting a student entry')
}) */

// Since classlist is nolonger an array of elements, needed to change
/* router.post('/api/edit', function (req, res) {
  const selectedQuery = req.body.dropdown
  const oldNameOrId = req.body.old
  const newNameOrId = req.body.New
  const found = classList.find(student => student === oldNameOrId)
  if (selectedQuery === 'studentName' && found) {
    classList.forEach(function (student, index) {
      if (student === oldNameOrId) {
        classList[index] = newNameOrId
        console.log(`Student name changed from ${oldNameOrId} to ${newNameOrId}`)
      }
    })
  } else {
    res.status(404).json({ message: 'student not in database' })
  }
  console.log(classList)

  res.redirect(req.baseUrl)
}) */

// Think this is the default directory where the program initially gows
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'index.html'))
})

router.get('/create', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'create.html'))
})

router.get('/delete', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'delete.html'))
})

router.get('/edit', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'edit.html'))
})

module.exports = router
