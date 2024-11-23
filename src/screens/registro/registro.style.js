import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container:{
        flex: 1,
        paddingLeft:40,
        paddingRight:40,
        justifyContent: "center",
        alignItems:"center",
        marginTop:50
    },
    form:{
        width:"100%",
        marginBottom:15,
        marginTop:10
    },
    scrollView:{
        width:"100%"
    },
    formGroup:{
        width:"100%",
        marginTop:25,
        marginBottom:40
    },
    footer:{
        width:"100%",
        backgroundColor:COLORS.white,
        position:"absolute",
        bottom:0,
        padding:20,
        height:70
    },
    footerText:{
        textAlign:"center",
        color:COLORS.dark_gray,
        fontSize:FONT_SIZE.md
    }
}