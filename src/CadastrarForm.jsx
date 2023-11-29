import React, { useState } from 'react';
 
function CadastroForm({ adicionarAnimal }) {
  const [foto, setFoto] = useState('');
  const [nome, setNome] = useState('');
  const [situacao, setSituacao] = useState('');
 
  const cadastrarAnimal = () => {
    // Verifica se algum campo está vazio antes de cadastrar
    if (!foto || !nome || !situacao) {
      alert('Por favor, preencha todos os campos antes de cadastrar.');
      return;
    }
 
    const novoAnimal = {
      foto,
      nome,
      situacao,
      id: Math.floor(Math.random() * 100000),
      isConcluido: false,
    };
 
    adicionarAnimal(novoAnimal);
 
    // Limpar os campos após cadastrar
    setFoto('');
    setNome('');
    setSituacao('');
  };
 
  return (
    <div>
      <h2>Cadastrar Animal</h2>
      <div>
        <input
          type="text"
          value={foto}
          onChange={(e) => setFoto(e.target.value)}
          placeholder="URL da Foto"
        />
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome do Animal"
        />
        <select value={situacao} onChange={(e) => setSituacao(e.target.value)}>
          <option value="">Selecione a Situação</option>
          <option value="Perdido">Perdido</option>
          <option value="Resgatado">Resgatado</option>
        </select>
        <button onClick={cadastrarAnimal}>Cadastrar</button>
      </div>
    </div>
  );
}
 
export default CadastroForm;