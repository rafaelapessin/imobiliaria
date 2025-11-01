import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView, Alert, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export default function TelaDetalhes({ route, navigation }) {
  const { imovel } = route.params;

  const excluirImovel = () => {
    Alert.alert(
      'Excluir imóvel',
      'Tem certeza que deseja excluir este imóvel?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Excluir', style: 'destructive', onPress: () => {
            Alert.alert('Excluído', 'O imóvel foi removido com sucesso.');
            navigation.navigate('Inicial');
          }
        }
      ]
    );
  };

  return (
    <SafeAreaView style={estilos.areaSegura}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={estilos.container}>
          {/* Cabeçalho com casinhas */}
          <Image 
            source={require('../../assets/imagens/banner.png')} 
            style={estilos.cabecalhoImagem}
            resizeMode="cover"
          />

          <Text style={estilos.tituloTopo}>Detalhes do Imóvel</Text>

          <View style={estilos.cartaoDetalhes}>
            <View style={estilos.areaImagem}>
              <Text style={estilos.textoImagem}>ESPAÇO PARA IMAGEM</Text>
            </View>

            <Text style={estilos.titulo}>{imovel.titulo || imovel.nome}</Text>
            <Text style={estilos.valor}>R$ {imovel.valor || imovel.preco}</Text>
            <Text style={estilos.descricao}>
              {imovel.descricao || 'Sem descrição disponível.'}
            </Text>

            <View style={estilos.especificacoes}>
              <Text style={estilos.textoEspecificacao}> {imovel.quartos || 0} quartos</Text>
              <Text style={estilos.textoEspecificacao}> {imovel.banheiros || 0} banheiros</Text>
              <Text style={estilos.textoEspecificacao}> {imovel.area || '---'}</Text>
            </View>

            <TouchableOpacity 
              style={estilos.botaoExcluir}
              onPress={excluirImovel}
            >
              <Text style={estilos.textoBotaoExcluir}>Excluir Imóvel</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={estilos.botaoVoltar}
              onPress={() => navigation.navigate('Inicial')}
            >
              <Text style={estilos.textoBotaoVoltar}>← Voltar</Text>
            </TouchableOpacity>
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
    width: width,
    height: 350,
  },
  tituloTopo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3B3B3B',
    marginVertical: 15,
  },
  cartaoDetalhes: {
    width: '85%',
    backgroundColor: '#FFF8F4',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  areaImagem: {
    backgroundColor: '#D9D9D9',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 15,
  },
  textoImagem: {
    color: '#777',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#545947',
    marginBottom: 8,
  },
  valor: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#AC3131',
    marginBottom: 12,
  },
  descricao: {
    fontSize: 16,
    color: '#444',
    lineHeight: 22,
    marginBottom: 20,
  },
  especificacoes: {
    backgroundColor: '#A5DDD6',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  textoEspecificacao: {
    fontSize: 15,
    color: '#545947',
    marginVertical: 2,
  },
  botaoExcluir: {
    backgroundColor: '#AC3131',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  textoBotaoExcluir: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  botaoVoltar: {
    backgroundColor: '#545947',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBotaoVoltar: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
