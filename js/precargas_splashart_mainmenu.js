var splash_art_imagenes_cargadas = 0;
var splash_art_numero_total;
var splash_art_imagenes_a_cargar = [
  "splash-art-backgorund.png", 
  "logo4.png"
];
  
var main_menu_imagenes_cargadas = 0;
var main_menu_numero_total;
var main_menu_imagenes_a_cargar = [
  "splash-art-backgorund2.png", 
  "splash-art-backgorund4.png"
];

precarga_splash_art( splash_art_imagenes_a_cargar );

function precarga_splash_art(item){ 
  splash_art_numero_total =  item.length;
  item.forEach(splash_art_mostrar_imagenes_en_preloader);
  
  function splash_art_mostrar_imagenes_en_preloader(item, index){
    document.getElementById("precarga_img_splash-art").innerHTML +=    '<img  id="preloaded_element_'+ index +'" src="img/'+ item +'" >' ;
  }
  var splash_art_imagenes_en_preloader = $('#precarga_img_splash-art').children('img').map(function(){   return $(this).attr('id'); }).get()
  splash_art_imagenes_en_preloader.forEach( splash_art_precargar_imagenes );
  
  function splash_art_precargar_imagenes(item, index){
    item ="#"+ item;
    $(item).on('load', function() {
      splash_art_imagenes_cargadas++;
      // console.log(   "cargada imagen: "+ splash_art_imagenes_cargadas +" de "+ splash_art_numero_total );
      // ------------- calcular y mostrar el porcentaje -----------------
      splash_art_porcentaje = splash_art_imagenes_cargadas* 100/  splash_art_numero_total;   // saco el porcentaje de las imagenes cargadas
      splash_art_porcentaje = splash_art_porcentaje.toFixed() //convertir en numero entero
      splash_art_porcentaje =  splash_art_porcentaje + "%" ;
      //document.getElementById("porcentaje").innerHTML = porcentaje;
      //document.getElementById("barra").style.width = porcentaje;
      // ------------- terminado -----------------
      if( splash_art_imagenes_cargadas == splash_art_numero_total){
        console.log("// precarga de las imagenes de splash-art completada con exito!//"); 
      /* console.log(" ");
      console.log("//carga completada//"); 
      console.log(" "); */
      //document.getElementById("terminado").innerHTML = "//carga completada//";

       // --------------------------------------------------------------------------------------------------------------------------
       // ------------- pre-carga main menu ----------------------------------------------------------------------------------------
       // --------------------------------------------------------------------------------------------------------------------------

      setTimeout(function(){ 
        fadediv(splash,splash_art); 
        main_menu_imagenes_a_cargar.forEach(main_menu_mostrar_imagenes_en_preloader);
        main_menu_numero_total  =  main_menu_imagenes_a_cargar.length;
        function main_menu_mostrar_imagenes_en_preloader(item, index){
          document.getElementById("precarga_main_menu").innerHTML +=    '<img  id="preloaded_element_main_menu'+ index +'" src="img/'+ item +'" >' ;
        }
        var main_menu_imagenes_en_preloader = $('#precarga_main_menu').children('img').map(function(){   return $(this).attr('id'); }).get()
        main_menu_imagenes_en_preloader.forEach( main_menu_precargar_imagenes );

        function main_menu_precargar_imagenes(item, index){
          item ="#"+ item;
        
          $(item).on('load', function() {  
          main_menu_imagenes_cargadas++;
           main_menu_porcentaje =  main_menu_imagenes_cargadas* 100/   main_menu_numero_total;   // saco el porcentaje de las imagenes cargadas
           main_menu_porcentaje =  main_menu_porcentaje.toFixed() //convertir en numero entero
           main_menu_porcentaje =   main_menu_porcentaje + "%" ;
           document.getElementById("preloader_bar").style.width =  main_menu_porcentaje;
           //console.log(   main_menu_porcentaje ); 

          // console.log( { main_menu_imagenes_cargadas , main_menu_numero_total}   ); 
          //console.table( { main_menu_imagenes_cargadas , main_menu_numero_total}   ); 
         
          // ------------- terminado -----------------
          if(  main_menu_imagenes_cargadas ==  main_menu_numero_total){
            console.log("// precarga de las imagenes de main-menu completada con exito!//"); 
            /* console.log(" ");
            console.log("//carga completada//"); 
            console.log(" ");*/
            setTimeout(function(){  fadediv(splash_art , main_menu );  }, 1000);
          }
          ////document.getElementById("porcentaje").innerHTML = porcentaje;//
         })
        }
      }, 2000);  
    }})// load function
  }//precargar_imagenes
}