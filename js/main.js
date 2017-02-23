function position(){
    if(window.pageYOffset >= ($('#home').height()+60)){
        $('#sidebar').css('position', 'fixed');
        $('#sidebar').css('top', '0');
        $('#sidebar').css('left', '88vw');
    }
    else{
        $('#sidebar').css('position', 'relative');
        $('#sidebar').css('top', '0');
        $('#sidebar').css('left', '0'); 
    }
}

function gridcolors(){
    $('#meshup').css('margin-left', '0');
    $('#stretch').css('margin-left', '-1000px');
    $('#fab').css('margin-left', '-1000px');
}
function fabriccolors(){
    $('#meshup').css('margin-left', '-1000px');
    $('#stretch').css('margin-left', '-1000px');
    $('#fab').css('margin-left', '0');
}
function elasticcolors(){
    $('#meshup').css('margin-left', '-1000px');
    $('#stretch').css('margin-left', '0');
    $('#fab').css('margin-left', '-1000px');
}


function buildgrid(e){
    var clicked = e.target;
    if(clicked === $('#mesh > li > span')[0]){
        console.log('clicked');
        $('#grid').html('<img src="img/buildback/backgridblack.png">');
    }
    else if(clicked === $('#mesh > li > span')[1]){
        $('#grid').html('<img src="img/buildback/backgridwhite.png">');
    }
    else if(clicked === $('#mesh > li > span')[2]){
        $('#grid').html('<img src="img/buildback/backgridblue.png">');
    }
    else if(clicked === $('#mesh > li > span')[3]){
        $('#grid').html('<img src="img/buildback/backgridred.png">');
    }
    else if(clicked === $('#mesh > li > span')[4]){
        $('#grid').html('<img src="img/buildback/backgridgray.png">');
    }
}

function buildelastic(e){
    var clicked = e.target;
    if(clicked === $('#elastic > li > span')[0]){
        $('#tb').html('<img src="img/buildback/topbandblack.png">');
        $('#mb').html('<img src="img/buildback/middlebandblack.png">');
        $('#bb').html('<img src="img/buildback/bottombandblack.png">');
    }
    else if(clicked === $('#elastic > li > span')[1]){
        $('#tb').html('<img src="img/buildback/topbandwhite.png">');
        $('#mb').html('<img src="img/buildback/middlebandwhite.png">');
        $('#bb').html('<img src="img/buildback/bottombandwhite.png">');
    }
    else if(clicked === $('#elastic > li > span')[2]){
        $('#tb').html('<img src="img/buildback/topbandblue.png">');
        $('#mb').html('<img src="img/buildback/middlebandblue.png">');
        $('#bb').html('<img src="img/buildback/bottombandblue.png">');
    }
    else if(clicked === $('#elastic > li > span')[3]){
        $('#tb').html('<img src="img/buildback/topbandred.png">');
        $('#mb').html('<img src="img/buildback/middlebandred.png">');
        $('#bb').html('<img src="img/buildback/bottombandred.png">');
    }
    else if(clicked === $('#elastic > li > span')[4]){
        $('#tb').html('<img src="img/buildback/topbandgray.png">');
        $('#mb').html('<img src="img/buildback/middlebandgray.png">');
        $('#bb').html('<img src="img/buildback/bottombandgray.png">');
    }
}

function buildfabric(e){
    var clicked = e.target;
    if(clicked === $('#fabric > li > span')[0]){
        $('#lp').html('<img src="img/buildback/leftpatchblack.png">');
        $('#rp').html('<img src="img/buildback/rightpatchblack.png">');
    }
    else if(clicked === $('#fabric > li > span')[1]){
        $('#lp').html('<img src="img/buildback/leftpatchwhite.png">');
        $('#rp').html('<img src="img/buildback/rightpatchwhite.png">');
    }
    else if(clicked === $('#fabric > li > span')[2]){
        $('#lp').html('<img src="img/buildback/leftpatchblue.png">');
        $('#rp').html('<img src="img/buildback/rightpatchblue.png">');
    }
    else if(clicked === $('#fabric > li > span')[3]){
        $('#lp').html('<img src="img/buildback/leftpatchred.png">');
        $('#rp').html('<img src="img/buildback/rightpatchred.png">');
    }
    else if(clicked === $('#fabric > li > span')[4]){
        $('#lp').html('<img src="img/buildback/leftpatchgray.png">');
        $('#rp').html('<img src="img/buildback/rightpatchgray.png">');
    }
}

function scrollbuild(e){
    var clicked = e.target;
    if(clicked == $('.bullet')[0]){
        $('#scroll').css('margin-left', '0');
    }
    else if(clicked == $('.bullet')[1]){
        $('#scroll').css('margin-left', '-510px');
    }
    if(clicked == $('.bullet')[2]){
        $('#scroll').css('margin-left', '-1020px');
    }
}

$(window).load(function(){
    'use strict';
    $(window).scroll(position);

    $('.bullet').click(scrollbuild);

    $('#backoptions > .grid').click(gridcolors);
    $('#backoptions > .fabric').click(fabriccolors);
    $('#backoptions > .elastic').click(elasticcolors);

    $('#mesh > li').click(buildgrid);
    $('#elastic > li').click(buildelastic);
    $('#fabric > li').click(buildfabric);
});