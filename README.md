# Quiz Time

**Quiz Time** est une **application web interactive** permettant de créer et de jouer à des **quiz chronométrés** avec score, corrections et interface animée.  
L’utilisateur peut saisir son **nom**, répondre aux questions, voir son **score en temps réel** et consulter les **corrections** ainsi que suivre son progres a travers son **High score**.

## **Technologies utilisées**
- **HTML** : Structure du contenu et des questions  
- **CSS** : Style, animations et mise en page responsive  
- **JavaScript (ES6)** : Gestion du **DOM**, logique du quiz, **timer**, validation des réponses  
- **Git & GitHub** : Gestion de versions et suivi du projet  
- **GitHub Pages** : Hébergement du rendu final en ligne  

## **Fonctionnalités principales**
- **Quiz interactif** avec QCM chronométré  
- **Score dynamique** mis à jour en temps réel et **Stockage local** du meilleur score
- **Feedback immédiat** avec son et couleur indiquant si la réponse est correcte ou incorrecte    
- Interface **responsive et animée** pour une meilleure expérience utilisateur  
- Possibilité de **rejouer le quiz** plusieurs fois avec **des questions aleatoirement choisis**

## **Lien vers la page GitHub Pages (rendu final)**
**Lien :**  https://eleuchanas.github.io/Anas_Eleuch_QuizTime/


## **Nouveautés explorées**
- **Gestion dynamique** du DOM pour afficher les questions et les réponses
- Interaction avec **le localStorage** pour sauvegarder le meilleur score
- Intégration de **sons et feedback** visuels pour améliorer **l’expérience utilisateur**\
- L'utilisation des fonctions async comme **setTimeout**, **setInterval** et **Promises** pour synchroniser les actions du quiz

## **Difficultés rencontrées**
- Synchroniser **le timer** avec les animations et les sons
- Comprendre certaines **fonctionnalités avancées** de JavaScript comme **les promises** et **le DOM dynamique**
- Empêcher l’utilisateur de **cliquer plusieurs fois ou plusieurs boutons** sur les réponses pour une question affichee (désactivation des boutons)

## **Solutions apportées**
- Recherche et lecture de **la documentation ainsi que des videos Youtube** sur setTimeout, promises, DOM manipulation
- Tests **étape par étape** pour vérifier que les boutons se désactivent correctement
- Simplification de la logique du quiz pour que chaque fonction ait **une seule responsabilité**
