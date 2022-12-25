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
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
          let color = "";
          this.#myColorIsBlack === true? color = "Black": color = "White";
          if(table[i][j] === color)count++;
        }
    }
    this.#count = count;
  }
  init(brackOrWhite){
    brackOrWhite === "Brack"?this.#myColorIsBlack = true:this.#myColorIsBlack = false;
    this.#canPutPlaces = this.refleshCanPutPlaces();
    this.#count = this.countMyColor();
  }
}