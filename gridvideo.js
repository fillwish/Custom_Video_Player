$(document).ready(function () {
    $(".openpop").click(function (e) {
        e.preventDefault();
        $("iframe").attr("src", $(this).attr('href'));
    });
    var classHighlight = 'highlight-vid';
		var $thumbs = $('.gridvideo').click(function(e) {
    e.preventDefault();
    $thumbs.removeClass(classHighlight);
    $(this).addClass(classHighlight);
		});
});
