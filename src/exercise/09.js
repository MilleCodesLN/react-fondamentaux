"use client"
// Les formulaires
// http://localhost:3000/alone/exercise/08.js

import * as React from 'react'

function LoginForm() {
  // 🐶 Gère l'événement onSubmit de <form> en créant une fonction 'handleSubmit'
  // 🤖 <form onSubmit={handleSubmit}>
  // 🤖 Utilise `event.preventDefault()` dans la fonction handleSubmit pour stopper
  // le comportement par defaut du formulaire (soumission et rafraichissement page)

  // function handleSubmit(event) {
  //   event.preventDefault()
  //   // 🐶 Affiche une popup Bonjour'
  //   // 🤖 Utilise `alert()` pour afficher le message
  //   alert(`Bonjour ${event.target.elements.emailInput.value}`)
  //   console.log(`Bonjour ${event.target.elements.emailInput.value}`)
  // }



function handleChange(event) {
    console.log(`Valeur de l'input : ${event.target.value}`);
    setError((email.includes('@') && email.includes('.')) ? null : "l'email est non valide")
    setEmail(event.target.value);
    
  }
  function handleSubmit(event) {
    event.preventDefault();
    // alert(`Bonjour ${inputRef.current.value}`);
    alert(`Bonjour ${email}`);
  }
  const inputRef= React.useRef();
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState();

  // 🐶 Affiche ensuite une popup Bonjour 'email@email.fr'
  // 🤖 Utilise `event.target.elements.emailInput.value` pour récupèrer la valeur de l'email
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Adresse email :
        <input type="text" name="emailInput" ref={inputRef} onChange={handleChange} value={email}/>
        <div style={{ color: 'red' }}>{error}</div>
      </label>
      <input type="submit" value="Connexion" />
    </form>
  )
}

function App() {
  return <LoginForm />
}

export default App
