import React, { createContext, useState, useContext } from 'react';

const ContextoImoveis = createContext();

export const ProvedorImoveis = ({ children }) => {
  const [imoveis, setImoveis] = useState([
    {
      id: '1',
      nome: 'Casa Moderna',
      endereco: 'Rua das Flores, 123',
      preco: 750000,
      quartos: '3',
      banheiros: '2',
      area: 150,
      imagem: require('../../assets/imagens/casa.jpg'),
      descricao: 'Linda casa moderna com acabamento de primeira qualidade, localizada em bairro nobre.'
    },
    {
      id: '2',
      nome: 'Apartamento Centro',
      endereco: 'Av. Principal, 456',
      preco: 200000,
      quartos: '2',
      banheiros: '1',
      area: 85,
      imagem: require('../../assets/imagens/apartamento.png'),
      descricao: 'Apartamento bem localizado no centro da cidade, próximo a comércios e serviços.'
    },
    {
      id: '3',
      nome: 'Cobertura Luxo',
      endereco: 'Rua do Sol, 789',
      preco: 500000,
      quartos: '4',
      banheiros: '3',
      area: 220,
      imagem: require('../../assets/imagens/cobertura.jpg'),
      descricao: 'Cobertura de luxo com vista panorâmica, piscina privativa e área gourmet completa.'
    },
    {
      id: '4',
      nome: 'Apartamento Luxo',
      endereco: 'Rua dos Girassóis, 123',
      preco: 850000,
      quartos: '3',
      banheiros: '2',
      area: 150,
      imagem: require('../../assets/imagens/novoImovel.png'),
      descricao: 'Apartamento de luxo com vista privilegiada, arquitetura sofisticada e design moderno.'
    }
  ]);

  const adicionarImovel = (imovel) => {
  const novoImovel = {
    id: Date.now().toString(),
    ...imovel,
    imagem: imovel.imagem
      ? { uri: imovel.imagem } // usa link informado
      : require('../../assets/imagens/semImagem.png'), // local
  };
  setImoveis([...imoveis, novoImovel]);
  };

  return (
    <ContextoImoveis.Provider value={{ imoveis, adicionarImovel }}>
      {children}
    </ContextoImoveis.Provider>
  );
};

export const useImoveis = () => {
  const contexto = useContext(ContextoImoveis);
  if (!contexto) {
    throw new Error('useImoveis deve ser usado dentro de ProvedorImoveis');
  }
  return contexto;
};