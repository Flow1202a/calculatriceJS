    function addition(nombreA,nombreB){
        return nombreA + nombreB;
    }
    function multiplication(nombreA,nombreB){
        return nombreA * nombreB;
    }
    function soustraction(nombreA,nombreB){
        return nombreA - nombreB;
    }
    function division(nombreA,nombreB){
        if (nombreB == 0){
            throw new Error("impossible de diviser par 0")
        }
        return nombreA / nombreB;
    }


    do {
        var choix = Number(prompt("\nQue souhaitez vous faire .\n\n 1 - addition\n 2 - multiplication\n 3 - soustraction \n 4 - division\n"));
    }while(choix != 1 && choix != 2 && choix != 3 && choix != 4)

    do {
        var premierNombre = Number(prompt("entrez un premier nombre"));
        var deuxiemeNombre = Number(prompt("entrez un deuxieme nombre"));
    }while (isNaN(premierNombre) || isNaN(deuxiemeNombre))

    try {
        switch (choix){
            case 1:
                var resultat = addition(premierNombre, deuxiemeNombre);
                break;
            case 2:
                var resultat = multiplication(premierNombre, deuxiemeNombre);
                break;
            case 3:
                var resultat = soustraction(premierNombre, deuxiemeNombre);
                break;
            case 4:
                var resultat = division(premierNombre, deuxiemeNombre);
                break;
            default:
                throw new Error("une erreur est survenue");

        }

        alert("voici le résulat : "+ resultat);
    }
    catch (error){
        alert(error);
    }
