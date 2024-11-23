import { COLORS } from "../../constants/theme"

export const styles = {
    container:{
        flex: 1,
    },
    header:{
        marginTop:12,
        width: "50%",
        
    },

    containerCategorias:{
        marginTop:230
    },
    
    titulo:{
        color:COLORS.dark_gray,
        fontSize:35,
        textAlign:"left",
        color:COLORS.laranja,
        fontWeight:"bold",
        paddingLeft:22,
    },
    
    titulo2:{
    textAlign:"center",
    fontSize:20,
    fontWeight:"bold",
},
containerBtn:{
    marginTop:18,
    width: 220,
    gap: 12,
    bottom:0,
    left: "50%", // A posição começa no meio da tela
    transform: [{ translateX: -110 }] // Ajuste para o centro (metade da largura do botão)
    
},
footer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  instagramIcon: {
    width: 10,  // Defina o tamanho do ícone
    height: 10, // Defina o tamanho do ícone
    borderRadius: 5, // Se você quiser deixar o ícone arredondado
  },
  textoInsta:{
    color:"red",
    fontWeight:"bold"
  }


}