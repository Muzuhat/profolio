$(document).ready(function(){
    $(".ab").click(function(){
        
        $(".h,.p,.c").hide()
        $(".a").show("slide", { direction: 'up' })
        $(".hb,.pb,.cb").css("color","white")
        $(".hb,.pb,.cb").css("border","1px solid white")
        $(".ab").css("color","skyblue")
        $(".ab").css("border","1px solid skyblue")
        $(".cb,.pb,.hb").hover(function(){
            $(this).css("color", "skyblue");
            $(this).css("border","1px solid skyblue");
            }, function(){
            $(this).css("color", "white");
            $(this).css("border","1px solid white")
            });
    })
    $(".pb").click(function(){
        $(".h,.a,.c").hide()
        $(".p").show("slide", { direction: 'up' } )
        $(".hb,.ab,.cb").css("color","white")
        $(".hb,.ab,.cb").css("border","1px solid white")
        $(".pb").css("color","skyblue")
        $(".pb").css("border","1px solid skyblue")
        $(".cb,.ab,.hb").hover(function(){
            $(this).css("color", "skyblue");
            $(this).css("border","1px solid skyblue");
            }, function(){
            $(this).css("color", "white");
            $(this).css("border","1px solid white")
            });
    })
    $(".cb").click(function(){
        $(".h,.p,.a").hide()
        $(".c").show("slide", { direction: 'up' })
        $(".hb,.ab,.pb").css("color","white")
        $(".hb,.ab,.pb").css("border","1px solid white")
        $(".cb").css("color","skyblue")
        $(".cb").css("border","1px solid skyblue")
        $(".pb,.ab,.hb").hover(function(){
            $(this).css("color", "skyblue");
            $(this).css("border","1px solid skyblue");
            }, function(){
            $(this).css("color", "white");
            $(this).css("border","1px solid white")
            });
    })
    $(".hb").click(function(){
        $(".h").show("slide", { direction: 'up' })
        $(".a,.p,.c").hide()
        $(".cb,.ab,.pb").css("color","white")
        $(".cb,.ab,.pb").css("border","1px solid white")
        $(".hb").css("color","skyblue")
        $(".hb").css("border","1px solid skyblue")
        $(".pb,.ab,.cb").hover(function(){
            $(this).css("color", "skyblue");
            $(this).css("border","1px solid skyblue");
            }, function(){
            $(this).css("color", "white");
            $(this).css("border","1px solid white")
            });
        
    })
    $(".w").click(function(){
        $(".h3").toggle("slide")
    })
   
})

  
