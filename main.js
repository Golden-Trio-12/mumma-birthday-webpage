var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL("https://marketplace.canva.com/EAFYJKGkaTQ/1/0/1600w/canva-white-and-gold-modern-greeting-happy-birthday-card-MAo89x0go4c.jpg", function(Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(200);
        block_image_object.scaleToHeight(400);
        block_image_object.set({
            top:0,
            left:18
        });
        canvas.add(block_image_object);
    });
	
}

function playSound(){
    x.play();	
}

