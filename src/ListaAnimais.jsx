import React from 'react';
import AnimalItem from './AnimalItem';
 
function ListaAnimais({ animais, alterarStatus, removerAnimal }) {
  return (
    <div>
      {animais.map((animal) => (
        <AnimalItem
          key={animal.id}
          animal={animal}
          alterarStatus={alterarStatus}
          removerAnimal={removerAnimal}
        />
      ))}
    </div>
  );
}
 
export default ListaAnimais;