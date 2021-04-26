$(document).ready(function(){
    
    $(".search-action").keydown(function (e) {
        if (e.which === 13) {
            // Do something
            e.preventDefault();
            console.log("it works");
            var searchText = $('.search-action').val();
            if(searchText == "ирония") {
                console.log("it works");
                window.location.href = "./film-card-ironiya_sudby_ili_s_legkim_parom.html";
            }
        }
    });

});

$(function(){
    data = '{"faces": [{"index": 0, "actor_name": "Bryan Cranston", "img_url": "https://m.media-amazon.com/images/M/MV5BMTA2NjEyMTY4MTVeQTJeQWpwZ15BbWU3MDQ5NDAzNDc@._V1_UX214_CR0,0,214,317_AL_.jpg", "face_image_url": "http://127.0.0.1:5000/images/9199b5a2-5e16-48ef-90db-a27c7f53e92b_0.jpg", "bbox": "[692 193 815 352]"}, {"index": 1, "actor_name": "Don Michael Paul", "img_url": "https://m.media-amazon.com/images/M/MV5BYWE2Y2UyYWItZTUyNC00ZDRhLTkxZTctN2E3NzkyZjZlZWI5XkEyXkFqcGdeQXVyMjYwNTQxOTA@._V1_UY317_CR130,0,214,317_AL_.jpg", "face_image_url": "http://127.0.0.1:5000/images/9199b5a2-5e16-48ef-90db-a27c7f53e92b_1.jpg", "bbox": "[229 184 342 323]"}], "result_image": "http://127.0.0.1:5000/images/9199b5a2-5e16-48ef-90db-a27c7f53e92b.jpg"}';
    var dataJson = JSON.parse(JSON.stringify(data));
    var objectJson = jQuery.parseJSON(dataJson);
    document.getElementById("a").innerHTML = "Object actor_name : "+objectJson.faces[0].actor_name + "<br> Object result_image : " + objectJson.result_image;
  });