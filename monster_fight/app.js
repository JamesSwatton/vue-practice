new Vue({
    el: '#app',
    data: {
        startGame: false,
        playerHealth: 100,
        monsterHealth: 100,
    },
    methods: {
        attack: function(attackAmount, specialAttackAmount = attackAmount) {
            console.log(specialAttackAmount)
            this.monsterHealth -= 1 + Math.floor(Math.random() * specialAttackAmount);
            this.playerHealth -= 1 + Math.floor(Math.random() * attackAmount);
        },
        heal: function() {
            this.playerHealth += 1 + Math.floor(Math.random() * 12);
            this.playerHealth -= 1 + Math.floor(Math.random() * 9);
        },
        giveUp: function() {
            this.startGame = !this.startGame;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        }
    }
})

