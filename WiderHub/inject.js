var widerhub = {
	init : function() {	
		$('.repo-label').hide();
		$('.container').width(window.innerWidth - 40);
		$('.container').css({margin : "0px 0px 0px 25px"});
		$('#js-repo-pjax-container').width(window.innerWidth - 100);
		$('.discussion-timeline').width(window.innerWidth - $('.discussion-sidebar').width() - 215);
	}
}


if($(".view-pull-request")[0]) {
	$(window).resize(widerhub.init);
	widerhub.init();
	
}