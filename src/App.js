import React from 'react';
// if it is functional components
export default function App() {
  const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge');
  };
  return <button onClick={greetPeople}> </button>;
}
