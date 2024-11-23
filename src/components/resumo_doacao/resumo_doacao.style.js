import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
    containerDescricao: {
        flex:1,
    },

    titulo: {
        fontSize:18,
        fontWeight:"bold",
        marginTop:10,
        marginLeft:20
    },
    titulo2: {
        fontSize:18,
        fontWeight:"bold",
        marginTop:10,
        marginLeft:1
    },
    tituloRed: {
        fontWeight:"bold",
        color:"red"
    },

    descricao: {
        fontSize:18,
        marginLeft:22,
        marginTop:20,
        color:COLORS.dark_gray,

    },
    textos:{
        width:"100%",
        flexDirection:"row"
    },
    msg: {
        fontSize: 18,
        textAlign: "justify",
        padding: 10,  
        color: COLORS.dark_gray,
        marginBottom: 8,
        marginLeft:12
    },
    containerLocais:{
        marginVertical: 10,
    },
    locais:{
        marginLeft:22,
    },

    
};
