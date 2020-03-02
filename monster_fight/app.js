new Vue({
    el: '#app',
    data: {
        startGame: false,
        playerHealth: 100,
        monsterHealth: 100,
    },
    methods: {
        attack: function() {
            this.monsterHealth -= 1 + Math.floor(Math.random() * 9);
            this.playerHealth -= 1 + Math.floor(Math.random() * 9);
        },
        specialAttack: function() {
            this.monsterHealth -= 5 + Math.floor(Math.random() * 9);
            this.playerHealth -= 1 + Math.floor(Math.random() * 9);
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

