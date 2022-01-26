
let first=document.getElementById("first")
fetch("Untitled-1.json").then((response)=>{return response.json()
}).then((data)=>{first.innerHTML=data.name})