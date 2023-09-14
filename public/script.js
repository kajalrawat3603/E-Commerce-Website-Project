//navigation bar
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");
if (bar){
  bar.addEventListener('click',() =>{
    nav.classList.add('active');
  })
}
if (close){
  close.addEventListener('click',() =>{
    nav.classList.remove('active');
  })
}

//SLIDER
var img = document.getElementById('img');
    var slides = ['https://cdn.igp.com/f_auto,q_auto,t_pnopt32prodlp/banners/birthday_d_igp_banner_20221227.jpg','https://cdn.igp.com/f_auto,q_auto,t_pnopt32prodlp/banners/cakes_d_igp_banner_20220920.jpeg','https://cdn.igp.com/f_auto,q_auto,t_pnopt32prodlp/banners/anniversary_d_igp_banner_20221226.jpg','https://cdn.igp.com/f_auto,q_auto,t_pnopt32prodlp/banners/flowers_d_igp_banner_20220920.jpeg'];
    
    var Start=0;
    function slider(){
        if(Start<slides.length){
            Start=Start+1;
        }
        else{
            Start=1;
        }
        console.log(img);
        img.innerHTML = "<img src="+slides[Start-1]+">";
       
    }
    setInterval(slider,2000);


//zoom into singel product img
document.querySelectorAll('.pro-img img').forEach(img =>{
  img.onclick = () =>{
    document.querySelector('.pop-up').style.display='block';
    document.querySelector('.pop-up img').src = img.getAttribute('src');
  }
})
document.querySelector('.pop-up span').onclick = () =>{
  document.querySelector('.pop-up').style.display='none';
}

//change product images
var mainimg = document.getElementById("main");
var smallimg = document.getElementsByClassName("small-img");
smallimg[0].onclick = function () {
mainimg.src = smallimg[0].src;
}
    smallimg[1].onclick = function () {
      mainimg.src = smallimg[1].src;
    }
    smallimg[2].onclick = function () {
      mainimg.src = smallimg[2].src;
    }
    smallimg[3].onclick = function () {
      mainimg.src = smallimg[3].src;
    }


    var check = false;

function changeVal(el) {
  var qt = parseFloat(el.parent().children(".qt").html());
  var price = parseFloat(el.parent().children(".price").html());
  var eq = Math.round(price * qt * 100) / 100;
  
  el.parent().children(".full-price").html( eq + "€" );
  
  changeTotal();      
}

function changeTotal() {
  
  var price = 0;
  
  $(".full-price").each(function(index){
    price += parseFloat($(".full-price").eq(index).html());
  });
  
  price = Math.round(price * 100) / 100;
  var tax = Math.round(price * 0.05 * 100) / 100
  var shipping = parseFloat($(".shipping span").html());
  var fullPrice = Math.round((price + tax + shipping) *100) / 100;
  
  if(price == 0) {
    fullPrice = 0;
  }
  
  $(".subtotal span").html(price);
  $(".tax span").html(tax);
  $(".total span").html(fullPrice);
}

$(document).ready(function(){
  
  $(".remove").click(function(){
    var el = $(this);
    el.parent().parent().addClass("removed");
    window.setTimeout(
      function(){
        el.parent().parent().slideUp('fast', function() { 
          el.parent().parent().remove(); 
          if($(".product").length == 0) {
            if(check) {
              $("#cart").html("<h1>The shop does not function, yet!</h1><p>If you liked my shopping cart, please take a second and heart this Pen on <a href='https://codepen.io/ziga-miklic/pen/xhpob'>CodePen</a>. Thank you!</p>");
            } else {
              $("#cart").html("<h1>No products!</h1>");
            }
          }
          changeTotal(); 
        });
      }, 200);
  });
  
  $(".qt-plus").click(function(){
    $(this).parent().children(".qt").html(parseInt($(this).parent().children(".qt").html()) + 1);
    
    $(this).parent().children(".full-price").addClass("added");
    
    var el = $(this);
    window.setTimeout(function(){el.parent().children(".full-price").removeClass("added"); changeVal(el);}, 150);
  });
  
  $(".qt-minus").click(function(){
    
    child = $(this).parent().children(".qt");
    
    if(parseInt(child.html()) > 1) {
      child.html(parseInt(child.html()) - 1);
    }
    
    $(this).parent().children(".full-price").addClass("minused");
    
    var el = $(this);
    window.setTimeout(function(){el.parent().children(".full-price").removeClass("minused"); changeVal(el);}, 150);
  });
  
  window.setTimeout(function(){$(".is-open").removeClass("is-open")}, 1200);
  
  $(".btn").click(function(){
    check = true;
    $(".remove").click();
  });
});