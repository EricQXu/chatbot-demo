(()=>{const e=document.querySelector(".bar-wrapper input"),t=document.querySelector(".bar-wrapper button"),n=document.querySelector(".message-box");function s(){if(e.value.length>0){const t=e.value;e.value="";let s=`<div class="chat message"> <img src="img/user.jpg"> <span> ${t} </span> </div>`,o='<div class="chat response"> <img src="img/chatbot.jpg"> <span class= "new">... </span> </div>';n.insertAdjacentHTML("beforeend",s),setTimeout((()=>{n.insertAdjacentHTML("beforeend",o);const e={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer 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"},body:JSON.stringify({model:"gpt-3.5-turbo",messages:[{role:"user",content:t}]})};fetch("https://api.openai.com/v1/chat/completions",e).then((e=>e.json())).then((e=>{const t=document.querySelector(".response .new");t.innerHTML=e.choices[0].message.content,t.classList.remove("new")})).catch((e=>{document.querySelector(".response .new").innerHTML="Oops! An error occurred. Please try again"}))}),100)}}t.onclick=s,e.addEventListener("keypress",(function(e){"Enter"===e.key&&(e.preventDefault(),s())}))})();