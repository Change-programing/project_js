// blog
let title = document.getElementById("title");
let content = document.getElementById("content");
let AddBtn = document.getElementById("AddBtn");
let list = document.getElementById("list");

AddBtn.addEventListener("click" ,function(){
    console.log(title.value);
    console.log(content.value);
    //console.log(list.value);
    //console.log(list.innerHTML);
    list.innerHTML = list.innerHTML+`
    <div id="list">
        <div class="article">
            <h2>${title.value}</h2>
            <p>${content.value}</p>
        </div>
    </div>
    `;
    title.value = "";
    content.value = "";
})

