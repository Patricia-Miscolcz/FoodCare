import { Text, View, ScrollView, TouchableOpacity, Image, Linking } from "react-native";
import {styles} from "../home/home.style"
import Categorias from "../../components/categorias/categorias";
import { categorias} from "../../constants/dados.js";
import Button from "../../components/button/button";
import icons from "../../constants/icons";






function Home(props){

    const openInstagram = () => {
        Linking.openURL("https://www.instagram.com/instituto.c/");
    };

    return <View style={styles.container}>
    
    <View style={styles.header}>
        <Text style={styles.titulo}>FoodCare</Text>
    </View>
    
        <View>
            <ScrollView>
                <Categorias dados={categorias} /> 
            </ScrollView>

            <Text style={styles.titulo2}>Escolha uma ou mais categorias para efetuar a sua doação:</Text>

            <View style={styles.containerBtn}>
                <Button texto="Alimentos"onPress={()=> props.navigation.navigate("contribuicoes")}/>
                <Button texto="Roupas"/>
                <Button texto="Brinquedos"/>
                <Button texto="Higiene Pessoal"/>
                <Button texto="Produtos Limpeza"/>
                <Button texto="Valores em espécie"/>
            </View>
        </View>


        <View style={styles.footer}>
            <TouchableOpacity onPress={openInstagram}>
                <Text style={styles.textoInsta}>Visite-nos em nosso Instagram</Text>
            </TouchableOpacity>
        </View>


        
    </View>
       
}

export default Home;