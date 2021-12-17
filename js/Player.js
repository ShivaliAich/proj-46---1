class Player{
    constructor (){
        this.name = null;
        this.house = "";
        this.score = 0;
        this.end = null;
        this.index = null;
    }
    readPlayerCount(){
      database.ref("playerCount").on('value',(data)=>{playerCount = data.val()});
    }
    updatePlayerCount(count){
        console.log("hp1");
        console.log(count);
        database.ref("/").update({playerCount: count});

    }
    updatePlayerInfo(){
        database.ref("players/player"+ this.index).set
        ({name : this.name,
        house : this.house,
        score : this.score});
    }
    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }
}