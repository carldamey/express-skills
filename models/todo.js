const todos = [
  { id: 273489, todo: "Submit 10/17 Deliverable", done: false },
  { id: 250739, todo: "Week 4 Outcomes", done: false },
  { id: 523689, todo: "Learn MongoDB", done: false },
  { id: 240378, todo: "Create Mock Todo DB", done: true },
  { id: 684942, todo: "Complete express-todos Lesson", done: false },
]

module.exports = {
  getAll: function () {
    return todos
  },
}
