import { StyleSheet, View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useImoveis } from '../contexto/ContextoImoveis';

export default function TelaInicial({ navigation }) {
  const { imoveis } = useImoveis();

  const renderizarCardImovel = ({ item }) => (
    <TouchableOpacity 
      style={estilos.cardImovel}
      onPress={() => navigation.navigate('Detalhes', { imovel: item })}
    >
      <Image source={item.imagem} style={estilos.imagemImovel} />
      <View style={estilos.infoImovel}>
        <Text style={estilos.nomeImovel}>{item.nome}</Text>
        <Text style={estilos.enderecoImovel}>{item.endereco}</Text>
        <Text style={estilos.precoImovel}>{item.preco}</Text>
        <View style={estilos.detalhesImovel}>
          <Text style={estilos.textoDetalhe}>🛏️ {item.quartos} quartos</Text>
          <Text style={estilos.textoDetalhe}>🚿 {item.banheiros} banheiros</Text>
          <Text style={estilos.textoDetalhe}>📐 {item.area}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={estilos.areaSegura} edges={['bottom']}>
      <View style={estilos.container}>
        <TouchableOpacity 
          style={estilos.botaoAdicionar}
          onPress={() => navigation.navigate('Cadastro')}
        >
          <Text style={estilos.textoBotaoAdicionar}>+ Cadastrar Novo Imóvel</Text>
        </TouchableOpacity>
        
        <FlatList
          data={imoveis}
          renderItem={renderizarCardImovel}
          keyExtractor={item => item.id}
          contentContainerStyle={estilos.containerLista}
          showsVerticalScrollIndicator={false}
        />
      </View>
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
  botaoAdicionar: {
    backgroundColor: '#A5DDD6',
    padding: 15,
    margin: 15,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  textoBotaoAdicionar: {
    color: '#545947',
    fontSize: 16,
    fontWeight: 'bold',
  },
  containerLista: {
    padding: 15,
    paddingTop: 0,
  },
  cardImovel: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#EDC4B3',
  },
  imagemImovel: {
    width: '40%',
    height: 200,
    backgroundColor: '#EDC4B3',
  },
  infoImovel: {
    padding: 15,
  },
  nomeImovel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000ff',
    marginBottom: 5,
  },
  enderecoImovel: {
    fontSize: 15,
    color: '#000000ff',
    marginBottom: 10,
  },
  precoImovel: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#AC3131',
    marginBottom: 10,
  },
  detalhesImovel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textoDetalhe: {
    fontSize: 15,
    color: '#545947',
  },
});