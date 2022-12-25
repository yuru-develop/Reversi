export default class Player{
  #myColorIsBlack = true;
  #canPutPlaces = [];
  #count = 2;
  constructor(brackOrWhite){
    this.init(brackOrWhite);
  };

  refleshCanPutPlaces(table){
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
          
        }
    }
  }
  countMyColor(table){
    let count = 0;
    const color = this.#myColorIsBlack ? "Black": "White";

    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
          if(table[i][j] === color)count++;
        }
    }
    this.#count = count;
  }
  init(brackOrWhite){
    this.#myColorIsBlack =  brackOrWhite === "Brack"? true : false;
    this.#canPutPlaces = this.refleshCanPutPlaces();
    this.#count = this.countMyColor();
  }
}