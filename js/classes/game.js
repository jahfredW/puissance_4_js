export default class Game{
    static joueur_1 = 0;
    static joueur_2 = 0;
    static winner_flag = 0;


    /**
     * parcours du tableau par groupe de lignes de 4 cellules horizontal
     * détermine si il existe 4 cellules alignées. 
     * @param {array} tab 
     */
    static checkLine(tab){

        for (let line = 0; line < tab.length; line ++){
            for ( let cell = 0; cell <= 2; cell ++){
                let game_status = Game.checkJoueur1Line(tab[line].slice(cell, cell +  4))
                if ( !game_status){
                    this.check_winner();
                    break;
                }
                console.log(tab[line][cell].state);
        
    }
      }
      
    }

    static checkJoueur1Line(tab){
        Game.joueur_1 = 0;
        Game.joueur_2 = 0;
        for (let index = 0; index < tab.length; index ++){
            if(tab[index].state == 'free' ){
                return true
            } 
            if( tab[index].state == "joueur_1"){
                Game.joueur_1 += 1
            } 
            if( tab[index].state == 'joueur_2'){
                Game.joueur_2 += 1
            
        }
        
        
    } return false;
    }

    static check_winner(){
        if( Game.joueur_1 == 4){
            console.log("joueur_1 gagne")
            Game.winner_flag = 1;
            
        } else if( Game.joueur_2 == 4 ){
            console.log("joueur_2 gagne")
            Game.winner_flag = 2;
        }
    }
}