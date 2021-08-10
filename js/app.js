$(document).ready(function(){
    $('.chat-circle').click(function(){
      $('.chat-square').toggle(300)
    })
  })

  $(document).ready(function(){
   $('.fo-sub').click(function(){
     let name = $('#name').val()
     let email = $('#email').val()
     let credintial = [name, email]
     $('.chat-square').hide();
     $('.popUpThankYou').show();
     $('.popUpThankYou').append('Hi '+ name + '<p>' + '<br>'+ 'Thank you for sumbitting your contact details'+'<p>');
     $('.chat-circle').click(function(){
       $('.popUpThankYou').hide()
     })   
    })  
  })
    $(document).scroll(function(){
      if($(window).scrollTop()>108){
       $('.bg-dark22').addClass('fixed-top')
      }else{
        $('.bg-dark22').removeClass('fixed-top')
      }
    })

    $(document).ready(function () {
     $(window).scroll(function () {      
     if($(window).scrollTop()>500){
       $('#scroll_button').show()
     }else{
       $('#scroll_button').hide()
     }
     });
   });


   $(document).ready(function(){
     $('#scroll_button').click(function (){
     $('html, body').animate({ scrollTop: 0}, 300);
    })
   })

   $(document).ready(function(){
     $(".hover-item-parent, .hover-menu").hover(function(){
       $('.hover-menu').toggleClass('hover-menu-block');
     });          
   })

   //GSAP Text Annimation

   const words = ["Cloud Servers", "Stable Hosting", "Database Backup", "Offline Mode"]

   let masterTl = gsap.timeline({repeat: -1})

    words.forEach(word => {
    let tl = gsap.timeline({repeat:1, yoyo: true, repeatDelay: 1})
    tl.to(".text-animated-child", {duration: 1, text: word})
    masterTl.add(tl)
    })