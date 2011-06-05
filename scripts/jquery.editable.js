// my first jquery plugin :-) -------------------------- SAnandNarayan (anand@sanandnarayan.com) . Creative Commons or watever

(function($){
 
    $.fn.extend({        
        editable: function(options) {
            
            var timer ;

            var defaults = {
                to_wait : 1000 ,
                update_value : function(e) {
                    console.log(e);
                }
            }
                 
            var options =  $.extend(defaults, options);

            return this.each(function() {
                var o = options;
                $(this).addClass('jq-editable');
                if (this.type == "checkbox") {
                    $(this).change(function(){
			var a = $(this);                        
			o.update_value(a);
                    });
                } else {
                    $(this).keyup(function(e){
                        var a= $(this);
                        if (!timer) {
                            timer = setTimeout(function(){o.update_value(a)},o.to_wait);
                        }
                    });
                    $(this).keydown(function(e){
                        if (timer && e.keyCode !=9) {
                            clearTimeout(timer);
                            timer = null;
                        }
                    });
                }
            });
        }
    });
})(jQuery);

