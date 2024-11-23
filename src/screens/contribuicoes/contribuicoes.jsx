import { Text, View } from "react-native";
import { alimentos } from "../../constants/dados";
import Alimentos from "../../components/alimentos/alimentos";
import Button from "../../components/button/button";
import { styles } from "./contribuicoes.style";



function Contribuicoes(props){

    return <View style={styles.container}>
    
        <View style={styles.header}>
            <Text style={styles.titulo}>FoodCare</Text>
        </View>

        <Alimentos dados={alimentos}/>

        <View style={styles.form}>
            <Button texto="Rever minhas doações" onPress={()=> props.navigation.navigate("resumo")}/>
        </View>
    
    </View>

    

       
}

export default Contribuicoes;