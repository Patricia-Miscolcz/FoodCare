import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../resumo_doacao/resumo_doacao.style";

function Pontos_de_Coleta (props){
    return (
        <View style={styles.containerDescricao}>
            
            <Text style={styles.msg}>Se preferir, você podera efetuar a entrega dos donativos nos seguintes endereços:</Text>

            <ScrollView horizontal={false} showsHorizontalScrollIndicator={false} >

                {
                    props.dados.map((pontos_coleta, index) =>(
                        <View key={index} style={styles.containerLocais}>

                                <View style={styles.locais}>
                                    <Text style={styles.titulo2}>{pontos_coleta.nome}</Text>
                                    <Text style={styles.a}>{pontos_coleta.endereco}</Text>
                                    <Text style={styles.a}>{pontos_coleta.compl}</Text>
                                    <Text style={styles.a}>{pontos_coleta.tel}</Text>
                                    <Text style={styles.tituloRed}>{pontos_coleta.horario_funcionamento}</Text>
                                    <Text style={styles.a}>{pontos_coleta.descricao}</Text>
                                </View>
                            
                        </View>
                    ))
                }
            </ScrollView>


            </View>
    )
            
}
export default Pontos_de_Coleta;
