'use strict'

const List = []

module.exports = {
  add: function (student) {
    List.push(student)
  },
  edit: function (student, index) {
    List[index] = student
  },
  get: function () {
    return List
  },
  delete: function (index) {
    List.splice(index, 1)
  }
}
