$(document).ready(function(){
    $('#ab').click(function() {
        $('#aboutMe').show().addClass('active');
        $('#projects, #resume, #contact').hide();
        $('#ab').addClass('active');
        $('#pr, #re, #co').removeClass('active');
    });
    $('#pr').click(function() {
        $('#projects').show();
        $('#aboutMe, #resume, #contact').hide();
        $('#pr').addClass('active');
        $('#ab, #re, #co').removeClass('active');
    });
    $('#re').click(function() {
        $('#resume').show();
        $('#aboutMe, #projects, #contact').hide();
        $('#re').addClass('active');
        $('#ab, #pr, #co').removeClass('active');
    });
    $('#co').click(function() {
        $('#contact').show();
        $('#aboutMe, #projects, #resume').hide();
        $('#co').addClass('active');
        $('#ab, #re, #pr').removeClass('active');
    });
});
