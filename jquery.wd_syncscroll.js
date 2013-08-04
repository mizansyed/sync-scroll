/* jQuery SyncScroll
 *
 *
 * Copyright 2013, Mizan Syed, With Digital
 * Read licence.txt for info
 */


;(function($) {
	$.fn.wd_syncscroll = function(options) {
		var defaults = {
			overflow: 'auto',
			height: false,
			width: false,
			group: 'wd'
		};

		var settings = $.extend(true, {}, defaults, options);

		var stylise = function(el) {
			el.addClass(settings.group);
			el.css('overflow', 'auto');
			if (settings.height !== false) {
				el.css('max-height', settings.height);
				el.css('height', 'auto !important');
				el.css('height', settings.height);
			}
			if (settings.width !== false)
				el.css('width', settings.width);
		};

		return this.each(function() {
			var group = '.' + settings.group;
			var obj = $(this);
			stylise(obj);
			obj.scroll(function() {
				$(group).scrollTop(obj.scrollTop());
				$(group).scrollLeft(obj.scrollLeft());
			});

		});

	}
})(jQuery);