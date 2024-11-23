import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
        
    container: {
    flex: 1
        
    },
    
    header:{
        marginTop:70,
        width: "50%",
        height:60,
    },
    
    titulo:{
        color:COLORS.dark_gray,
        fontSize:35,
        textAlign:"left",
        color:COLORS.laranja,
        fontWeight:"bold",
        paddingLeft:22,
    },

    containerBtn:{
        width:"100%",
        position:"absolute",
        bottom:0,
        padding: 15,
        alignItems: 'center',
    },
    valores:{
        flexDirection:"row",
        justifiyContent:"space-between",
        marginTop:4,
        marginBottom:4,
        backgroundColor:"red",
        
        
    },
    total:{
        fontSize:20,
        color:COLORS.dark_gray,
        fontWeight:"bold",
        lineHeight:34
        
    },

    valor:{
        fontSize:20,
        color:"COLORS.dark_gray",
        lineHeight:34
    },
    containerResumo:{
        width:"90%",
        marginLeft:25,
        height:120,
        justifyContent:"center",
        backgroundColor:"red",
        
    },

    meio:{
        marginTop:50,
    }

}
