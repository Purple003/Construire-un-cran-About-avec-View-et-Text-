import * as React from 'react';
import { View, StyleSheet } from 'react-native';

// Import de nos composants personnalisés
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import AboutScreen from './AboutScreen';

export default function App() {
  return (
    // Vue racine avec flex: 1 pour occuper tout l'écran
    <View style={styles.container}>
      {/* En-tête fixe en haut */}
      <AppHeader />

      {/* Zone centrale flexible qui contient l'écran About */}
      <View style={styles.content}>
        <AboutScreen />
      </View>

      {/* Pied de page fixe en bas */}
      <AppFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57' // Couleur verte Little Lemon
  },
  content: {
    flex: 1 // Permet à cette zone de remplir l'espace entre le header et le footer
  }
});
