function showmenu(){
        $('.mobile-view').toggle();
        $('.bar').toggleClass('animate');
}

function showcontent(e){
    var opened = e.target;
    $('.tab-content > ul').hide(100);
    $('.tab').removeClass('clicked');
    $(opened).addClass('clicked');

    switch(opened){
    case $('.tab')[0]:
        $('#me').addClass('clicked');
        $('#mesh').show(200); 
        break;
    case $('#backoptions > span')[0]:
        $('#me').addClass('clicked');
        $('#mesh').show(200); 
        break;
    case $('.tab')[1]:
        $('#el').addClass('clicked');
        $('#elastic').show(200);
        break;
    case $('#backoptions > span')[2]:
        $('#el').addClass('clicked');
        $('#elastic').show(200);
        break;
    case $('.tab')[2]:
        $('#fa').addClass('clicked');
        $('#fabric').show(200);
        break;
    case $('#backoptions > span')[1]:
        $('#fa').addClass('clicked');
        $('#fabric').show(200);
        break;
    case $('.tab')[3]:
        $('#zi').addClass('clicked');
        $('#zipper').show(200);
        break;
    case $('#backoptions > span')[3]:
        $('#zi').addClass('clicked');
        $('#zipper').show(200);
        break;
    }
}


function buildgrid(f){
    var clicked = f.target;

    switch(clicked){
    case $('#mesh > li > span')[0]:
        $('#gridback').css('background-image', 'url("img/buildback/backgridblack.png")');
        $('#gridside').css('background-image', 'url("img/buildside/sidegridblack.png")');
        $('#mv').html('0.00');
        break;
    case $('#mesh > li > span')[1]:
        $('#gridback').css('background-image', 'url("img/buildback/backgridwhite.png")');
        $('#gridside').css('background-image', 'url("img/buildside/sidegridwhite.png")');
        $('#mv').html('20.00');
        break;
    case $('#mesh > li > span')[2]:
        $('#gridback').css('background-image', 'url("img/buildback/backgridblue.png")');
        $('#gridside').css('background-image', 'url("img/buildside/sidegridblue.png")');
        $('#mv').html('15.00');
        break;
    case $('#mesh > li > span')[3]:
        $('#gridback').css('background-image', 'url("img/buildback/backgridred.png")');
        $('#gridside').css('background-image', 'url("img/buildside/sidegridred.png")');
        $('#mv').html('30.00');
        break;
    case $('#mesh > li > span')[4]:
        $('#gridback').css('background-image', 'url("img/buildback/backgridgray.png")');
        $('#gridside').css('background-image', 'url("img/buildside/sidegridgray.png")');
        $('#mv').html('20.00');
        break;
    }
    totalvalue();
}

function buildelastic(e){
    var clicked = e.target;

    switch(clicked){
    case $('#elastic > li > span')[0]:
        $('#bandsback').css('background-image', 'url("img/buildback/backbandsblack.png")');
        $('#bandsfront').css('background-image', 'url("img/buildfront/frontbandsblack.png")');
        $('#bandsside').css('background-image', 'url("img/buildside/sidebandsblack.png")');
        $('#ev').html('0.00');
        break;
    case $('#elastic > li > span')[1]:
        $('#bandsback').css('background-image', 'url("img/buildback/backbandswhite.png")');
        $('#bandsfront').css('background-image', 'url("img/buildfront/frontbandswhite.png")');
        $('#bandsside').css('background-image', 'url("img/buildside/sidebandswhite.png")');
        $('#ev').html('15.00');
        break;
    case $('#elastic > li > span')[2]:
        $('#bandsback').css('background-image', 'url("img/buildback/backbandsblue.png")');
        $('#bandsfront').css('background-image', 'url("img/buildfront/frontbandsblue.png")');
        $('#bandsside').css('background-image', 'url("img/buildside/sidebandsblue.png")');
        $('#ev').html('15.00');
        break;
    case $('#elastic > li > span')[3]:
        $('#bandsback').css('background-image', 'url("img/buildback/backbandsred.png")');
        $('#bandsfront').css('background-image', 'url("img/buildfront/frontbandsred.png")');
        $('#bandsside').css('background-image', 'url("img/buildside/sidebandsred.png")');
        $('#ev').html('30.00');
        break;
    case $('#elastic > li > span')[4]:
        $('#bandsback').css('background-image', 'url("img/buildback/backbandsgray.png")');
        $('#bandsfront').css('background-image', 'url("img/buildfront/frontbandsgray.png")');
        $('#bandsside').css('background-image', 'url("img/buildside/sidebandsgray.png")');
        $('#ev').html('20.00');
        break;
    }
    totalvalue();
}

function buildfabric(e){
    var clicked = e.target;

    switch(clicked){
    case $('#fabric > li > span')[0]:
        $('#fabricback').css('background-image', 'url("img/buildback/backfabricblack.png")');
        $('#fabricfront').css('background-image', 'url("img/buildfront/frontfabricblack.png")');
        $('#fabricside').css('background-image', 'url("img/buildside/sidefabricblack.png")');
        $('#fv').html('0.00');
        break;
    case $('#fabric > li > span')[1]:
        $('#fabricback').css('background-image', 'url("img/buildback/backfabricwhite.png")');
        $('#fabricfront').css('background-image', 'url("img/buildfront/frontfabricwhite.png")');
        $('#fabricside').css('background-image', 'url("img/buildside/sidefabricwhite.png")');
        $('#fv').html('15.00');
        break;
    case $('#fabric > li > span')[2]:
        $('#fabricback').css('background-image', 'url("img/buildback/backfabricblue.png")');
        $('#fabricfront').css('background-image', 'url("img/buildfront/frontfabricblue.png")');
        $('#fabricside').css('background-image', 'url("img/buildside/sidefabricblue.png")');
        $('#fv').html('20.00');
        break;
    case $('#fabric > li > span')[3]:
        $('#fabricback').css('background-image', 'url("img/buildback/backfabricred.png")');
        $('#fabricfront').css('background-image', 'url("img/buildfront/frontfabricred.png")');
        $('#fabricside').css('background-image', 'url("img/buildside/sidefabricred.png")');
        $('#fv').html('40.00');
        break;
    case $('#fabric > li > span')[4]:
        $('#fabricback').css('background-image', 'url("img/buildback/backfabricgray.png")');
        $('#fabricfront').css('background-image', 'url("img/buildfront/frontfabricgray.png")');
        $('#fabricside').css('background-image', 'url("img/buildside/sidefabricgray.png")');
        $('#fv').html('10.00');
        break;
    }
    totalvalue();
}

function buildzipper(e){
    var clicked = e.target;
    if(clicked === $('#zipper > li > span')[0]){
        $('#zipperfront').css('background-image', 'url("img/buildfront/frontzipperblack.png")');
        $('#zv').html('0.00');
    }
    else if(clicked === $('#zipper > li > span')[1]){
        $('#zipperfront').css('background-image', 'url("img/buildfront/frontzipperwhite.png")');
        $('#zv').html('15.00');
    }
    else if(clicked === $('#zipper > li > span')[2]){
        $('#zipperfront').css('background-image', 'url("img/buildfront/frontzipperblue.png")');
        $('#zv').html('20.00');
    }
    else if(clicked === $('#zipper > li > span')[3]){
        $('#zipperfront').css('background-image', 'url("img/buildfront/frontzipperred.png")');
        $('#zv').html('40.00');
    }
    else if(clicked === $('#zipper > li > span')[4]){
        $('#zipperfront').css('background-image', 'url("img/buildfront/frontzippergray.png")');
        $('#zv').html('10.00');
    }
    totalvalue();
}

function scrollbuild(e){
    var clicked = e.target;

    switch(clicked){
    case $('.bullet')[0]:
        $('#scroll').css('margin-left', '0');
        break;
    case $('.bullet')[1]:
        $('#scroll').css('margin-left', -1*$('#scroll').width()/3 + 'px');
        break;
    case $('.bullet')[2]:
        $('#scroll').css('margin-left', -2*$('#scroll').width()/3 + 'px');
        break;
    }
}

function totalvalue(){
    var sum = 130.00;
    sum += parseFloat($('#mv').html());
    sum += parseFloat($('#ev').html());
    sum += parseFloat($('#fv').html());
    sum += parseFloat($('#zv').html());
    $('#total > .value').html('$'+ sum + '.00');
}

var d = new Date();
var year = d.getFullYear(),
    month = d.getMonth(),
    date = d.getDate(),
    // day = d.getDay(),
    firstDay = new Date(d.getFullYear(), d.getMonth(), 1).getDay(),
    lastDay = new Date((d.getMonth() + 1 > 11) ? d.getFullYear() + 1 : d.getFullYear(), (d.getMonth() + 1 > 12) ? 0 : d.getMonth() + 1, 0).getDate(),
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    days = ['Sunday', 'Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday'];

var theRows = [], theDays = [], theRadios = [];

function calendar(){
    $('.year > span').html(year);
    $('.month > span').html(months[month]);


    for (var i = 0; i < 6; i++) {
        theRows[i] = document.createElement('DIV');
        theRows[i].className = 'row';
        $('.days').append(theRows[i]);
    }

    for (var i = 0, j = 0; i < 42; i++) {
        theRadios[i] = document.createElement('INPUT');
        theRadios[i].className = 'radios';
        theRadios[i].type = 'radio';
        theRadios[i].name = 'radios';
        theRadios[i].id = 'radio-' + (i + 1);

        theDays[i] = document.createElement('LABEL');
        theDays[i].className = 'day';
        theDays[i].htmlFor = 'radio-' + (i + 1);
        theDays[i].id = 'day-' + (i + 1);

        theRows[j].appendChild(theRadios[i]);
        theRows[j].appendChild(theDays[i]);

        if ((i + 1) % 7 == 0)
            j++;
    }

    var counter = 1;
    for(var i = firstDay; i < lastDay+firstDay; i++){
        theDays[i].innerHTML = (counter);
        counter++;
    }

    $('#radio-'+ (date + firstDay)).prop('checked', true);

    $('.events > .date > span').html(d.getDate() + ' ' + months[d.getMonth()] + ', ' + d.getFullYear());
}

function calendarupdate(e){
    for(var i = firstDay; i < lastDay+firstDay; i++){
        theDays[i].innerHTML = '';
    }
    var change = e.target;
    // console.log(change)
    switch(change){
    case $('.year > div')[0]:
        year--;
        $('.year > span').html(year);
        break;
    case $('.year > div')[1]:
        year++;
        $('.year > span').html(year);
        break;
    case $('.month > div')[0]:
        month--;
        $('.month > span').html(months[month]);
        break;
    case $('.month > div')[1]:
        month++;
        $('.month > span').html(months[month]);
        break;
    }
    
    var ddate = new Date(year, month);
    firstDay = new Date(ddate.getFullYear(), ddate.getMonth(), 1).getDay();
    lastDay = new Date((ddate.getMonth() + 1 > 11) ? ddate.getFullYear() + 1 : ddate.getFullYear(), (ddate.getMonth() + 1 > 12) ? 0 : ddate.getMonth() + 1, 0).getDate();

    var counter = 1;
    for(var i = firstDay; i < lastDay+firstDay; i++){
        theDays[i].innerHTML = (counter);
        counter++;
    }
    var labelfor = $('.days > .row > input[type=\'radio\']:checked').attr('id'),
        eventdate = $('.days > .row > label[for=\'' + labelfor + '\']').text();
    $('.events > .date > span').html(eventdate + ' ' + months[ddate.getMonth()] + ', ' + ddate.getFullYear());
}

$(window).load(function(){
    'use strict';

    $('.bullet').click(scrollbuild);

    $('.hamburger-menu').click(showmenu);

    $('.tab-content > ul').hide();
    $('#tabs').click(showcontent);
    $('#backoptions > span').click(showcontent);

    $('#mesh > li > span').click(buildgrid);
    $('#elastic > li > span').click(buildelastic);
    $('#fabric > li > span').click(buildfabric);
    $('#zipper > li > span').click(buildzipper);

    calendar();
    $('.year > div').click(calendarupdate);
    $('.month > div').click(calendarupdate);
    $('.days > .row > input:radio').click(calendarupdate);
});