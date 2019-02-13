$(function(){
    var $csie = $('#csie'),
        $news = $('#news'),
        $project = $('#project'),
        $photo = $('#photo'),
        $intro = $('#intro'),
        gospeed = 799;
    $csie.click(function(e){
        $('html,body').animate({scrollTop:0},gospeed);
    });
    $news.click(function(e){
        $('html,body').animate({scrollTop:600},gospeed);
    });
    $project.click(function(e){
        $('html,body').animate({scrollTop:1200},gospeed);
    });
    $photo.click(function(e){
        $('html,body').animate({scrollTop:1800},gospeed);
    });
    $intro.click(function(e){
        $('html,body').animate({scrollTop:2400},gospeed);
    });
});