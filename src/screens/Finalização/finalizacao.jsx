import { Text, View, Platform, ScrollView } from "react-native";
import { styles } from "./finalizacao.style";
import LottieView from 'lottie-react-native';
import Pontos_de_Coleta from "../../components/pontos_coleta/pontos_coleta";
import { pontos_coleta } from "../../constants/dados";


function Agradecimentos (){

    return(

    <View style={styles.container}>


        <View style={styles.header}>
            <Text style={styles.titulo}>FoodCare</Text>
        </View>
        <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>


        <Text style={styles.texto}>Obrigado por sua generosidade!</Text>

        <Text style={styles.msg}>Sua doação foi registrada com sucesso!
            A nossa equipe entrará em contato em breve para confirmar os 
            detalhes e agendar a retirada no local que você informou.
            Sua contribuição fará uma grande diferença para aqueles que mais
            precisam. Agradecemos imensamente por fazer parte dessa causa!
            Se precisar de algo, nossa equipe está à disposição.
            Fique tranquilo, vamos cuidar de tudo para garantir que sua doação
            chegue ao destino correto.
        </Text>

        <Text style={styles.texto}>Juntos, podemos fazer o bem!</Text>

        <Pontos_de_Coleta dados={pontos_coleta}/>

        <View style={styles.containerAnimation}>
        {
            Platform.OS != "web" &&
            <LottieView
            key={Math.random()} 
            autoPlay = {true}
            style={styles.animation}
            source={require('../../animation/thanks.json')}
            loop = {true}
            />
            
        }
        </View>

        </ScrollView>

    </View>

    )
}

export default Agradecimentos;