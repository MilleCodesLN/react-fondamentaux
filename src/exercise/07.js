// Rendu de tableaux
// http://localhost:3000/alone/exercise/07.js

import * as React from 'react'

// 🐶 Le code suivant génère un warning :  Warning: Each child in a list should have a unique "key" prop

const skills = []
// 🐶 Corrige ce code avec des keys uniques sur les elements <li>
skills.push('HTML')
skills.push('CSS')
skills.push('JS')
skills.push('REACT')
skills.push('REACT')
skills.push('ANGULAR')


const skills2 = [
  {id: 'e313', value: 'HTML'},
  {id: 'f980', value: 'CSS'},
  {id: '11eb', value: 'JS'},
  {id: '9a03', value: 'REACT'},
  {id: '65d4', value: 'ANGULAR'},
]



function MesSkills() {
  return <ol>{skills.map((skill,index) => <li key={index}>{skill}</li>)}</ol>
}
function MesSkills2() {
  return <ol>{skills2.map(skill => <li key={skill.id}>{skill.value}</li>)}</ol>
}

function App() {
  return <><MesSkills /><hr /><MesSkills2 /></>
}

export default App
