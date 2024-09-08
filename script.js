let login = true;
document .querySelector(".menu").addEventListener('click',function(){
  show();
})
function show(){
   if(login == true){
      document.querySelector(".form").style.display = 'block';
      login = !login;
   console.log(login);
   }else{
      document.querySelector(".form").style.display = 'none';
      login = !login;
   console.log(login);

   }
}