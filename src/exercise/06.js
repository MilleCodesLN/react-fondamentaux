// Ajouter du Style CSS
// http://localhost:3000/alone/exercise/05.js

import * as React from 'react'

// 🐶 Créé un composant ButtonActions
function ButtonActions({ isAdmin, hidden=false }) {
  
    
      if(hidden){
        return null
      }else {
       return (<div>
       {isAdmin ? (
        <ButtonAdmin />
      ) : (
       <ButtonGuest />
      )}
      </div>)
      }
    
  
}

function ButtonAdmin() {
  return (
    <div>
     
        <>
          <button>Lire</button>
          <button>Créer</button>
          <button>Modifier</button>
          <button>Supprimer</button>
        </>
    
    </div>
  )
}

function ButtonGuest() {
  return (
    <div>
     
        <>
          <button>Lire</button>
     
        </>
    
    </div>
  )
}

// 🐶 Conditionne le rendu en fonction d'un prop 'isAdmin'
// Si isAdmin est false alors on affichera que le bouton 'Lire'
// 🤖 ButtonActions({isAdmin})

const buttonRead = <button>Lire</button>
const buttonCreate = <button>Créer</button>
const buttonUpdate = <button>Modifier</button>
const buttonDelete = <button>Supprimer</button>

function App() {
  return (
    <>
    <h2>Admin is false</h2>
    <ButtonActions isAdmin={false} />
    <hr style={{border: '2px solid black', width:'100%'}}/>
    <h2>Admin is true</h2>
    <ButtonActions isAdmin={true} />
    <hr style={{border: '2px solid black', width:'100%'}}/>
    <h2>hidden is true</h2>
    <ButtonActions isAdmin={true} hidden={true} />
 <hr style={{border: '2px solid black', width:'100%'}}/>
    <h2>hidden is false</h2>
    <ButtonActions isAdmin={true} hidden={false} />
    </>
  )
}

export default App
