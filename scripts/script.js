// show/hide left sidebar
jQuery(document).ready(function(){

	// Variables
	var objMain = jQuery('#main');

	// Show sidebar
	function showSidebar(){
		objMain.addClass('use-sidebar');
		jQuery.cookie('sidebar-pref2', 'use-sidebar', { expires: 30 });
	}

	// Hide sidebar
	function hideSidebar(){
		objMain.removeClass('use-sidebar');
		jQuery.cookie('sidebar-pref2', null, { expires: 30 });
	}

	// Sidebar separator
	var objSeparator = jQuery('#separator');

	objSeparator.click(function(e){
		e.preventDefault();
		if ( objMain.hasClass('use-sidebar') ){
			hideSidebar();
		}
		else {
			showSidebar();
		}
	}).css('height', objSeparator.parent().outerHeight() + 'px');
	
	if ( jQuery.cookie('sidebar-pref2') == null ){
		objMain.removeClass('use-sidebar');
	}
	
	
	// Accordion menu
	function close_accordion_section() {
		jQuery('.accordion .accordion-section-title').removeClass('active');
		jQuery('.accordion .accordion-section-content').slideUp(300).removeClass('open');
	}
	jQuery('.accordion-section-title').click(function(e) {
		var currentAttrValue = jQuery(this).attr('href');
		if(jQuery(e.target).is('.active')) {
			close_accordion_section();
		}else {
			close_accordion_section();
			jQuery(this).addClass('active');
			jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
		}
		e.preventDefault();
	});
	
	
	// Table tr even
	jQuery('table tr:nth-child(2n)').addClass('even');
	
});