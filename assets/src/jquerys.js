    $("#config").click(function(){
        $("#sectionMenu").fadeOut("fast");
        $("#sectionConfig").fadeIn("slow");
    })

    $("#exitConfig").click(function(){
        $("#sectionConfig").fadeOut("fast");
        $("#sectionMenu").fadeIn("slow");
    })

    $("#proceres").click(function(){
        $("#sectionMenu").fadeOut("fast");
        $("#sectionProc").fadeIn("slow");
    })

    $("#exitProc").click(function(){
        $("#sectionProc").fadeOut("fast");
        $("#sectionMenu").fadeIn("slow");
    })

    $("#regalos").click(function(){
        $("#sectionMenu").fadeOut("fast");
        $("#sectionRegalos").fadeIn("slow");
    })

    $("#exitReg").click(function(){
        $("#sectionRegalos").fadeOut("fast");
        $("#sectionMenu").fadeIn("slow");
    })


    $("#perfil").click(function(){
        $("#sectionMenu").fadeOut("fast");
        $("#sectionPerfil").fadeIn("slow");
    })

    $("#exitPerf").click(function(){
        $("#sectionPerfil").fadeOut("fast");
        $("#sectionMenu").fadeIn("slow");
    })

    $("#escaner").click(function(){
        $("#sectionMenu").fadeOut("fast");
        $("#sectionEscaner").fadeIn("slow");
    })

    $("#exitScan").click(function(){
        $("#sectionEscaner").fadeOut("fast");
        $("#sectionMenu").fadeIn("slow");
    })
    //Idas y vueltas de los exit y botones


    
    //Scripts de sonidos
    var i = 0;
    var j = 0;
    $("#musica").click(function(){
        i++;
        if(i == 1){
            $("#musica").css({
            "background" : "url(./assets/img/Off.png)",
            "background-repeat" : "no-repeat",
            "background-size" : "contain",
            "border" : "transparent"
            })
        }
        else if(i == 2){
            $("#musica").css({
            "background" : "url(./assets/img/On.png)",
            "background-repeat" : "no-repeat",
            "background-size" : "contain",
            "border" : "transparent"
            })
            i = 0;
        }
       
    })
    $("#efectos").click(function(){
        j++;
        if(j == 1){
            $("#efectos").css({
            "background" : "url(./assets/img/Off.png)",
            "background-repeat" : "no-repeat",
            "background-size" : "contain",
            "border" : "transparent"
            })
        }
        else if(j == 2){
            $("#efectos").css({
            "background" : "url(./assets/img/On.png)",
            "background-repeat" : "no-repeat",
            "background-size" : "contain",
            "border" : "transparent"
            })
            j = 0;
        }
       
    })
    //Ese script es para cambiar las imagenes del sonido, faltaria agregarle la parte donde se mutean los sonidos/efectos.

  