import { Text, View } from "react-native";
import {styles} from "../resumo/resumo.style"
import Button from "../../components/button/button";
import { escolhidos } from "../../constants/dados";
import Resumo_doacao from "../../components/resumo_doacao/resumo_doacao";

function Resumo (props){

    return <View style={styles.container}>
    
        <View style={styles.header}>
            <Text style={styles.titulo}>FoodCare</Text>
        </View>

        
        <Resumo_doacao dados={escolhidos}/>




        <View style={styles.containerBtn}>
            <Button texto="Finalizar" onPress={()=> props.navigation.navigate("finalizar")}/>
        </View>
    

    </View>

}
export default Resumo;