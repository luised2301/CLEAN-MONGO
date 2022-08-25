const Mentor = require("../models/mentor.model")

// Funciones
// Handlers

// 1- Uso de caso -> Crear un mentor
const createMentor = (mentorData) => {
  // Crear un mentor
  const mentor = Mentor.create(mentorData)
  return mentor
}

// Retrieve Mentor
const getMentor = (id) => {
  const mentor = Mentor.findById(id)
  return mentor
}

// All mentors
const allMentors = (filters) => {
  const mentors = Mentor.find(filters)
  return mentors
}

// Actualizar un mentor
const updateMentor = (id, mentorData) => {
  // id
  // objetoupdate
  // options
  const mentor = Mentor.findByIdAndUpdate(id, mentorData, { returnDocument: "after" })
  return mentor
}

// Eliminar mentor
const removeMentor = (id) => {
  const mentor = Mentor.findByIdAndDelete(id)
  return mentor
}


module.exports = {
  createMentor,
  getMentor,
  allMentors,
  updateMentor,
  removeMentor
}