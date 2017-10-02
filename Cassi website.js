/*global $*/
$(document).ready(function () {
     $('.ui.sticky').sticky({
    context: '#example'
  });
    
//image shading
    
    $(".image-container").on("mouseenter", "img", function () {
        $(this).fadeTo("fast", .5);
    });
    
    $(".image-container").on("mouseleave", "img", function () {
       $(this).fadeTo("fast", 1); 
    });
//image-container modal show (figure out better function)
    
$("#img1").click(function() {
    $(".ui.modal.img1").modal("show")
})
$("#img2").click(function() {
    $(".ui.modal.img2").modal("show")
})
$("#img3").click(function(){
    $(".ui.modal.img3").modal("show")
})
$("#img4").click(function(){
    $(".ui.modal.img4").modal("show")
})
    
//Form Validation
    $(".ui.form.email-form").form({
        fields: {
            fName: {
            identifier: "first-name",
            rules: [{
                type: "empty",
                prompt: "You must enter your first name."
            }]
                        },
            lName: {
            identifier: "last-name",
            rules: [{
                type: "empty",
                prompt: "You must enter your last name."
                
            }]
                       },
            eAddress: {
            identifier: "email-address",
            rules: [
                {
                type: "email",
                prompt: "You must enter a valid email."
                }
                    ]
                       },
            email: {
            identifier: "email",
            rules: [
                {
                type: "empty",
                prompt: "Please create a message you would like to send."
                }
                ]
                       }
        }
    }); 

});
