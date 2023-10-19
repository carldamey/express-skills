const skills = [
  { id: 273489, skill: "JavaScript", learned: true },
  { id: 834579, skill: "HTML & CSS", learned: true },
  { id: 584903, skill: "Python", learned: true },
  { id: 908349, skill: "Django", learned: false },
  { id: 123432, skill: "Express", learned: false },
  { id: 634654, skill: "React", learned: false },
]

module.exports = {
  getAll,
  getOne,
  create,
  delete: deleteOne,
}

function getAll() {
  return skills
}

function getOne(id) {
  id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

function create(skill) {
  skill.id = Date.now() % 1000000
  skill.learned = false
  skills.push(skill)
}

function deleteOne(id) {
  const idx = skills.findIndex(skill => skill.id === parseInt(id))
    skills.splice(idx, 1)
}