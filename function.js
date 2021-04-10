const putX = function(box){
    $(box).empty();
    $(box).append("X");
    $(box).css({'color': '#8f9779', 'font-family': "'Lato', sans-serif"});
}
const putO = function(box){
    $(box).empty();
    $(box).append("O");
    $(box).css({'color': '#e95c4b', 'font-family': "'Lato', sans-serif"});
}
const Winner = function(){
    b1 = $('table tr:nth-child(1) td:nth-child(1)').text();
    b2 = $('table tr:nth-child(1) td:nth-child(2)').text();
    b3 = $('table tr:nth-child(1) td:nth-child(3)').text();
    b4 = $('table tr:nth-child(2) td:nth-child(1)').text();
    b5 = $('table tr:nth-child(2) td:nth-child(2)').text();
    b6 = $('table tr:nth-child(2) td:nth-child(3)').text();
    b7 = $('table tr:nth-child(3) td:nth-child(1)').text();
    b8 = $('table tr:nth-child(3) td:nth-child(2)').text();
    b9 = $('table tr:nth-child(3) td:nth-child(3)').text();
    if((b1 == b2) && (b2 == b3)){
        return b3;
    }else if((b4 == b5) && (b5 == b6)){
        return b6;
    }else if((b7 == b8) && (b8 == b9)){
        return b9;
    }else if((b1 == b4) && (b4 == b7)){
        return b7;
    }else if((b2 == b5) && (b5 == b8)){
        return b8;
    }else if((b3 == b6) && (b6 == b9)){
        return b9;
    }else if((b1 == b5) && (b5 == b9)){
        return b9;
    }else if((b3 == b5) && (b5 == b7)){
        return b7;
    }
    return -1
}
const playSelf = function(){
    $('table tr td').click(function(){
        if( $(this).text() == "" && play){
            if( move%2==1){
                putX(this);
                $('#turn').text("O's turn");
            }else{
                putO(this);
                $('#turn').text("X's turn");
            }
        }
        move++;
        if(Winner() != -1 && Winner() != ""){
            if(Winner() == "X"){
                $('#turn').css('display', 'none');
                $('#winner').css('display', 'grid');
                $('#winner').text("X's won");
                $('#replay').css('display', 'grid');
                $('#replay').click(function(){
                    location.reload();
                });
            }else {
                $('#turn').css('display', 'none');
                $('#winner').css('display', 'grid');
                $('#winner').text("O's won");
                $('#replay').css('display', 'grid');
                $('#replay').click(function(){
                    location.reload();
                });
            }
            play = false;
        }else if(Winner() == -1 && $('.box').text().length == 9){
            $('#turn').css('display', 'none');
            $('#winner').css('display', 'grid');
            $('#winner').text("DRAW");
            $('#replay').css('display', 'grid');
            $('#replay').click(function(){
                location.reload();
            });
        }
   });
}
const callarr = function(sign){
    n = i[Math.floor(Math.random() * i.length)];
    compTurn(n,sign);
}
const compTurn = function(m,sign){
    if($(`#e${m}`).text() == ""){
        if(sign == "O"){
            $(`#e${m}`).text("X")
            $(`#e${m}`).css({'color': '#8f9779', 'font-family': "'Lato', sans-serif"});
            ;
        }else{
            $(`#e${m}`).text("O");
            $(`#e${m}`).css({'color': '#e95c4b', 'font-family': "'Lato', sans-serif"});
        }
    }else{
        callarr(sign);
    }
}
const playWithComp = function(symbl){
    if(symbl == "O"){
        $('table tr td').click(function(){
            if($(this).text() == "" && play){
                if(move%2 == 1){
                    putO(this);
                    $('#turn').text("Your's turn");
                    callarr(symbl);
                }
            }move+=2;
            if(Winner() != -1 && Winner() != ""){
                if(Winner() == "X"){
                    $('#turn').css('display', 'none');
                    $('#winner').css('display', 'grid');
                    $('#winner').text("X's won");
                    $('#replay').css('display', 'grid');
                    $('#replay').click(function(){
                        location.reload();
                    });
                }else {
                    $('#turn').css('display', 'none');
                    $('#winner').css('display', 'grid');
                    $('#winner').text("O's won");
                    $('#replay').css('display', 'grid');
                    $('#replay').click(function(){
                        location.reload();
                    });
                }
                play = false;
            }else if(Winner() == -1 && $('.box').text().length == 8){
                $('#turn').css('display', 'none');
                $('#winner').css('display', 'grid');
                $('#winner').text("DRAW");
                $('#replay').css('display', 'grid');
                $('#replay').click(function(){
                    location.reload();
                });
                play = false;
            }

        });
    }else{
        $('table tr td').click(function(){
            if($(this).text() == "" && play){
                if(move%2 == 1){
                    putX(this);
                    $('#turn').text("Your's turn");
                    callarr(symbl);
                }
            }move+=2;
            if(Winner() != -1 && Winner() != ""){
                if(Winner() == "X"){
                    $('#turn').css('display', 'none');
                    $('#winner').css('display', 'grid');
                    $('#winner').text("X's won");
                    $('#replay').css('display', 'grid');
                    $('#replay').click(function(){
                        location.reload();
                    });
                }else {
                    $('#turn').css('display', 'none');
                    $('#winner').css('display', 'grid');
                    $('#winner').text("O's won");
                    $('#replay').css('display', 'grid');
                    $('#replay').click(function(){
                        location.reload();
                    });
                }
            }else if(Winner() == -1 && $('.box').text().length == 8){
                $('#turn').css('display', 'none');
                $('#winner').css('display', 'grid');
                $('#winner').text("DRAW");
                $('#replay').css('display', 'grid');
                $('#replay').click(function(){
                    location.reload();
                });
            }
        });

    }
}