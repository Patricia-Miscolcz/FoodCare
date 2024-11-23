import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
    containerDescricao: {
        marginTop: 10,
        height:450,
    },

    titulo: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 15
    },

    itens: {
        marginLeft: 10,
        width: "90%",
        marginTop:18
    },

    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 1,
        padding: 1,
        marginTop:2,
    },

    nome: {
        fontSize: 16,
        fontWeight: "bold",
        color: COLORS.dark_gray,
    },

    contadorContainer: {
        flexDirection: "row", // Coloca os botões + e - na mesma linha
        alignItems: "center", // Alinha os itens no centro verticalmente
    },

    botaoContador: {
        width: 30,
        height: 30,
        backgroundColor: COLORS.laranja,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
        borderRadius: 5,
    },

    botaoTexto: {
        color: "white",
        fontSize: 18,
    },

    quantidade: {
        fontSize: 16,
        fontWeight: "bold",
        color: COLORS.dark_gray,
    },
    
};
