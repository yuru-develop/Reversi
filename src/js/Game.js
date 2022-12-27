export default class Game{
  #table = []; 
  constructor(){
    for(let i = 0 ;i < 8; i++){
      this.#table.push([])
      for(let j = 0;j < 8; j++){
        this.#table[i].push(null);
      }
    }
  } 
  Test(){
    console.log(this.#table);
  }
}