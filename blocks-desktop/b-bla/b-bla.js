(function() {

BEM.DOM.decl('b-bla', {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.bindTo('click', function() {
                    var bem321 = $('<div class="bem-321"><div class="b-bla i-bem" onclick="return {\'b-bla\':{}}">prj2</div></div>').appendTo('body');
                    $('head').append('<link rel="stylesheet" href="http://localhost:8321/pages-desktop/index/_index.css"/>');
                    $.getScript('http://localhost:8321/pages-desktop/index/_index.js', function() {
                        //console.log(_BEM['321'].DOM.doc.find('.b-bla'));
                        console.log('before init');
                        BEM.CONFLICTS_NO('321').DOM.init(bem321);
                    });
                    this.unbindFrom('click');
                });
            }
        }
    }
});

})();
