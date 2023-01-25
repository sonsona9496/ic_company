let btn_filter = document.querySelector('.category_show');
let left_side = document.querySelector('.left_side');
let iconBars = document.querySelector('.icon_bars');
let lists = document.querySelector('nav ul');
let li = document.querySelectorAll('.li a');
let logo = document.querySelector('nav .logo');
let nav = document.querySelector('nav');
let scrollbtn = document.querySelector('.scroll');
let up = document.querySelector('.btnUp');
// let loading = document.querySelector('.loading');
let body = document.body;
// let en = document.querySelector('.en');
// let ar = document.querySelector('.ar');
// let about_p = document.querySelector('.about p');
let sevice_menu = document.querySelector('.sevice_menu');
let dropwMenu = document.querySelector('.dropmenu');

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
    
}

iconBars.addEventListener('click',()=>{
    lists.classList.toggle('lists_show');
    logo.classList.toggle('close_logo');
    left_side.classList.remove('active_side_left');
    btn_filter.classList.remove('active_filter');
    btn_filter.classList.toggle('close_filter');
})

sevice_menu.onclick = ()=>{
    dropwMenu.classList.toggle('active_drop');
}


btn_filter.addEventListener('click',()=>{
    btn_filter.classList.toggle('active_filter');
    left_side.classList.toggle('active_side_left');
});


