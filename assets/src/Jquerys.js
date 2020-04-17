
    //Scripts de sonidos
    var i = 0;
    var j = 0;
    $("#butt_musica").click(function(){
        i++;
        if(i == 1){
            $("#butt_musica").css({
            "background" : "url(./assets/img/Off.png)",
            "background-repeat" : "no-repeat",
            "background-size" : "contain",
            "border" : "transparent"
            })
        }
        else if(i == 2){
            $("#butt_musica").css({
            "background" : "url(./assets/img/On.png)",
            "background-repeat" : "no-repeat",
            "background-size" : "contain",
            "border" : "transparent"
            })
            i = 0;
        }
       
    })
    $("#butt_efectos").click(function(){
        j++;
        if(j == 1){
            $("#butt_efectos").css({
            "background" : "url(./assets/img/Off.png)",
            "background-repeat" : "no-repeat",
            "background-size" : "contain",
            "border" : "transparent"
            })
        }
        else if(j == 2){
            $("#butt_efectos").css({
            "background" : "url(./assets/img/On.png)",
            "background-repeat" : "no-repeat",
            "background-size" : "contain",
            "border" : "transparent"
            })
            j = 0;
        }
       
    })


//Script del mapa de los edificios
    $("#ubi_plaza").click(function(){
        $("#cuadroPlaza").toggle("slow");
        $("#mapaRaf").css({
            "opacity": "0.5"
        });
    })

    $("#volver").click(function(){
        $("#cuadroPlaza").toggle("slow"); 
        $("#mapaRaf").css({
            "opacity": "1"
        });
    })

    $("#ver").click(function(){
        $("#menuScaner").fadeOut("slow");
        $("#Lehmann").fadeIn("slow");
        $("#cuadroPlaza").fadeOut("slow");
        $("#mapaRaf").css({
            "opacity": "1"
        });
    })

    $("#exitLehmann").click(function(){
        $("#Lehmann").fadeOut("slow");
        $("#menuScaner").fadeIn("slow");
    })



//Scripts de ida y vuelta entre menus
    $("#proceres").click(function(){
        $("#menuPrincipal").fadeOut("fast");
        $("#menuProceres").fadeIn("slow");
        $("body").css({
            "overflow-y": "scroll",
            "overflow-x": "hidden"
        });
    })

   $("#exitProc").click(function(){
       $("#menuProceres").fadeOut("fast");
       $("#menuPrincipal").fadeIn("slow");
       $("body").css({
            "overflow": "hidden"
        });
   })

   $("#regalos").click(function(){
        $("#menuPrincipal").fadeOut("fast");
        $("#menuRegalos").fadeIn("slow");
   })

   $("#exitReg").click(function(){
        $("#menuRegalos").fadeOut("fast");
        $("#menuPrincipal").fadeIn("slow");
   })

   $("#config").click(function(){
        $("#menuPrincipal").fadeOut("fast");
        $("#menuConfig").fadeIn("slow");
   })

   $("#exitConfig").click(function(){
        $("#menuConfig").fadeOut("fast");
        $("#menuPrincipal").fadeIn("slow");
   })

   $("#perfil").click(function(){
        $("#menuPrincipal").fadeOut("fast");
        $("#menuPerfil").fadeIn("slow");
   })

   $("#exitPerfil").click(function(){
        $("#menuPerfil").fadeOut("fast");
        $("#menuPrincipal").fadeIn("slow");
   })

   $("#escaner").click(function(){
        $("#menuPrincipal").fadeOut("slow");
        $("#menuScaner").fadeIn("fast");
        $("body").css({
            "overflow-y": "scroll",
            "overflow-x": "hidden"
        });
        $("#mapaRaf").css({
            "opacity": "1"
        });
   })

   $("#exitScaner").click(function(){
        $("#menuScaner").fadeOut("fast");
        $("#menuPrincipal").fadeIn("slow");
        $("body").css({
            "overflow": "hidden"
        });
        $("#cuadroPlaza").fadeOut("fast");
   })
