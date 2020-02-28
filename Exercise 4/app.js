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
        progressBar: {
            backgroundColor: 'cyan',
            height: '50px',
            width: '0px'
        },
        attachRed: false,
        chosenClass: 'yellow',
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
            let width = 0;
            setInterval(() => {
                width += 5;
                v.progressBar.width = width + 'px';
            },250)
        }
    }
});
