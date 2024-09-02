import { useState } from 'react';

interface Dado {
  id: string;
  name: string;
}

const CadastroDados = ({ onAddDado }: { onAddDado: (dado: Dado) => void }) => {
  const [nomeDado, setNomeDado] = useState('');

  const handleSubmit = () => {
    if (nomeDado.trim()) {
      onAddDado({ id: Date.now().toString(), name: nomeDado });
      setNomeDado('');
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={nomeDado} 
        onChange={(e) => setNomeDado(e.target.value)} 
        placeholder="Digite o nome" 
      />
            <button onClick={handleSubmit}>Adicionar</button>
        </div>
    );
};

export default CadastroDados;