window.onload=function(){
  var doc=document.getElementsByClassName("img")
  doc[0].style.transform="scale(1.0)";
}

function imageChange(n)
{
    var circle=document.getElementsByClassName("circle")
    var img=document.getElementsByClassName("img-content")
    var doc=document.getElementsByClassName("img")
    circle[n-1].style.backgroundColor="white";
    img[n-1].style.display="block"
    doc[n-1].style.transform="scale(1)";

    for(i=0;i<5;i++)
    {
        if(i!=n-1)
        {
            circle[i].style.removeProperty("background-color");
            img[i].style.display="none";
            doc[i].style.transform="scale(1.1)";
        }
    }
}

var cart=document.getElementById("addToCart")

f=screen.availWidth
function openCart(){
    if(f < 1636 && f> 1200){
        cart.style.left="74%"
    }
    else if(f < 1200 && f> 200){
        cart.style.left="31%"
    }
}

function closeCart()
{  
    cart.style.left="100%"    
}

let nav=document.getElementById("left-side-navigation")
let lineX=document.getElementsByClassName("cross")
var toggle=1;
document.getElementById("parallel-lines").addEventListener("click",()=>{
    setTimeout("",500)
    if(toggle==1)
    {
        nav.style.left="-48px"
        lineX[0].classList.add("rotate-x")    
        lineX[1].classList.add("rotate-y") 
        lineX[2].classList.add("rotate-x")
        toggle=0; 
    }  
    else{
        nav.style.left="-375px"
        lineX[0].classList.remove("rotate-x")
        lineX[1].classList.remove("rotate-y")
        lineX[2].classList.remove("rotate-x")
        toggle=1;
    }
})
var cartWidth=395;
cart.style.left=screen.availWidth





// var pageOffSet=window.pageOffSet
// var header=document.getElementById("main-header-bar")
// window.onscroll=()=>{
//     if(pageOffSet != 0)
//     {
//         header.style.height="65px"
//         header.style.position="relative"
//         header.style.top="0px"
//     }
//     else{
//         alert("D")
//         header.style.height="105px"

//     }
// }


var count=document.getElementById("count")
var slideCount=1
function go()
{
    if( slideCount> 0 && slideCount < 5){
        document.getElementById("slider-wrap").style.transform=`translate(-${slideCount*91}%)`
        slideCount++;
    }
    count.textContent=slideCount
}

function back()
{
    if( slideCount>1 && slideCount<=5){
        slideCount--;
        document.getElementById("slider-wrap").style.transform=`translate(-${(slideCount*91)-91}%)`
    }
    count.textContent=slideCount
}

//on hover image changing function
function hideFront(n)
{
   
    var img=document.getElementsByClassName("front-img")
    var sizes=document.getElementsByClassName("sizes")
    sizes[n].style.opacity="1"
    sizes[n].style.top="374px"
    img[n].style.display="none";
}

function showFront(n)
{
    var img=document.getElementsByClassName("front-img")
    var sizes=document.getElementsByClassName("sizes")
    sizes[n].style.opacity="0"
    sizes[n].style.top="394px";
    img[n].style.display="block";
}
// var Xcoordinates
// function coordinates(event)
// {
//     // Xcoordinates=event.clientX
//     var el=document.getElementById("slider-wrap")
//     if(window.getComputedStyle(el).cursor !="grab"){

//     }
// }

var coordinateX=0;
var ondowncrnt=0
var mouseup=true;
var slide=document.getElementById("slider-wrap")
let i=0;
function coordinates(event)
{
   coordinateX=event.clientX 
   if(mouseup==false)
   {   
       slide.style.transform=`translate(-${i}%)`
       
   }
    if(ondowncrnt<event.clientX){
        i--;
    }
    if(ondowncrnt>event.clientX){
        i++
    }
}

function mouseDown(){
   slide.style.cursor="grabbing"
   slide.style.userSelect="none"
   ondowncrnt=coordinateX;
   
   mouseup=false
}

function mouseUp(){
    slide.style.cursor="grab"
    slide.style.userSelect="all"
    mouseup=true;
    
}


window.onload=function f1()
{
    var screenWidth=screen.availWidth-94;
    var product=document.getElementsByClassName("products")
    if(screenWidth < 1400)
    {
       var j=0;
       for(var i=0;i<40;){
            product[i].style.left=`${screenWidth*j}px`
            i+=2;
            j++;
       }
    }
}


// var leftArrow=document.getElementById("previous")
// var rightArrow=document.getElementById("next")
var slider=document.getElementById("imgContainer")
var counts=document.getElementById("count1")
var count1=1;

function leftArrow(){

    if(count1>1 && count1<=2)
    {
        slider.style.transform=`translate(0%)`
        count1--;
    }
}
function rightArrow(){
  
    if(count1>0 && count1<2)
    {
        
        slider.style.transform=`translate(-${49.57}%)`
        count1++;
    } 
}
// leftArrow.addEventListener("onclick",()=>{
//     if(count1>1 && count<=2)
//     {
//         slider.style.transform=`translateX(-${0}%)`
//         count1--;
//     }
// })

// rightArrow.addEventListener("onclick",()=>{
//     alert("d")
//     if(count1>0 && count<2)
//     {
//         slider.style.transform=`translateX(-${-49.57}%)`
//         count1++;
//     } 
// })
