import React, { useState } from 'react';
import './App.css';
import CadastroForm from './CadastrarForm';
import ListaAnimais from './ListaAnimais';

function App() {
  const [listaAnimais, setListaAnimais] = useState([
    { id: 1, foto: "https://fotos.amomeupet.org/uploads/stories/story_46_63d068951a3db.jpg", raca: "Gato Bengal", situacao: "Perdido"},
  ]);
 
  const adicionarAnimal = (animal) => {
    const novoAnimal = {
      id: Math.floor(Math.random() * 100000),
      ...animal,
      isConcluido: false
    };
 
    setListaAnimais([...listaAnimais, novoAnimal]);
  }
 
  const alterarStatus = (id) => {
    const novaListaAnimais = listaAnimais.map((animal) => {
      if (animal.id === id) {
        return { ...animal, isConcluido: !animal.isConcluido };
      }
      return animal;
    });
 
    setListaAnimais(novaListaAnimais);
  }
 
  const removerAnimal = (id) => {
    const novaListaAnimais = listaAnimais.filter((animal) => animal.id !== id);
    setListaAnimais(novaListaAnimais);
  }
 
  const [search, setSearch] = useState('');
 
  // Filtrar animais com base na pesquisa
  const animaisFiltrados = listaAnimais.filter((animal) =>
    animal.raca && animal.raca.toLowerCase().includes(search.toLowerCase())
  );
 
  return (
    <div className='App'>
      <h1>Lista de Animais</h1>
      <CadastroForm adicionarAnimal={adicionarAnimal} />
      <input
        type='text'
        placeholder='Pesquisar animais...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ListaAnimais
        animais={animaisFiltrados}
        alterarStatus={alterarStatus}
        removerAnimal={removerAnimal}
      />
    </div>
  );
}
 
export default App;