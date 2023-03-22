function baslangic(){
   var yildizMarka = document.getElementById("yildizMarka");
   yildizMarka.style.display="none";

   var yildizModel = document.getElementById("yildizModel");
   yildizModel.style.display="none";

   var yildizAciklama = document.getElementById("yildizAciklama");
   yildizAciklama.style.display="none";
  

}

function btnTikla(){
   boslukKontrol();
}

function boslukKontrol(){
   
   
   yildizMarka.style.display="none";
   yildizModel.style.display="none";
   yildizAciklama.style.display="none";


   var marka = document.getElementById("marka");
   var model = document.getElementById("model");
   var aciklama = document.getElementById("aciklama");


   if(aciklama.value==""){

      yildizAciklama.style.display="";
      aciklama.focus();
     
   }

   if(model.value==""){

      yildizModel.style.display="";
      model.focus();
     
   }

   if(marka.value==""){

      yildizMarka.style.display="";
      marka.focus();
      console.log("marka"); 
     
   }

   if(yildizAciklama.style.display=="none" && yildizModel.style.display=="none" && yildizMarka.style.display=="none" )
   sikayetEt();

}

function sikayetEt(){
  
   document.getElementById("sikayetYazi").innerHTML="Şikayetiniz değerlendirmek üzere iletilmiştir.";
   marka.value="";
   model.value="";
   aciklama.value="";
   marka.focus();

  setTimeout( zamanYazi,2000 );

   
}

function zamanYazi(){
   document.getElementById("sikayetYazi").innerHTML="";

}


 