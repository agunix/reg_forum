const form = document.querySelector (".form")
const ad = document.querySelector (".ad")
const soyad = document.querySelector(".soyad")
const Email = document.querySelector (".Email")
const Hobbiler = document.querySelector (".Hobbiler")
const Şifrə = document.querySelector (".Şifrə")
const data = document.querySelector (".data")



let database = [
{
    ad:"Ağaverdi",
    soyad:"Kələntərli",
},
{
    ad:"Mikayıl",
    soyad:"Kələntərli",
},
];

for (let i = 0; i < database.length; i++) {
    console.log(database[i]);
    
  }

   form.addEventListener ("submit", function (e) {

        e.preventDefault ();
        if (ad.value.length > 3  && soyad.value.length > 3) {

            let obj = {};
            obj.ad = ad.value;
            obj.soyad = soyad.value;


            database.push (obj);
            console.log (database);


            // Input daxil ediləndə sıfırlansın.

           ad.value="";
           soyad.value ="";

           Email.value="";
           Hobbiler.value="";
           Şifrə.value="";




         }else{

            console.log ("ugursuz emeliyyat");
            alert ("ad ve ya soyad tam deil");


            ad.value="";
            soyad.value= "";

            Email.value="";
            Hobbiler.value="";
            Şifrə.value="";

          }

})


//

function performOperations (num1, num2) {

  const toplama = num1 + num2;
  const cixma = num1 - num2;
  const vurma = num1 * num2;
  const bolme = num1 / num2;
  


   console.log ("toplama: "+toplama);
   console.log ("cixma: "+cixma);
   console.log ("vurma: "+vurma);
   console.log ("bolme: "+bolme);
  }
  

  performOperations(35, 10);
    
       // ədədin tək və ya cütlüyünün təyini
  
  

  function number (x){
      if ( x%2===0 )
      console.log("ədəd cütdür");
  else 
  console.log ("ədəd təkdir");
  }
  
  
  number (7)