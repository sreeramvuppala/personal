/**
 * @author Sreeram
 */
$().ready(function(){
	if(navigator.userAgent.toLowerCase().indexOf('chrome') > -1){	

	}

	$("div.employment .inline-nav").click(function(){
		var $self = $(this);
		$("div.employment .page").addClass("hidden");
		$("div.employment .page-" + $self.text()).removeClass("hidden");
	});

	$("div.skills .skills-nav").click(function(){
		var $self = $(this);
		$("div.skills .page").addClass("hidden");
		$("div.skills .page-" + $self.text()).removeClass("hidden");
	});
});

