var slideImg = document.getElementById("slideImg");

        var images = new Array(
            "images/najtpaja.jpeg",
            "images/najt1.jpeg",
            "images/najt3.jpeg",
            "images/edita1.jpeg",
            "images/teodora3.jpeg",
            "images/slika1.jpeg",
            "images/tanja3.jpeg",
            "images/nucci1.jpeg",
            "images/najt6.jpeg"
        );

        var len = images.length;
        var i = 0;

        function slider(){
            if( i > len-1){
                i=0;
            }
            slideImg.src = images[i];
            i++;
            setTimeout('slider()',8000);
        }
slideImg();

