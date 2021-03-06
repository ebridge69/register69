        function getPasswordStrength(password){
  let s = 0;
  if(password.length > 6){
    s++;
  }
  if(password.length > 10){
    s++;
  }
  if(/[A-Z]/.test(password)){
    s++;
  }
  if(/[0-9]/.test(password)){
    s++;
  }
  if(/[^A-Za-z0-9]/.test(password)){
    s++;
  }
  return s;
}
document.querySelector(".input-group #password").addEventListener("focus",function(){
  document.querySelector(".input-group .pw-strength").style.display = "block";
});
// document.querySelector(".input-group .pw-display-toggle-btn").addEventListener("click",function(){
//   let el = document.querySelector(".input-group .pw-display-toggle-btn");
//   if(el.classList.contains("active")){
//     document.querySelector(".input-group #password").setAttribute("type","password");
//     el.classList.remove("active");
//   } else {
//     document.querySelector(".input-group #password").setAttribute("type","text");
//     el.classList.add("active");
//   }
// });

document.querySelector("#password").addEventListener("keyup",function(e){
  let password = e.target.value;
  let strength = getPasswordStrength(password);
  let passwordStrengthSpans = document.querySelectorAll(".pw-strength span");
  strength = Math.max(strength,1);
  passwordStrengthSpans[1].style.width = strength*20 + "%";
  if(strength < 2){
    passwordStrengthSpans[0].innerText = "Weak";
    passwordStrengthSpans[0].style.color = "#111";
    passwordStrengthSpans[1].style.background = "#d13636";
  } else if(strength >= 2 && strength <= 4){
    passwordStrengthSpans[0].innerText = "Medium";
    passwordStrengthSpans[0].style.color = "#111";
    passwordStrengthSpans[1].style.background = "#e6da44";
  } else {
    passwordStrengthSpans[0].innerText = "Strong";
    passwordStrengthSpans[0].style.color = "#fff";
    passwordStrengthSpans[1].style.background = "#20a820";
  }
});