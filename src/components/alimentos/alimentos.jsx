import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from 'react';
import { styles } from "../alimentos/alimentos.style";

function Alimentos(props) {
    const [quantidades, setQuantidades] = useState({}); // Armazena as quantidades escolhidas

    // Função para incrementar a quantidade
    const incrementar = (id) => {
        setQuantidades(prevQuantidades => ({
            ...prevQuantidades,
            [id]: (prevQuantidades[id] || 0) + 1, // Incrementa o valor atual ou começa de 1
        }));
    };

    // Função para decrementar a quantidade
    const decrementar = (id) => {
        setQuantidades(prevQuantidades => ({
            ...prevQuantidades,
            [id]: Math.max(0, (prevQuantidades[id] || 0) - 1), // Decrementa o valor atual, mas não permite valores negativos
        }));
    };

    // Função para renderizar o resumo
    const renderResumo = () => {
        const resumo = Object.entries(quantidades)
            .filter(([key, value]) => value > 0) // Filtra itens com quantidade > 0
            .map(([key, value]) => {
                const alimento = props.dados.find(item => item.id === parseInt(key));
                return (
                    <Text key={key} style={styles.resumoTexto}>
                        {alimento.descricao} - {value} {alimento.qtd}
                    </Text>
                );
            });

        return (
            <View style={styles.resumoContainer}>
                <Text style={styles.resumoTitulo}>Resumo da Doação</Text>
                {resumo.length > 0 ? resumo : <Text style={styles.resumoTexto}>Nenhum item selecionado.</Text>}
            </View>
        );
    };

    return (
        <View style={styles.containerDescricao}>
            <Text style={styles.titulo}>Como você poderá contribuir hoje? Vamos escolher...</Text>

            <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>

                {props.dados.map((alimento, index) => (
                    <View key={index} style={styles.itens}>
                        <View style={styles.item}>
                            <Text style={styles.nome}>
                                {alimento.descricao} - {alimento.qtd}
                            </Text>

                            <View style={styles.contadorContainer}>
                                <TouchableOpacity
                                    style={styles.botaoContador}
                                    onPress={() => decrementar(alimento.id)}
                                >
                                    <Text style={styles.botaoTexto}>-</Text>
                                </TouchableOpacity>

                                <Text style={styles.quantidade}>
                                    {quantidades[alimento.id] || 0} {/* Exibe a quantidade atual */}
                                </Text>

                                <TouchableOpacity
                                    style={styles.botaoContador}
                                    onPress={() => incrementar(alimento.id)}
                                >
                                    <Text style={styles.botaoTexto}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>

        </View>
    );
}

export default Alimentos;