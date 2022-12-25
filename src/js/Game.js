export default class Game{
  #table = []; 
  constructor(){
    //tableのリセット
    for(let i = 0 ;i < 8; i++){
      this.#table.push([])
      for(let j = 0;j < 8; j++){
        this.#table[i].push(null);
      }
    }
  } 
  //デフォルトの石の配置
  startGame(){
    this.#table[3][3]="Black";
    this.#table[4][4]="Black";
    this.#table[3][4]="White";
    this.#table[4][3]="White";
  }
  //テスト表示用関数
  Test(){
    console.log(this.#table);
  }
  
}