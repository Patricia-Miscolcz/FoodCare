import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import {styles} from "../doacoes/doacoes.style";

function Doacoes({ navigation, dados }){
    return (
        <View style={styles.containerDescricao}>
            
            <Text style={styles.titulo}>Escolha uma ou mais categorias para efetuar a sua doação:</Text>

            <ScrollView horizontal={false} showsHorizontalScrollIndicator={false} >
                {
                    dados.map((opcao, index) =>(
                        <View key={index}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Contribuicao', { categoria: opcao })}  // Navegar para a tela Contribuicao
                            >
                                <Text style={styles.descricao}>{opcao.descricao}</Text>
                            </TouchableOpacity>
                            
                        </View>
                    ))
                }

            </ScrollView>


            </View>
    )
            
}
export default Doacoes;