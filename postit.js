class post_it {

    id;
    hauteur;
    largeur;
    couleur;
    message;
    x;
    y;

    constructor(id, hauteur, largeur, couleur, message, x, y) {

        this.id = id;
        this.hauteur = hauteur;
        this.largeur = largeur;
        this.couleur = couleur;
        this.x = x;
        this.y = y;
        this.message = message;
    }

    affichePostIt() {

        //if (post_it === NULL) {
        //on attrape le contener avec getElement
        let contener = document.getElementById("contener")

        //je créer un élement div que je stock dans ma variable.
        let post_it = document.getElementById(this.id)
        if (post_it === null) {
            post_it = document.createElement('div')
            post_it.id = (this.id);
            // on ajoute l'element div dans la classe
            contener.appendChild(post_it);
        }



        post_it.style.position = "fixed";
        post_it.style.width = (this.largeur) + ("px");
        post_it.style.height = (this.hauteur) + ("px");
        post_it.style.backgroundColor = (this.couleur);
        post_it.style.top = (this.y) + ("px");
        post_it.style.left = (this.x) + ("px");
        post_it.innerHTML = this.message





        //}
    }

    deplacePostIt(x, y) {
        this.x = x;
        this.y = y;
    }

    dimensionPostIt(largeur, hauteur) {
        this.largeur = largeur;
        this.hauteur = hauteur;
    }

    ecriturePostIt(message) {
        this.message = message;
    }

}



