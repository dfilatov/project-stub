(function() {

BEM.DOM.decl('b-bla', {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.bindTo('click', function() {
                    console.log('click on 321');
                });
            }
        }
    }
}, {
    live : function() {
        this.liveBindTo('click', function() {
            console.log('live click on 321');
        });
        return false;
    }
});

})();