$(function(){
    var $csie = $('#csie'),
        $news = $('#news'),
        $project = $('#project'),
        $photo = $('#photo'),
        $intro = $('#intro'),
        gospeed = 799;
    var intViewportHeight = window.innerHeight;
    $csie.click(function(e){
        intViewportHeight = window.innerHeight
        $('html,body').animate({scrollTop:0},gospeed);
    });
    $news.click(function(e){
        intViewportHeight = window.innerHeight
        $('html,body').animate({scrollTop:intViewportHeight},gospeed);
    });
    $project.click(function(e){
        intViewportHeight = window.innerHeight
        $('html,body').animate({scrollTop:intViewportHeight*2},gospeed);
    });
    $photo.click(function(e){
        intViewportHeight = window.innerHeight
        $('html,body').animate({scrollTop:intViewportHeight*3},gospeed);
    });
    $intro.click(function(e){
        intViewportHeight = window.innerHeight
        $('html,body').animate({scrollTop:intViewportHeight*4},gospeed);
    });
});