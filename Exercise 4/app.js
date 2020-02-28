new Vue({
  el: '#exercise',
  data: {
      attachHighlight: false,
      attachRed: false,
      chosenClass: 'yellow',
      progressWidth: 0
  },
  methods: {
    startEffect: function() {
        const v = this;
        setInterval(() => v.attachHighlight = !v.attachHighlight, 500) 
    },
    startProgress: function() {
        const v = this;
        return setInterval(() => v.progressWidth += 5, 500);
    }
  }
});
