export default class Player{
  #myColorIsBlack = true;
  #canPutPlaces = [];
  #count = 2;
  constructor(brackOrWhite){
    this.init(brackOrWhite);
  };

  refleshCanPutPlaces(){
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){

        }
    }
  }
  countMyColor(){
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            
        }
    }
  }
  init(brackOrWhite){
    brackOrWhite === "Brack"?this.#myColorIsBlack = true:this.#myColorIsBlack = false;
    this.#canPutPlaces = this.refleshCanPutPlaces();
    this.#count = this.countMyColor();
  }
}