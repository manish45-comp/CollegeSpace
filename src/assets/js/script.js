$(document).ready(function() {
    $('.nav li a').click(function(e) {
        $('.nav li a').removeClass('active');
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
    });
});
