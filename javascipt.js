document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000, // Duration of animation in milliseconds
        easing: 'ease-in-out', // Easing function for the animations
        once: true, // Animation happens only once
        mirror: false, // Whether elements should animate out while scrolling past them
    });
}); 
        // Get the navbar element
        const navbar = document.querySelector('.navbar');

        // Function to handle the scroll event
        function handleScroll() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        // Add event listener for the scroll event
        window.addEventListener('scroll', handleScroll);


let h4=document.querySelectorAll('.sectionEight .col-6 h4');
console.log(h4);
for(let h of h4){
    let next=h.nextElementSibling;
   next.style.display='none'

   

    h.onclick=function(){

       if(next.style.display ==='none'){
        next.style.display='block';
       }else{
        next.style.display='none';


       }
        
    }
} 







let li=document.querySelectorAll('.sectionNine ul li');
for(let l of li){
    l.onclick=function(){
        let type=l.innerHTML;
        let relatedPhto=document.querySelectorAll('.sectionNine .row  .' + type);
        let allImage=document.querySelectorAll('.sectionNine .row > div')
        for(let imge of allImage){
            imge.style.display='none';
        }
        for(let image of relatedPhto){
            image.style.display='block'
        }
       
   

    }

    
}



//start of colors
let colors=document.querySelectorAll('.colors ul li')
for(let color of colors){
    color.onclick=function(){
        let typ_color=event.target.getAttribute('name');
    document.querySelector('head link:last-of-type').setAttribute('href',typ_color+'.css');


    }
}

