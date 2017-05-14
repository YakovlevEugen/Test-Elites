$(document).ready(function() {
	$('ul.tabs-caption').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tabs').find('div.tab-content').removeClass('active').eq($(this).index()).addClass('active');
	});
});