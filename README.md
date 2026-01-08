# Lab 2 : Construire un écran “About” avec View et Text

Ce projet est un exercice pratique pour apprendre les bases de React Native, notamment l'utilisation des composants `View`, `Text`, et le système de mise en page Flexbox.

## Présentation
- **Présenté par :** 
- **Encadré par :** 

## Aperçu du projet

### Version Mobile (Expo Go)
![Screenshot Mobile](https://via.placeholder.com/300x600?text=App+on+Mobile)
*Scannez le QR code avec l'application Expo Go pour voir ce résultat sur votre téléphone.*

### Version Web (PC)
![Screenshot Web](https://via.placeholder.com/800x450?text=App+on+Web)
*Appuyez sur 'w' dans le terminal pour voir ce résultat dans votre navigateur.*

## Structure du projet

- `App.js` : Point d'entrée de l'application. Assemble le Header, le Footer et l'écran About.
- `AboutScreen.js` : L'écran principal contenant le titre, le sous-titre et la description.
- `AppHeader.js` : Composant d'en-tête générique.
- `AppFooter.js` : Composant de pied de page générique.

## Comment lancer le projet

1. Installez les dépendances :
   ```bash
   npm install
   ```

2. Lancez le serveur Expo :
   ```bash
   npm start
   ```

3. Choisissez votre plateforme :
   - Appuyez sur **`w`** pour le Web (sur votre PC).
   - Scannez le QR code avec **Expo Go** (Android/iOS).
   - Si le QR code ne fonctionne pas en local, utilisez le mode tunnel :
     ```bash
     npx expo start --tunnel
     ```

## Notions apprises
- Structure de composants fonctionnels.
- Utilisation de `StyleSheet` pour le design.
- Gestion de l'espace avec `flex: 1`.
- Limitation du nombre de lignes de texte avec `numberOfLines`.
