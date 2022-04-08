const navVisible =()=>{
    const button = document.querySelector('.burger');
    const navVisible = document.querySelector('.navbar');
    const cross = document.querySelector('.cross')
    
    button.addEventListener('click', e=> {
        navVisible.classList.add('nav-active');
        
    })
    cross.addEventListener('click',e=>{
        navVisible.classList.remove('nav-active')
    })
}
navVisible();



// var owl = $('.owl-carousel');
// owl.owlCarousel({
//     items:4,
//     loop:true,
//     margin:10,
//     autoplay:true,
//     autoplayTimeout:5000,
//     autoplayHoverPause:true,
//     responsiveClass: true,
//     nav:false,
//     responsive:{
//         0:{
//             items:1,
//             nav:false
//         },
//         600:{
//             items:3,
//             nav:false
//         },
//         1000:{
//             items:4,
//             nav:false,
//             loop:true
//         }
//     }
// });
// $('.play').on('click',function(){
//     owl.trigger('play.owl.autoplay',[2000])
// })
// $('.stop').on('click',function(){
//     owl.trigger('stop.owl.autoplay')
// })
const scrollbtn = document.querySelector('.up');


scrollbtn.addEventListener('click',()=>{
    window.scrollTo(0,0)

})

function btnVisble(){
    const btnVisble = document.querySelector('.up')
    if(this.scrollY >= 350) btnVisble.style.display = 'block';
    else btnVisble.style.display = 'none';
}
window.addEventListener('scroll', btnVisble)
