 $(document).ready(function(){
     $(".navigation").click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
     });
     /*============================ line bottom header ==============================*/ 
    $(window).on("scroll",function(){
        var scr=$(window).scrollTop(),
            w=$(window).width();
        if(scr>100){
            $(".header").css("border-bottom","2px solid #fff");
        }else{
            $(".header").css("border-bottom","2px solid #2ecc71");
        }

        if(scr>200 && w>920){
            $(".header").addClass("full_header").removeClass("header");
        }else{
            $(".full_header").addClass("header").removeClass("full_header");
        }

        if(w<900 && scr>200){
            $(".header").fadeOut(1000);
        }else{
            $(".header").fadeIn(1000,function(){$(".header").css("display","block");});
        }
        
        if(scr<500){
            $(".navigation").css("display","none");
        }else{
            $(".navigation").css("display","flex");
        }
    });
     /* line bottom header */ 

     /*============================== move top to down ======================*/
    $(".scroll-down a").hover(
        function(){
             $(this).css("padding","5px");
             $(".scroll-down .fa-customize").css("padding","5px");
        },
        function(){

            $(this).css("padding","-5px");
            $(".scroll-down .fa-customize").css("padding","-5px");
        }
        );


     /*================================= Skills page ===========================*/
      
       $(window).ready(function(){
           $(".s2").slideUp(1);
           $(".s3").slideUp(1);
       });

     $(".skills__header .c1").click(function(){
            $(".s1").slideToggle(500);
            
     });
     $(".skills__header .c2").click(function(){
            $(".s2").slideToggle(500);
     });
     $(".skills__header .c3").click(function(){
            $(".s3").slideToggle(500);
     });
     $(".skills__header .c4").click(function(){
            $(".s4").slideToggle(500);
     });
    

    $(".cursor").click(function(){
        $(this).removeClass("animate_arrow_skills");
    });

     

    /* ===================== Dark and light theme ===============================*/
    $(".header .nav-item ul li .fa-moon").click(function(){
        $(this).css("display","none");
        $(".header .nav-item ul li .fa-sun").css("display","block");
        $("body").addClass("dark-theme").removeClass("light-theme");
        $(".header").css("background-color","rgb(49 54 60 / 94%)");
        $(".header .nav-item ul li a").css("color","#fff")
    });
    $(".header .nav-item ul li .fa-sun").click(function(){
        $(this).css("display","none");
        $(".header .nav-item ul li .fa-moon").css("display","block");
        $("body").addClass("light-theme").removeClass("dark-theme");
        $(".header").css("background-color","#fff");
        $(".header .nav-item ul li a").css("color","black")
    });

 });

