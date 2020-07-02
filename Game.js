class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      voter = new Voter();
      var voterCountRef = await database.ref('voterCount').once("value");
      if(voterCountRef.exists()){
        voterCount = voterCountRef.val();
        Voter.getCount();
      }
      form = new Form()
      form.display();
    }
  }


    }
