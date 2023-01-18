var slideImg = document.getElementById("slideImg");

        var images = new Array(
            "images/slike/najtpaja.jpeg",
            "images/slike/najt1.jpeg",
            "images/slike/najt3.jpeg",
            "images/slike/edita1.jpeg",
            "images/slike/teodora3.jpeg",
            "images/slike/slika1.jpeg",
            "images/slike/tanja3.jpeg",
            "images/slike/nucci1.jpeg",
            "images/slike/najt6.jpeg"
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

