export default class Game{
  #table = []; 
  #nextTurnIsBlack = true;

  constructor(){
    //tableのリセット
    for(let i = 0 ;i < 8; i++){
      this.#table.push([])
      for(let j = 0;j < 8; j++){
        this.#table[i].push(null);
      }
    }
  } 

  //デフォルトで石を配置
  startGame(){
    this.#table[3][3]="Black";
    this.#table[4][4]="Black";
    this.#table[3][4]="White";
    this.#table[4][3]="White";
  }

  //プレイヤーの変更
  togglePlayer(){
    if(this.#nextTurnIsBlack==false){
      this.#nextTurnIsBlack=true;
    }else{
      this.#nextTurnIsBlack=false;
    }
  }

  //石を置く
  set setStone(pos){
    if(Player.myColorIsBlack){
      this.#table[pos.x][pos.y]="Black";
    }else{
      this.#table[pos.x][pos.y]="White";
    }
  }
  
  //テスト表示用関数
  Test(){
    console.log(this.#table);
  }
}