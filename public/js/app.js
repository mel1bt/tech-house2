
$(document).ready(function() {

	 $('body').vegas({
        transitionDuration: 50000,
        slides: [

            {   src: 'img/video/fondo.jpg',
            video: {
                src: [
                    'img/video/video5.mp4',
                ],
                loop: true,
                mute: true
            }
        }
        
        ],
    transition: 'fade',
     overlay:  'dist/vegas/overlays/05.png'
    });

});