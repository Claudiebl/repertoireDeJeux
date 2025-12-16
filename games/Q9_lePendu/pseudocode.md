# PSEUDO-CODE

DÉBUT

    Charger la liste de mots depuis dico.js
    Choisir un mot au hasard → motSecret

    Initialiser :
        lettresTrouvees = tableau de caractères "_" de la même longueur que motSecret
        erreurs = 0
        maxErreurs = 6 (ou selon le nombre d’images du pendu)

    Afficher lettresTrouvees dans le board
    Afficher l’image du pendu selon erreurs (0.png)

    Pour chaque lettre du clavier (a → z)
        Ajouter un écouteur de clic :
            Quand l'utilisateur clique sur une lettre :
                
                Désactiver le bouton de la lettre pour éviter les clics multiples

                Si la lettre est présente dans motSecret :
                    Pour chaque caractère du mot :
                        Si caractère == lettre cliquée :
                            Mettre à jour lettresTrouvees à cette position
                    Mettre à jour l’affichage du board

                    Si lettresTrouvees ne contient plus "_"
                        Montrer l’overlay victoire
                        Bloquer le clavier
                        FIN

                Sinon (la lettre n’est pas dans motSecret) :
                    erreurs += 1
                    Mettre à jour l’image du pendu → erreurs.png

                    Si erreurs == maxErreurs :
                        Montrer l’overlay défaite
                        Afficher le mot complet
                        Bloquer le clavier
                        FIN

    FIN POUR

FIN
