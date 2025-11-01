import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaInicial from './src/telas/TelaInicial';
import TelaCadastro from './src/telas/TelaCadastro';
import TelaDetalhes from './src/telas/TelaDetalhes';
import { ProvedorImoveis } from './src/contexto/ContextoImoveis';
import "./src/contexto/ContextoImoveis"

const Pilha = createNativeStackNavigator();

export default function App() {
  return (
    <ProvedorImoveis>
      <NavigationContainer>
        <Pilha.Navigator
          initialRouteName="Inicial"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#545947',
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
          }}
        >
          <Pilha.Screen 
            name="Inicial" 
            component={TelaInicial}
            options={{ title: 'Imóveis Disponíveis' }}
          />
          <Pilha.Screen 
            name="Cadastro" 
            component={TelaCadastro}
            options={{ title: 'Cadastrar Imóvel' }}
          />
          <Pilha.Screen 
            name="Detalhes" 
            component={TelaDetalhes}
            options={{ title: 'Detalhes do Imóvel' }}
          />
        </Pilha.Navigator>
      </NavigationContainer>
    </ProvedorImoveis>
  );
}