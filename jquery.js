var move = 1;
var play = true;
var sign ;
var i = [1,2,3,4,5,6,7,8,9];
var count = 0;
$(document).ready(function(){
    $('#yourself').click(function(){
        $('#company').hide();
        $('#gameBox').css('display', 'grid');
        $('#Cplayer').hide();
        $('#Mplayer, #turn').css('display', 'grid');
        playSelf();
    });
    $('#computer').click(function(){
        $('#company').hide();
        $('#gameBox').css('display', 'grid');
        $('button.signO').click(function(){
            $('#Cplayer').hide();
            sign = "O";
            $('#withComp').css('display', 'grid');
            $('#withComp').text("You're O");
            playWithComp(sign);
        });
        $('button.signX').click(function(){
            $('#Cplayer').hide();
            sign = "X";
            $('#withComp').css('display', 'grid');
            $('#withComp').text("You're X");
            playWithComp(sign);
        });
    });
});   