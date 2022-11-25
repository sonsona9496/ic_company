let btn_filter = document.querySelector('.category_show');
let left_side = document.querySelector('.left_side');
let iconBars = document.querySelector('.icon_bars');
let lists = document.querySelector('nav ul');
let li = document.querySelectorAll('.li a');
let logo = document.querySelector('nav .logo');
let nav = document.querySelector('nav');
let scrollbtn = document.querySelector('.scroll');
let up = document.querySelector('.btnUp');
let loading = document.querySelector('.loading');
let body = document.body;
let en = document.querySelector('.en');
let ar = document.querySelector('.ar');
let about_p = document.querySelector('.about p');
let sevice_menu = document.querySelector('.sevice_menu');
let dropwMenu = document.querySelector('.dropmenu');

// Services
let services = document.querySelector('.services');
let services_card = document.querySelectorAll('.services_card');
// About
// let about = document.querySelector('#about');
let about_content = document.querySelector('.about_content');
let cont_image = document.querySelector('.about_image');
// Team
let team_h1 = document.querySelector('.our_team h1');
let our_team = document.querySelector('.our_team');
let team_card = document.querySelectorAll('.team_card');
// Gallary
let gallary_h1 = document.querySelector('.gallary h1');
// let gallary = document.querySelector('.gallary');
let gallary_cont_image = document.querySelectorAll('.gallary_cont_image');
// Articles
let articles_h1 = document.querySelector('.articles_home h1');
let card_article_home = document.querySelectorAll('.card_article_home');
let articles = document.querySelector('.articles');
// ////////////////////////////////////////////////////


// OnScroll 
onscroll = function(){
    // Btn Scroll Top
    if(scrollY >= 100){
        // to add btn scroll up
        up.classList.add('show');
        // to add bg for navbar
        nav.classList.add('active_nav')
    }else{
        // to remove btn scroll up
        up.classList.remove('show');
        // to remove bg for navbar
        nav.classList.remove('active_nav')
    }
    // return scroll to 0
    up.onclick = function(){
        scrollTo({
            top: 0,
            behavior:"smooth"
        });
    }
    //services
    services_card.forEach(element => {
        if(scrollY >= services.offsetTop -450){
            element.classList.add('animation');
        }else{
            element.classList.remove('animation');
        }
    });
    //About Content
    if(this.scrollY >= about_content.offsetTop - 400){
        about_content.classList.add('animation');
    }else{
        about_content.classList.remove('animation');
    }
    //About Image
    if(this.scrollY >= cont_image.offsetTop - 400){
        cont_image.classList.add('animation');
    }else{
        cont_image.classList.remove('animation');
    }
    // Team H1
    if(this.scrollY >= team_h1.offsetTop - 400){
        team_h1.classList.add('animation');
    }else{
        team_h1.classList.remove('animation');
    }
    //Team
    team_card.forEach(element => {
        if(this.scrollY >= element.offsetTop -400){
            element.classList.add('animation');
        }else{
            element.classList.remove('animation');
        }
    });
    // Gallary H1
    if(this.scrollY >= gallary_h1.offsetTop - 400){
        gallary_h1.classList.add('animation');
    }else{
        gallary_h1.classList.remove('animation');
    }
    //Gallary
    gallary_cont_image.forEach(element => {
        if(this.scrollY >= element.offsetTop -400){
            element.classList.add('animation');
        }else{
            element.classList.remove('animation');
        }
    });
    // Articles H1
    if(this.scrollY >= articles_h1.offsetTop - 400){
        articles_h1.classList.add('animation');
    }else{
        articles_h1.classList.remove('animation');
    }
    //Articles
    card_article_home.forEach(element => {
        if(this.scrollY >= element.offsetTop -400){
            element.classList.add('animation');
        }else{
            element.classList.remove('animation');
        }
    });
    // ==================================
    
}
// Change Page Direction
// ar.addEventListener('click',()=>{
//     ar.style.display = 'none';
//     body.style.direction = 'rtl';
//     en.style.display = 'block';
// })
// en.addEventListener('click',()=>{
//     en.style.display = 'none';
//     body.style.direction = 'ltr';
//     ar.style.display = 'block';

// })

iconBars.addEventListener('click',()=>{
    lists.classList.toggle('lists_show');
    logo.classList.toggle('close_logo');
    left_side.classList.remove('active_side_left');
    btn_filter.classList.remove('active_filter');
    btn_filter.classList.toggle('close_filter');
})

// li.forEach(ele =>{
//     ele.addEventListener('click' ,()=>{
//         li.forEach(ele=>{
//             ele.classList.remove('active_link');
//             dropwMenu.classList.remove('active_drop');
//         });
//         ele.classList.add('active_link');
//     })
// })
sevice_menu.onclick = ()=>{
    dropwMenu.classList.toggle('active_drop');
}
btn_filter.addEventListener('click',()=>{
    btn_filter.classList.toggle('active_filter');
    left_side.classList.toggle('active_side_left');
});



