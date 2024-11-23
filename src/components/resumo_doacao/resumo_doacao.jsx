import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../resumo_doacao/resumo_doacao.style";

function Resumo_doacao (props){
    return (
        <View style={styles.containerDescricao}>
            
            <Text style={styles.titulo}>Verifique suas doações:</Text>

            
                {
                    props.dados.map((escolhido, index) =>(
                        <View key={index}>
                            <View>
                                <View style={styles.textos}>
                                    <Text style={styles.descricao}>{escolhido.descricao} - {escolhido.ttl}</Text>
                                </View>
                            </View>
                            
                        </View>
                    ))
                }
            


            </View>
    )
            
}
export default Resumo_doacao;
