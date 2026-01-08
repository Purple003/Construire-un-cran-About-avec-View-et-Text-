import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Composant de l'en-tête (Header)
 */
export default function AppHeader() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>My First React Native App</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        backgroundColor: '#3E4A59' // Couleur de fond sombre
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF', // Texte blanc
        textAlign: 'center'
    }
});
