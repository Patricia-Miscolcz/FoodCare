import { View, TouchableOpacity, Text, Platform } from "react-native";
import Button from "../../components/button/button.jsx";
import TextBox from "../../components/textbox/textbox";
import { styles } from "./login.style.js";
import Header from "../../components/header/header";
import LottieView from 'lottie-react-native';




function Login(props){

    return(
        <View style={styles.container}>

            <Header texto="Acesse a sua conta"/>

            {
                Platform.OS != "web" &&
                <LottieView 
                key={Math.random()} // Isso força a reinicialização da animação a cada renderização
                autoPlay = {true}
                style={styles.animation}
                source={require('../../animation/animar.json')}
                loop = {true}
                />

            }

            <View style={styles.formGroup}>

                <View style={styles.form}>
                    <TextBox
                    label="E-mail:"
                    placeholder="empresa1@gmail.com"
                    />
                </View>

                <View style={styles.form}>
                    <TextBox label="Senha:"
                    isPassword={true}
                    placeholder="******"
                    />
                </View>

                <View style={styles.form}>
                    <Button texto="Acessar" onPress={()=> props.navigation.navigate("home")}/>
                </View>

            </View>

            
            <View style={styles.footer}>

                <TouchableOpacity onPress={()=> props.navigation.navigate("registro")} >
                    <Text style={styles.footerText}>Criar minha conta</Text>
                </TouchableOpacity>
                
            </View>

                       
        </View>
    )
}

export default Login;