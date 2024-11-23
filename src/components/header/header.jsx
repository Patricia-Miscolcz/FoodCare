import { Text, View } from "react-native";
import { styles } from "./header.style.js";

function Header(props) {
    return(
        <View style={styles.header}>
            <Text style={styles.titulo}>FoodCare</Text>
            <Text style={styles.subtitulo}>{props.texto}</Text>
        </View>
    )
}

export default Header;


