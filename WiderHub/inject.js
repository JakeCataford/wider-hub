
if($(".view-pull-request")[0]) {

	$('.repo-label').hide();
	$('.container').width(window.innerWidth - 40);
	$('.container').css({margin : "0px 0px 0px 25px"});
	$('#js-repo-pjax-container').width(window.innerWidth - 100);
	$('.discussion-timeline').width(window.innerWidth - 215);
}


/*
if($(".view-pull-request")[0]) {
	$('#js-repo-pjax-container').css({
		width : '100%',
    	margin : '10px'
	});

	$('.discussion-timeline').css({
		width : window.innerWidth - 110
	});
}
*/