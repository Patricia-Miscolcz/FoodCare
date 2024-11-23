import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import {styles} from "../categorias/categorias.style"

function Categorias(props){
    return (
        <View style={styles.containerDescricao}>

            <Text style={styles.titulo}>Empresas Parceiras</Text>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scroll}>
                {
                    props.dados.map((empresa, index) =>(
                        <View key={index} style={styles.categoria}>
                                <Text style={styles.descricao}>{empresa.nome}</Text>
                                
                        </View>
                    ))
                }
            </ScrollView>

            


            </View>
    )
            

}

export default Categorias;
