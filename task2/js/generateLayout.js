/**
 * 
 */
function generateLayout() {
    document.getElementById('buttons').innerHTML = '';
     
    var e = document.createElement("div");
    e.setAttribute("id","content"); 
  
    var div1 = document.createElement("div"); 
    div1.setAttribute("class","img1");
    var img1 = document.createElement("img");
    img1.setAttribute("src","./img/foto1.png")
    var p1 = document.createElement("p");
    p1.innerHTML = "<strong>Фото 1</strong>"; 
    div1.appendChild(img1);  
    div1.appendChild(p1);

    var div2 = document.createElement("div"); 
    div2.setAttribute("class","img1");
    var img2 = document.createElement("img");
    img2.setAttribute("src","./img/foto2.png")
    var p2 = document.createElement("p");
    p2.innerHTML = "<strong>Фото 2</strong>"; 
    div2.appendChild(img2);  
    div2.appendChild(p2);

    var div3 = document.createElement("div"); 
    div3.setAttribute("class","img1");
    var img3 = document.createElement("img");
    img3.setAttribute("src","./img/foto3.png")
    var p3 = document.createElement("p");
    p3.innerHTML = "<strong>Фото 2</strong>"; 
    div3.appendChild(img3);  
    div3.appendChild(p3);

    var div4 = document.createElement("div"); 
    div4.setAttribute("class","img1");
    var img4 = document.createElement("img");
    img4.setAttribute("src","./img/foto4.png")
    var p4 = document.createElement("p");
    p4.innerHTML = "<strong>Фото 4</strong>"; 
    div4.appendChild(img4);  
    div4.appendChild(p4);

    var div5 = document.createElement("div"); 
    div5.setAttribute("class","img1");
    var img5 = document.createElement("img");
    img5.setAttribute("src","./img/foto5.png")
    var p5 = document.createElement("p");
    p5.innerHTML = "<strong>Фото 5</strong>"; 
    div5.appendChild(img5);  
    div5.appendChild(p5);

    var div6 = document.createElement("div"); 
    div6.setAttribute("class","img1");
    var img6 = document.createElement("img");
    img6.setAttribute("src","./img/foto6.png")
    var p6 = document.createElement("p");
    p6.innerHTML = "<strong>Фото 6</strong>"; 
    div6.appendChild(img6);  
    div6.appendChild(p6);
    
    e.appendChild(div1);
    e.appendChild(div2);
    e.appendChild(div3);
    e.appendChild(div4);
    e.appendChild(div5);
    e.appendChild(div6);

    document.body.appendChild(e);        
    return true;
}