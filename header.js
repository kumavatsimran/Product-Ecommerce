
var nav=`  
<header class="container-fluide  position-sticky bg top-0 z-3 bg-black">
<div class="container ">
    <nav class="navbar navbar-expand-lg  ">
       
        <span class="text-white fs-2">Cascade</span>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="menu">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-4">
              <li class="nav-item">
                <a class="nav-link active text-white " href="index.html" target="_parent">Shop</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link text-white" href="home.html"  target="_parent" >
                  Home
                </a>
              
              </li>
              <!-- <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle menulist text-white" href="#" role="button" data-bs-toggle="dropdown" >
                  Product
                </a>
                <ul class="dropdown-menu bg-black rounded-3">
                  <li><a class="dropdown-item menulist text-white" href="face.html" target="_parent">Face</a></li>
                  <li><a class="dropdown-item  menulist text-white" href="suncare.html" target="_parent">Suncare</a></li>
                  <li><a class="dropdown-item  menulist text-white" href="body.html" target="_parent">Body</a></li>
                </ul>
              </li> -->
         
              <li class="nav-item">
                <a class="nav-link  text-white " aria-disabled="true" href="#about">About Us</a>
              </li>
              <!-- <li class="nav-item">
                <a class="nav-link  text-white " href="" target="_parent" aria-disabled="true">Career</a>
              </li> -->
              <!-- <li class="nav-item">
                <a class="nav-link  text-white " aria-disabled="true">Buy Now</a>
              </li> -->
              <li class="nav-item">
                <a class="nav-link  text-white " href="blog.html"  target="_parent">Blog</a>
              </li> 
            </ul>
            <ul class="navbar-nav ">
              
              <li>
                    <a class="nav-link  text-white " href="account.html" target="_parent"><i class="fa-solid fa-user"></i><a>
              </li>
             </ul>
             <!--  -->
             <button class="btn  align-items-center justify-content-center d-flex" type="button" >
              <a class="nav-link  text-white " aria-disabled="true" href="cart.html" target="_parent"><i class="fa-solid fa-cart-shopping"></i><a>
               <span id="itemnumber" class="text-white bg-warning">0</span>
             </button>

             <!--  -->
             <button type="button " class="btn  align-items-center justify-content-center d-flex" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
              <i class="fa-solid fa-magnifying-glass text-white"></i>
              </button> 

          </div>
      </nav>
</div>
</header> `
document.getElementById('header').innerHTML=nav;
// function viweitem(params) {
//   var cart_items = localStorage.getItem('cart_items');
//   // document.getElementById('itemnumber').innerHTML=cart_items.length;

//   if (cart_items!=null) {
//     document.getElementById('itemnumber').innerHTML=cart_items.length;
//   } else {
//     document.getElementById('itemnumber').innerHTML=0;
//   }
 
// }
// viweitem();