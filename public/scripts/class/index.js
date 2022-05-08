'use strict'

// This code runs in the browser and retrieves data from the server
fetch('/class/api/list')
  .then(function (response) {
    if (response.ok) { return response.json() } else { throw 'Failed to load classlist: response code invalid!' }
  })

  .then(function (data) {
    const classList = document.getElementById('classList')

    data.forEach(function (student) {
      const li = document.createElement('li')
      const liText = document.createTextNode(student)
      li.className += 'student'

      li.appendChild(liText)
      classList.appendChild(li)
    })
  })
