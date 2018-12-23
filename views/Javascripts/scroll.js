$(function(){
    var $frontpage = $('#frontpage'),
        $news = $('#news'),
        $mylocker = $('#mylocker'),
        $project = $('#project'),
        $photo = $('#photo'),
        $intro = $('#intro'),
        gospeed = 800;
    $frontpage.click(function(e){
        $('html,body').animate({scrollTop:0},gospeed);
    });
    $news.click(function(e){
        $('html,body').animate({scrollTop:614},gospeed);
    });
    $mylocker.click(function(e){
        $('html,body').animate({scrollTop:1233},gospeed);
    });
    $project.click(function(e){
        $('html,body').animate({scrollTop:1846},gospeed);
    });
    $photo.click(function(e){
        $('html,body').animate({scrollTop:2457},gospeed);
    });
    $intro.click(function(e){
        $('html,body').animate({scrollTop:3080},gospeed);
    });
});