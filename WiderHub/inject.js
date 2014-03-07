var widerhub = {
	init : function() {	
		$('.repo-label').hide();
		$('.container').width(window.innerWidth - 40);
		$('.container').css({margin : "0px 0px 0px 25px"});
		$('#js-repo-pjax-container').width(window.innerWidth - 100);
		$('.discussion-timeline').width(window.innerWidth - $('.discussion-sidebar').width() - 215);
		$('.css-truncate-target').removeClass('css-truncate-target');
		$('body').after("<input id='github-asset-button' style='position: fixed;padding: 5px;margin: 5px;' value='Hide Assets'>");
	}
}


if($(".view-pull-request")[0]) {
	$(window).resize(widerhub.init);
	widerhub.init();
	
}

$('#github-asset-button').on('click', function(){
	//Get All Meta Elements in JS Changes, then grab and compare the data path.
	//Hide if necessary.
	$( ".js-details-container .meta" ).each(function( ) {
	  	var dataPath = $(this).attr('data-path');
	    if (dataPath.indexOf("css") != -1 || dataPath.indexOf("js") != -1) {
	        $(this).parent().toggle();
	    }
	});	
})
