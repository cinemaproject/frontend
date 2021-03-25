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