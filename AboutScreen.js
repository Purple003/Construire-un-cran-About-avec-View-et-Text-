import * as React from 'react';
// Import des composants de base de React Native
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    // Conteneur principal de l'écran
    <View style={styles.container}>
      {/* Titre de l'application */}
      <Text style={styles.title}>
        About this app
      </Text>

      {/* Sous-titre descriptif */}
      <Text style={styles.subtitle}>
        A simple React Native screen built with core components.
      </Text>

      {/* Paragraphe limité à 4 lignes */}
      <Text
        style={styles.paragraph}
        numberOfLines={4}
      >
        This application is a training project used to practice layout,
        typography and component structure in React Native.
        The goal is to understand how View and Text work together to
        build clear, readable and reusable user interfaces.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Occupe tout l'espace disponible
    paddingHorizontal: 24,
    paddingVertical: 40,
    justifyContent: 'center' // Centre le contenu verticalement
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#F4CE14' // Couleur jaune Little Lemon
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 16,
    color: '#FFFFFF'
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 22,
    color: '#EAEAEA'
  }
});
