// importation de la classe plateau
import Plateau from "./classes/plateau.js";
import Game from "./classes/game.js";

// instanciation d'un nouveau plateau de jeu
let plateau_classe = new Plateau();



//définition du plateau
const plateau = document.querySelector('.plateau');

// récupération du block de commentaire 
const comment_block = document.querySelector('.comment');

// variable du player turn 
let player_turn = 'joueur_1';


let comment_div = document.createElement('p');
comment_div.innerText = player_turn;
comment_block.appendChild(comment_div);

// construction du plateau de jeu 
for ( let index = 0; index < 36; index ++ ) {
    let cel = document.createElement('div');
    cel.classList.add(`plateau_cell`);
    cel.id = index;
    plateau.appendChild(cel);
}

document.addEventListener('click', (event) => {
    // flag pour déterminer la fin de partie
    if(Game.winner_flag == 0){
        // récupération des class et id des cells ( target)
        let cell_class = event.target.classList.value;
        let cell_id = event.target.id;

        // récupération de l'objet Cell à partir de l'id html
        let current_cell = plateau_classe.find_current_cell(parseInt(cell_id));
        // gestion du player turn
        if ( cell_class === 'plateau_cell' && current_cell.state == 'free' && !plateau_classe.find_down_cell(current_cell) ) {
            // mise à jour des couleurs de cellules en fonction 
            // du type de joueur. 
            switch (player_turn){
                case 'joueur_1':
                    event.target.style.backgroundColor = 'yellow';
                    current_cell.state = 'joueur_1';
                    break;
                case 'joueur_2':
                    event.target.style.backgroundColor = 'red';
                    current_cell.state = 'joueur_2';
                    break;
            }
        
            // maj du player_turne
            player_turn = player_turn == 'joueur_1' ? 'joueur_2' : 'joueur_1';
            comment_div.innerText = player_turn;
            // console.log(player_turn);
            // console.log(current_cell);
            
            
        } else {
            comment_div.innerText = 'action interdite';
        }

    // code métier d'analyse du tableau
    Game.checkLine(plateau_classe.tab);

    // console.log(event.target.classList.value);
    } else {
        console.log('fin de partie');
    }
    

})