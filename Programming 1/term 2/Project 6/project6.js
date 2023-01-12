let player = {
    hp : 20,
    str : 10,
    dex : 10,
    cons : 10,
    int : 15,
    wis : 5,
    char : 10,
    hitSword: function (playerDie, targethp) {
        targethp = targethp - (3 + playerDie)
    } ,
    inventory : [health, greaterHealth, holyWaterFlask, wifesSword]
}

playerDie = function () {
    Math.random() * (12 - 1) + 1
}

let beefyGrunt = {
    targethp : 50,
    str : 20,
    dex : 10,
    cons : 10,
    int : 13,
    wis : 5,
    char : 15,
    inventory : [greaterHealth, hotDogWaterAxe]
}


