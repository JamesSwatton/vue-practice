new Vue({
    el: '#app',
    data: {
        game: false,
        playerHealth: 100,
        monsterHealth: 100,
        fightLog: [],
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
            this.fightLog = [];
        },
        logAttack: function(actionString, playerPoints, monsterPoints) {
            const playerLogString = `PLAYER ${actionString} FOR ${playerPoints}`;
            const monsterLogString = `MONSTER HITS PLAYER FOR ${monsterPoints}`;
            const attackLog = [playerLogString, monsterLogString];
            this.fightLog.push(attackLog);
        },
        attack: function(damageMin = 3, damageMax = 10) {
            this.monsterHealth -= this.calculateDamage(damageMin, damageMax); 
            this.monsterAttacks();
            this.logAttack('HITS MONSTER', playerAttack, monsterAttack);
        },
        specialAttack: function() {
            this.attack(10, 20)
        },
        heal: function() {
            const playerHeal = 1 + Math.floor(Math.random() * 12);
            this.monsterAttacks();
            this.playerHealth += playerHeal;
            this.playerHealth -= monsterAttack;
            this.logAttack('HEALS THEMSELF', playerHeal, monsterAttack);
        },
        monsterAttacks: function() {
            this.playerHealth -= this.calculateDamage(5, 12);
        },
        calculateDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max + 1), min);
        }
    }
})

