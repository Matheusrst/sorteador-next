import { useState } from 'react';

interface Dado {
  id: string;
  name: string;
}

const Roleta = ({ dados }: { dados: Dado[] }) => {
  const [resultado, setResultado] = useState<string | null>(null);
  const [contador, setContador] = useState<number | null>(null);

  const realizarSorteio = () => {
    if (dados.length > 0) {
      setContador(5);
      const intervalo = setInterval(() => {
        setContador((prev) => {
          if (prev && prev > 1) {
            return prev - 1;
          } else {
            clearInterval(intervalo);
            const indexGanhador = Math.floor(Math.random() * dados.length);
            const nomeUsuario = extrairNomeUsuario(dados[indexGanhador].name);
            setResultado(nomeUsuario);
            return null;
          }
        });
      }, 1000);
    }
  };

  const extrairNomeUsuario = (url: string) => {
    const partes = url.split('/');
    return partes[partes.length - 1];
  };

  return (
    <div>
      <button onClick={realizarSorteio} disabled={contador !== null}>
        Realizar Sorteio
      </button>
      {contador !== null && <p>Contagem regressiva: {contador}</p>}
      {resultado && <h2>Ganhador: {resultado}</h2>}
    </div>
  );
};

export default Roleta;
