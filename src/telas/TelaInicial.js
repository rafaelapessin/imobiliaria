import { StyleSheet, View, Image, Text, TouchableOpacity, FlatList, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useImoveis } from '../contexto/ContextoImoveis';


const { width } = Dimensions.get('window');

export default function TelaInicial({ navigation }) {
  const { imoveis } = useImoveis();

  const renderizarCardImovel = ({ item }) => (
    <TouchableOpacity 
      style={estilos.cardImovel}
      onPress={() => navigation.navigate('Detalhes', { imovel: item })}
    >
      <View style={estilos.areaImagem}>
        <Image source={item.imagem} style={estilos.imagem} />
      </View>
      <View style={estilos.infoImovel}>
        <Text style={estilos.tituloAnuncio}>{item.nome}</Text>
        <Text style={estilos.descricao}>{item.descricao}</Text>
        <Text style={estilos.preco}>R$ {item.preco},00</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={estilos.areaSegura}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={estilos.container}>
          {/* Cabeçalho com as casinhas */}
          <Image source={require('../../assets/imagens/banner.png')} style={estilos.cabecalhoImagem}/>
          <Image source={require('../../assets/imagens/logo.webp')} style={estilos.logo}/>
          <Text style={estilos.tituloTopo}>3 Cores Imobiliária</Text>

          {/* Botão cadastrar novo imóvel */}
          <TouchableOpacity 
            style={estilos.botaoCadastrar}
            onPress={() => navigation.navigate('Cadastro')}
          >
            <Text style={estilos.textoBotaoCadastrar}>Cadastrar novo imóvel</Text>
          </TouchableOpacity>

          <Text style={estilos.subtitulo}>Conheça nossos imóveis e descubra o melhor em um só lugar!</Text>

          {/* Lista de imóveis */}
          <View style={estilos.areaLista}>
            <FlatList
              data={imoveis}
              renderItem={renderizarCardImovel}
              keyExtractor={item => item.id}
              contentContainerStyle={estilos.containerLista}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  areaSegura: {
    flex: 1,
    backgroundColor: '#EDC4B3',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#EDC4B3',
    paddingBottom: 30,
  },
  cabecalhoImagem: {
    width: '100%',
    height: 350,
    resizeMode: 'cover',
  },
  tituloTopo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3B3B3B',
    marginTop: 8,
    marginBottom: 10,
  },
  botaoCadastrar: {
    backgroundColor: '#545947',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 6,
    marginBottom: 15,
  },
  textoBotaoCadastrar: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#3B3B3B',
  },
  areaLista: {
    backgroundColor: '#A5DDD6',
    width: '90%',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  containerLista: {
    paddingBottom: 10,
  },
  cardImovel: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 12,
  },
  areaImagem: {
    width: '100%',
    backgroundColor: '#D9D9D9',
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 8,
  },
  imagem: {
  width: '100%',
  height: 400,
  borderRadius: 8,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  textoImagem: {
    color: '#777',
  },
  infoImovel: {
    alignItems: 'flex-start',
  },
  tituloAnuncio: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000ff',
    marginBottom: 4,
  },
  descricao: {
    fontSize: 16,
    color: '#444',
    marginBottom: 4,
  },
  preco: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#AC3131',
  },
});
