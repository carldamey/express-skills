const skills = [
  { id: 273489, skill: "JavaScript", learned: true },
  { id: 834579, skill: "HTML & CSS", learned: true },
  { id: 584903, skill: "Python", learned: true },
  { id: 908349, skill: "Django", learned: false },
  { id: 123432, skill: "Express", learned: false },
  { id: 634654, skill: "React", learned: false },
]

module.exports = {
  getAll: function () {
    return skills
  },
}
