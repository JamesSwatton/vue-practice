new Vue({
    el: '#exercise',
    data: {
        effectClasses: {
            highlight: true,
            shrink: false
        },
        myStyle: {
            backgroundColor: 'red',
            width: '200px',
            height: '100px',
            border: '1px solid black'
        },
        attachRed: false,
        chosenClass: 'yellow',
        progressWidth: 0,
        inputWidth: 50
    },
    methods: {
        startEffect: function() {
            const v = this;
            setInterval(() => {
                v.effectClasses.highlight = !v.effectClasses.highlight;
                v.effectClasses.shrink = !v.effectClasses.shrink;
            },500)
        },
        startProgress: function() {
            const v = this;
            return setInterval(() => v.progressWidth += 5, 500);
        }
    }
});
