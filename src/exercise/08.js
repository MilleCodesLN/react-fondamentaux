"use client"
// Les States
// http://localhost:3000/alone/exercise/08.js

import * as React from 'react'


// 🐶 Créé un fonction 'addSkillPython' qui ajoute le skill Python
// 🤖 skills.push({id:'xxxx', value: 'Python'})
// 🤖 Utilise {id:`${Math.random()}` pour générer un id aléatoire
// 🐶 dans la fonction 'addSkillPython' logue le tableau skills
// 🤖 console.log('skills',skills)
// const addSkillPython = () => {
//     skills.push({id: `${Math.random()}`, value: 'Python'})
//     console.log('skills', initialSkills)
//   }


const initialSkills = [
  {id: 'e313', value: 'HTML'},
  {id: 'f980', value: 'CSS'},
  {id: '11eb', value: 'JS'},
  {id: '9a03', value: 'REACT'},
  {id: '65d4', value: 'ANGULAR'},
]

// 🐶 Créé un button dans le render et sur l'evenement onclick passer la fonction 'addSkillPython'
// 🤖 <button onClick={addSkillPython}
function MesSkills(props) {
  const [skills, setSkills] = React.useState(initialSkills)
  const addSkillPython = () => {
    setSkills([...skills, {id: `${Math.random()}`, value: 'Python'}])
   
    console.log('skills', skills)
  }
  return (
    <>
      <h1>Mes Skills</h1>
      <ul>
        {skills.map(skill => (
          <li key={skill.id}>{skill.value}</li>
        ))}
      </ul>
        <button onClick={addSkillPython}>Ajouter Python</button>
    </>
  )
}

function App() {
  return <MesSkills />
}

export default App
