export default class Player{
  #myColorIsBlack = true;
  #canPutPlaces = [];
  #count = 2;
  constructor(brackOrWhite){
    this.init(brackOrWhite);
  };

  refleshCanPutPlaces(){
    const array = [];
    /*for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
          
        }
    }*/
    array.push([0,0]);
    array.push([0,1]);
    this.#canPutPlaces = array;
  }

  countMyColor(table){
    let count = 0;
    const color = this.#myColorIsBlack ? "Black": "White";

    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
          if(table[i][j] === color)count++;
        }
    }
    return count;
  }

  init(brackOrWhite){
    const newtable = [[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],[null,null,null,"Black","White",null,null,null],[null,null,null,"White","Black",null,null,null],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null]];

    this.#myColorIsBlack =  brackOrWhite === "Black"? true : false;
    this.refleshCanPutPlaces(newtable);
    this.#count = this.countMyColor(newtable);
  }

  get myColorIsBlack(){
    return this.#myColorIsBlack;
  }
  get canPutPlaces(){
    return this.#canPutPlaces;
  }
  get count(){
    return this.#count;
  }
}