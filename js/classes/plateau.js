import Cell from "./cell.js";

export default class Plateau  {
    constructor(){
        this.rows = 6;
        this.columns = 6;
        this.plateau = [];
        this.tab = [];
        this.columnsTab = [];
        this.cell = null;
        this.init();
    }

    init(){
        let cell_id = 0;
        for (var i = 0; i < this.rows; i ++){
            this.columnsTab = [];
            for (var j = 0; j < this.columns; j++){
                this.cell = new Cell(cell_id, j, i, "free");
                this.columnsTab.push(this.cell);
                cell_id += 1;
            }
            this.tab.push(this.columnsTab);
        }
        // console.log(this.tab);
    }

    /**
     * recherche du y - 1 de la cellule 
     * @param {int} cell_id 
     */
    find_current_cell(cell_id){
        //recherche des coordonnées de la cellule en cours : 
        // const cell = null;
        const cell_x = 0;
        const cell_y = 0;
        let current_cell = 0;
        // console.log('tableau :', this.tab);
        for ( let line of this.tab){
            for( let cell of line){
                if (cell.id == cell_id){
                    current_cell = cell;
                    break;
                }
            }

        }
        // console.log('current_cell : ' , current_cell);

    return current_cell;
        // console.log(current_cell);
        // recherche des coordonnées de la cellule du dessous : 
        let down_cell = current_cell.y + 1;
        if(down_cell >= this.tab.length){
            down_cell = this.tab.length;
        } 

        console.log(down_cell);
    
    }
    /**
     * 
     * @param {*} cell 
     */
    find_down_cell(cell){
        let cell_status = "";
        let cell_x = cell.x;
        let cell_y = cell.y + 1;
        if(cell_y == this.tab.length - 1){
            cell_status = "down";
        } else {

        }

        // recherche de la cellule correspondante : 
        for( let line of this.tab){
            for ( let cell of line){
                if( cell.x == cell_x && cell.y == cell_y){
                    cell_status = cell.state;
                    break;
                }
            }
        }

        return cell_status == 'free';
    }
}

