(function($) {
    $(document).ready(function() {

        var gui = require('nw.gui'); 
        var win = gui.Window.get();

        $("#close").click(function() {
            win.close();
        });
    });
})(jQuery);
