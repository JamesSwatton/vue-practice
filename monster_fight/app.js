new Vue({
    el: '#app',
    data: {
        game: false,
        playerHealth: 100,
        monsterHealth: 100,
        turn: [],
        turnLog: [],
    },
    watch: {
        playerHealth: function() {
            if (this.playerHealth <= 0) {
                if (window.confirm("You Lost: Try again?")) {
                    this.startGame();
                }
            }
        },
        monsterHealth: function() {
            if (this.monsterHealth <= 0) {
                if (window.confirm("You Won: Fight again?")) {
                    this.startGame();
                }
            }
        }
    },
    methods: {
        startGame: function() {
            this.game = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turn = [];
            this.turnLog = [];
        },
        attack: function(damageMin = 3, damageMax = 10) {
            this.turn = [];
            const damage = this.calculateDamage(damageMin, damageMax); 
            this.monsterHealth -= damage;             
            this.monsterAttacks();
            this.turn.push({
                isPlayer: true,
                text: 'PLAYER HITS MONSTER FOR ' + damage
            });
            this.turnLog.push(this.turn);
        },
        specialAttack: function() {
            this.attack(10, 20)
        },
        heal: function() {
            this.turn = [];
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            this.monsterAttacks();
            this.turn.push({
                isPlayer: true,
                text: 'PLAYER HEALS THEMSELF FOR 10'
            });
            this.turnLog.push(this.turn);
        },
        giveUP: function() {
            this.game = false;
        },
        monsterAttacks: function() {
            const damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;
            this.turn.push({
                isPlayer: false,
                text: 'MONSTER HITS PLAYER FOR ' + damage
            })
        },
        calculateDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max + 1), min);
        }
    }
})
