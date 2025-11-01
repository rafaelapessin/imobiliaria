import React, { createContext, useState, useContext } from 'react';

const ContextoImoveis = createContext();

export const ProvedorImoveis = ({ children }) => {
  const [imoveis, setImoveis] = useState([
    {
      id: '1',
      nome: 'Casa Moderna',
      endereco: 'Rua das Flores, 123',
      preco: 'R$ 450.000',
      quartos: '3',
      banheiros: '2',
      area: '150m²',
      imagem: require('../../assets/imagens/casa.jpg'),
      descricao: 'Linda casa moderna com acabamento de primeira qualidade, localizada em bairro nobre.'
    },
    {
      id: '2',
      nome: 'Apartamento Centro',
      endereco: 'Av. Principal, 456',
      preco: 'R$ 320.000',
      quartos: '2',
      banheiros: '1',
      area: '85m²',
      imagem: require('../../assets/imagens/apartamento.png'),
      descricao: 'Apartamento bem localizado no centro da cidade, próximo a comércios e serviços.'
    },
    {
      id: '3',
      nome: 'Cobertura Luxo',
      endereco: 'Rua do Sol, 789',
      preco: 'R$ 850.000',
      quartos: '4',
      banheiros: '3',
      area: '220m²',
      imagem: require('../../assets/imagens/cobertura.jpg'),
      descricao: 'Cobertura de luxo com vista panorâmica, piscina privativa e área gourmet completa.'
    }
  ]);

  const adicionarImovel = (imovel) => {
    const novoImovel = {
      id: Date.now().toString(),
      ...imovel,
      imagem: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop'
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