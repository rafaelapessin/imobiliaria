import { useState } from 'react';
import { 
  StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView, Alert 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useImoveis } from '../contexto/ContextoImoveis';

export default function TelaCadastro({ navigation }) {
  const { adicionarImovel } = useImoveis();
  
  const [dadosFormulario, setDadosFormulario] = useState({
    nome: '',
    endereco: '',
    preco: '',
    quartos: '',
    banheiros: '',
    area: '',
    descricao: '',
    imagem: '', // novo campo para imagem via URL
  });

  const manipularAdicaoImovel = () => {
    if (!dadosFormulario.nome || !dadosFormulario.endereco || !dadosFormulario.preco) {
      Alert.alert('Erro', 'Por favor, preencha pelo menos Nome, Endereço e Preço');
      return;
    }

    adicionarImovel(dadosFormulario);
    Alert.alert('Sucesso', 'Imóvel cadastrado com sucesso!');
    navigation.navigate('Inicial');
  };

  return (
    <SafeAreaView style={estilos.areaSegura} edges={['bottom']}>
      <ScrollView style={estilos.container}>
        <View style={estilos.formulario}>
          <Text style={estilos.rotulo}>Nome do Imóvel *</Text>
          <TextInput
            style={estilos.entrada}
            value={dadosFormulario.nome}
            onChangeText={(texto) => setDadosFormulario({...dadosFormulario, nome: texto})}
            placeholder="Ex: Casa Moderna"
            placeholderTextColor="#999"
          />

          <Text style={estilos.rotulo}>Endereço *</Text>
          <TextInput
            style={estilos.entrada}
            value={dadosFormulario.endereco}
            onChangeText={(texto) => setDadosFormulario({...dadosFormulario, endereco: texto})}
            placeholder="Ex: Rua das Flores, 123"
            placeholderTextColor="#999"
          />

          <Text style={estilos.rotulo}>Preço *</Text>
          <TextInput
            style={estilos.entrada}
            value={dadosFormulario.preco}
            onChangeText={(texto) => setDadosFormulario({...dadosFormulario, preco: texto})}
            placeholder="Ex: R$ 450.000"
            placeholderTextColor="#999"
          />

          {/* NOVO CAMPO DE IMAGEM */}
          <Text style={estilos.rotulo}>Imagem (URL)</Text>
          <TextInput
            style={estilos.entrada}
            value={dadosFormulario.imagem}
            onChangeText={(texto) => setDadosFormulario({...dadosFormulario, imagem: texto})}
            placeholder="Ex: https://exemplo.com/imagem.jpg"
            placeholderTextColor="#999"
          />

          <View style={estilos.linha}>
            <View style={estilos.metadeEntrada}>
              <Text style={estilos.rotulo}>Quartos</Text>
              <TextInput
                style={estilos.entrada}
                value={dadosFormulario.quartos}
                onChangeText={(texto) => setDadosFormulario({...dadosFormulario, quartos: texto})}
                placeholder="Ex: 3"
                placeholderTextColor="#999"
                keyboardType="numeric"
              />
            </View>

            <View style={estilos.metadeEntrada}>
              <Text style={estilos.rotulo}>Banheiros</Text>
              <TextInput
                style={estilos.entrada}
                value={dadosFormulario.banheiros}
                onChangeText={(texto) => setDadosFormulario({...dadosFormulario, banheiros: texto})}
                placeholder="Ex: 2"
                placeholderTextColor="#999"
                keyboardType="numeric"
              />
            </View>
          </View>

          <Text style={estilos.rotulo}>Área</Text>
          <TextInput
            style={estilos.entrada}
            value={dadosFormulario.area}
            onChangeText={(texto) => setDadosFormulario({...dadosFormulario, area: texto})}
            placeholder="Ex: 150m²"
            placeholderTextColor="#999"
          />

          <Text style={estilos.rotulo}>Descrição</Text>
          <TextInput
            style={[estilos.entrada, estilos.areaTexto]}
            value={dadosFormulario.descricao}
            onChangeText={(texto) => setDadosFormulario({...dadosFormulario, descricao: texto})}
            placeholder="Descreva o imóvel..."
            placeholderTextColor="#999"
            multiline
            numberOfLines={4}
          />

          <TouchableOpacity 
            style={estilos.botaoEnviar}
            onPress={manipularAdicaoImovel}
          >
            <Text style={estilos.textoBotaoEnviar}>Cadastrar Imóvel</Text>
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
  formulario: {
    padding: 20,
  },
  rotulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#545947',
    marginBottom: 8,
    marginTop: 10,
  },
  entrada: {
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: '#EDC4B3',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#000',
  },
  areaTexto: {
    height: 100,
    textAlignVertical: 'top',
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metadeEntrada: {
    width: '48%',
  },
  botaoEnviar: {
    backgroundColor: '#A5DDD6',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  textoBotaoEnviar: {
    color: '#545947',
    fontSize: 18,
    fontWeight: 'bold',
  },
  botaoVoltar: {
    backgroundColor: '#545947',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  textoBotaoVoltar: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
