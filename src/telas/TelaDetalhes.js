import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TelaDetalhes({ route, navigation }) {
  const { imovel } = route.params;

  return (
    <SafeAreaView style={estilos.areaSegura} edges={['bottom']}>
      <ScrollView style={estilos.container}>
        <Image 
          source={{ uri: imovel.imagem }} 
          style={estilos.imagemDetalhes} 
        />
        
        <View style={estilos.conteudoDetalhes}>
          <Text style={estilos.tituloDetalhes}>{imovel.nome}</Text>
          <Text style={estilos.enderecoDetalhes}>{imovel.endereco}</Text>
          <Text style={estilos.precoDetalhes}>{imovel.preco}</Text>
          
          <View style={estilos.especificacoesDetalhes}>
            <View style={estilos.itemEspecificacao}>
              <Text style={estilos.iconeEspecificacao}>🛏️</Text>
              <Text style={estilos.textoEspecificacao}>{imovel.quartos}</Text>
              <Text style={estilos.rotuloEspecificacao}>Quartos</Text>
            </View>
            <View style={estilos.itemEspecificacao}>
              <Text style={estilos.iconeEspecificacao}>🚿</Text>
              <Text style={estilos.textoEspecificacao}>{imovel.banheiros}</Text>
              <Text style={estilos.rotuloEspecificacao}>Banheiros</Text>
            </View>
            <View style={estilos.itemEspecificacao}>
              <Text style={estilos.iconeEspecificacao}>📐</Text>
              <Text style={estilos.textoEspecificacao}>{imovel.area}</Text>
              <Text style={estilos.rotuloEspecificacao}>Área</Text>
            </View>
          </View>

          <View style={estilos.secaoDescricao}>
            <Text style={estilos.tituloDescricao}>Descrição</Text>
            <Text style={estilos.textoDescricao}>
              {imovel.descricao || 'Sem descrição disponível.'}
            </Text>
          </View>

          <TouchableOpacity 
            style={estilos.botaoContato}
            onPress={() => Alert.alert('Contato', 'Funcionalidade em desenvolvimento')}
          >
            <Text style={estilos.textoBotaoContato}>Entrar em Contato</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={estilos.botaoVoltar}
            onPress={() => navigation.navigate('Inicial')}
          >
            <Text style={estilos.textoBotaoVoltar}>← Voltar para Início</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  areaSegura: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  imagemDetalhes: {
    width: '100%',
    height: 300,
    backgroundColor: '#EDC4B3',
  },
  conteudoDetalhes: {
    padding: 20,
  },
  tituloDetalhes: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#545947',
    marginBottom: 8,
  },
  enderecoDetalhes: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  precoDetalhes: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#AC3131',
    marginBottom: 20,
  },
  especificacoesDetalhes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#EDC4B3',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  itemEspecificacao: {
    alignItems: 'center',
  },
  iconeEspecificacao: {
    fontSize: 32,
    marginBottom: 5,
  },
  textoEspecificacao: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#545947',
  },
  rotuloEspecificacao: {
    fontSize: 12,
    color: '#545947',
    marginTop: 2,
  },
  secaoDescricao: {
    marginBottom: 20,
  },
  tituloDescricao: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#545947',
    marginBottom: 10,
  },
  textoDescricao: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  botaoContato: {
    backgroundColor: '#AC3131',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  textoBotaoContato: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  botaoVoltar: {
    backgroundColor: '#545947',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  textoBotaoVoltar: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});