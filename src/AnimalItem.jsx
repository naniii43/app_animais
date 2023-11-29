import React from 'react';
 
function AnimalItem({ animal, alterarStatus, removerAnimal }) {
  return (
    <div>
      <img src={animal.foto} alt={animal.nome} />
      <h3 style={{ textDecoration: animal.isConcluido ? 'line-through' : '' }}>
        Nome: {animal.nome}
      </h3>
      <p>Situação: {animal.situacao}</p>
      <div>
        <button onClick={() => alterarStatus(animal.id)}>
          {animal.isConcluido ? 'Desfazer' : 'Concluir'}
        </button>
        <button onClick={() => removerAnimal(animal.id)}>Remover</button>
      </div>
    </div>
  );
}
 
export default AnimalItem;