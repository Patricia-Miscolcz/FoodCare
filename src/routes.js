import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./screens/login/login";
import Registro from "./screens/registro/registro";
import Registro2 from "./screens/registro2/registro2";
import Home from './screens/home/home';
import Contribuicoes from './screens/contribuicoes/contribuicoes';
import Resumo from './screens/resumo/resumo';
import Agradecimentos from './screens/Finalização/finalizacao';

const Stack = createNativeStackNavigator();

function Routes(){
    return(
        <NavigationContainer>

            <Stack.Navigator>

                <Stack.Screen name="login" component={Login} options={{
                    headerShown:false
                }}/>

                <Stack.Screen name="registro" component={Registro} options={{
                    //headerShown:false
                    headerShadowVisible:false,
                    title:"",
                    //isso só aparece no IOS, ficaria um Voltar em azul
                    headerBackTitle:"Voltar" 
                }}/>

                <Stack.Screen name="registro2" component={Registro2} options={{
                    //headerShown:false
                    headerShadowVisible:false,
                    title:"",
                    headerBackTitle:"Voltar"
                }}/>

                <Stack.Screen name="home" component={Home} options={{
                    //headerShown:false
                    headerShadowVisible:false,
                    title:"",
                    headerBackTitle:"Voltar"
                }}/>

                <Stack.Screen name="contribuicoes" component={Contribuicoes} options={{
                    //headerShown:false
                    headerShadowVisible:false,
                    title:"",
                    headerBackTitle:"Voltar"
                }}/>

                <Stack.Screen name="resumo" component={Resumo} options={{
                    //headerShown:false
                    headerShadowVisible:false,
                    title:"",
                    headerBackTitle:"Voltar"
                }}/>

                <Stack.Screen name="finalizar" component={Agradecimentos} options={{
                    //headerShown:false
                    headerShadowVisible:false,
                    title:"",
                    headerBackTitle:"Voltar"
                }}/>

            </Stack.Navigator>

        </NavigationContainer>
    )
}
export default Routes;