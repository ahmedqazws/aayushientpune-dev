/* Source and licensing information for the line(s) below can be found at http://localhost/aayushientpune/themes/contrib/bootstrap_barrio/js/barrio.js. */
(function(o,l){'use strict';l.behaviors.bootstrap_barrio={attach:function(l,r){var s=o(window).scrollTop();o(window).scroll(function(){if(o(this).scrollTop()>50){o('body').addClass('scrolled')}
else{o('body').removeClass('scrolled')};var l=o(window).scrollTop();if(l>s){o('body').addClass('scrolldown');o('body').removeClass('scrollup')}
else{o('body').addClass('scrollup');o('body').removeClass('scrolldown')};s=l});o('.dropdown-item a.dropdown-toggle').on('click',function(l){o(this).next('ul').toggle();l.stopPropagation();l.preventDefault()})}}})(jQuery,Drupal);
/* Source and licensing information for the above line(s) can be found at http://localhost/aayushientpune/themes/contrib/bootstrap_barrio/js/barrio.js. */;
/* Source and licensing information for the line(s) below can be found at http://localhost/aayushientpune/themes/contrib/bootstrap_barrio/js/affix.js. */
(function(i,o){'use strict';o.behaviors.bootstrap_barrio_affix={attach:function(o,t){var a=function(i,o,t){var a=i.outerHeight(),e=t.offset().top;if(o.scrollTop()>=e){t.height(a);i.addClass('affix')}
else{i.removeClass('affix');t.height('auto')}};i('[data-toggle="affix"]').once().each(function(){var o=i(this),t=i('<div></div>');o.before(t);i(window).on('scroll resize',function(){a(o,i(this),t)});a(o,i(window),t)})}}})(jQuery,Drupal);
/* Source and licensing information for the above line(s) can be found at http://localhost/aayushientpune/themes/contrib/bootstrap_barrio/js/affix.js. */;
