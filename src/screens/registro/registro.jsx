import { View, ScrollView } from "react-native";
import { styles } from "./registro.style.js";
import Header from "../../components/header/header";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/button/button.jsx";


function Registro(props){

    return( 
    <>
        
        <View style={styles.container}>

            <ScrollView style={styles.scrollView}>

                <Header texto="Criar sua conta"/>

                <View style={styles.formGroup}>

                    <View style={styles.form}>
                        <TextBox label="Nome Completo:"/>
                    </View>

                    <View style={styles.form}>
                        <TextBox label="E-mail:"/>
                    </View>

                    <View style={styles.form}>
                        <TextBox label="Escolha uma senha" isPassword={true}/>
                    </View>
                    
                    <View style={styles.form}>
                        <TextBox label="Confirme a senha" isPassword={true}/>
                    </View>


                    <View style={styles.form}>
                        <Button texto="Próximo passo" onPress={()=> props.navigation.navigate("registro2")}/>
                    </View>



                </View>

            </ScrollView>
                    
        </View>

    </>
    )
}

export default Registro;