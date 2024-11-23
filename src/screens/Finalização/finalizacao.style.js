import { COLORS } from "../../constants/theme";

export const styles = {
  container: {
    flex: 1,
    marginTop:18,
  },
  texto: {
    fontSize: 20,
    marginTop: 10,  
    marginLeft: 20,
    padding: 2,
    color: COLORS.laranja,
    fontWeight: "bold",
    marginBottom: 8, 
  },
  msg: {
    marginLeft: 12,
    fontSize: 18,
    textAlign: "justify",
    padding: 10,  
    color: COLORS.dark_gray,
    marginBottom: 8, 
  },
  titulo:{
    color:COLORS.dark_gray,
    fontSize:35,
    textAlign:"left",
    color:COLORS.laranja,
    fontWeight:"bold",
    paddingLeft:22,
},
animation:{
  width:250,
  height:250,
  alignItems:"center",
},
containerAnimation:{
  alignItems:"center"
}
};
