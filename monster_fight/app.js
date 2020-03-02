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
        logAttack: function(actionString, playerPoints, monsterPoints) {
            const playerLogString = `PLAYER ${actionString} FOR ${playerPoints}`;
            const monsterLogString = `MONSTER HITS PLAYER FOR ${monsterPoints}`;
            const attackLog = [playerLogString, monsterLogString];
            this.fightLog.push(attackLog);
        },
        attack: function(attackAmount, specialAttackAmount = attackAmount) {
            const playerAttack = 1 + Math.floor(Math.random() * specialAttackAmount);
            const monsterAttack = 1 + Math.floor(Math.random() * attackAmount);
            this.monsterHealth -= playerAttack; 
            this.playerHealth -= monsterAttack;

            this.logAttack('HITS MONSTER', playerAttack, monsterAttack);
        },
        heal: function() {
            const playerHeal = 1 + Math.floor(Math.random() * 12);
            const monsterAttack = 1 + Math.floor(Math.random() * 9);
            this.playerHealth += playerHeal;
            this.playerHealth -= monsterAttack;
            this.logAttack('HEALS THEMSELF', playerHeal, monsterAttack);
        },
        startGame: function() {
            this.game = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.fightLog = [];
        }
    }
})

