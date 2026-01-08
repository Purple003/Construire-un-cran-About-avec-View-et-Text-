# Lab 2 : Construire un écran “About” avec View et Text

Ce projet est un exercice pratique pour apprendre les bases de React Native, notamment l'utilisation des composants `View`, `Text`, et le système de mise en page Flexbox.

## Présentation
- **Présenté par :*Arroche Aya* 
- **Encadré par :*Mohamed Lachgar* 

## Aperçu du projet

### Version Mobile (Expo Go)
![WhatsApp Image 2026-01-08 at 19 49 54](https://github.com/user-attachments/assets/fd392f8d-9dd7-4d5f-80b9-33e3131fb561)

*Scannez le QR code avec l'application Expo Go pour voir ce résultat sur votre téléphone.*

### Version Web (PC)
<img width="1919" height="938" alt="image" src="https://github.com/user-attachments/assets/de29e4a5-2f29-49c5-8eb1-dc49f12df4c2" />

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
