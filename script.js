
const list = [{
    Image: "asset/image/pro33.jpg",
    id: 1,
    name: "Sun Protection cream  ",
    parg: "Provides a shimmering dose of nourishment with the aid of four key oils.",
    price: 38.00
},
{
    Image: "asset/image/pro44.jpg",
    id: 2,
    name: "Surf Mud Body Butter", parg: "Great sun protection with wonderful new ingredients.", price: 48.00
},
{
    Image: "asset/image/pro55.jpg",
    id: 3,
    name: "Active Face Wash", parg: "Made with a centuries-old recipe of African black soap for thorough wash.", price: 22.00
},
{
    Image: "asset/image/pro66.jpg",
    id: 4,
    name: "Savasana Body Oil", parg: "Your parched body quencher in a bottle -soothing and hydrating.", price: 48.00
},
{
    Image: "asset/image/sunc1.jpg",
    id: 5,
    name: "Sun Protection Oil", parg: "Provides a shimmering dose of nourishment with the aid of four key oils.", price: 38.00
},
{
    Image: "asset/image/lipbam1.jpg",
    id: 6,
    name: "rose lipbam", parg: "Mega-hydrating and fast-absorbing serum reviving your skin..", price: 55.00
},
{
    Image: "asset/image/roller1.jpg",
    id: 7,
    name: "Face Rescue", parg: "Made with a centuries-old recipe of African black soap for thorough wash.", price: 22.00
},
{
    Image: "asset/image/box1.jpg",
    id: 8,
    name: "Face Rescue", parg: "Made with a centuries-old recipe of African black soap for thorough wash.", price: 88.00
},
{
    Image: "asset/image/box33.jpg",
    id: 9,
    name: "Face Toner", parg: "Made with a centuries-old recipe of face toner for thorough wash.", price: 50.00
},


];
// localStorage.setItem('list',JSON.stringify(list))

function product(list) {
    // var lists=localStorage.setItem('list',JSON.parse(list))
    const productListDiv = document.getElementById("card")
    productListDiv.innerHTML = ``;

    for (let i = 0; i < list.length; i++) {
        const lists = list[i];
        productListDiv.innerHTML += `
                    <div class="col-lg-4 col-sm-6 mt-3">
                          <div class=" ">
                              <div class="proimg">
                              <img src="${lists.Image}" class="imgg" >
                              </div>
                              <h3 class="text-white line">${lists.name}</h3>
                              <p class="text-white"> ${lists.parg}</p>
                              <div class="justify-content-between d-flex">
                              <span class="text-white">$${lists.price}</span>
                              <button class="btn btn-warning" type="button" onClick="add_cart(`+ i + `)"><i class="fa-solid fa-cart-shopping"></i></button>
                              </div>
                           
                          </div> 
                      </div>
                       
                    `
    }
}


function add_cart(cart_item) {
    console.log(cart_item);
    var cart_items = localStorage.getItem('cart_items');
    console.log(cart_items);
 
if (!cart_items) {
    cart_items = [];
    } else {
    cart_items = JSON.parse(cart_items);
    }
    item = list[cart_item]
    item['quantity'] = 1;
    console.log(item);

    var find_index = cart_items.findIndex((check_item, item_index) => {
        console.log('check_item')

        if (check_item.id == item.id) {
            console.log('check_item inside if')
            cart_items[item_index]['quantity'] = cart_items[item_index]['quantity'] + 1;
            return 1;
        }
    }

    );
    console.log('find_index')
    console.log(find_index)
    if (find_index < 0) {
        cart_items.push(item)
    }

    document.getElementById('itemnumber').innerHTML = cart_items.length;
    cart_items = JSON.stringify(cart_items)
    localStorage.setItem('cart_items', cart_items);
    alert('your product is added');
    
    viweitem();
}


// 
function cart() {
    console.log('aaaa');
    const cartListDiv = document.getElementById("cart")
    cartListDiv.innerHTML = ``;

    var cart_items = localStorage.getItem('cart_items');

    // if (!cart_items) {
    // cart_items = [];
    // } else {
    cart_items = JSON.parse(cart_items);
    // }
    var total = 0;
    for (let i = 0; i < cart_items.length; i++) {
        const carts = cart_items[i];
        subtotal =parseFloat(carts.price*carts.quantity) ;
        
        cartListDiv.innerHTML += `
        <div class="row border-bottom border-secondary pb-3" id="selectpro" id="productrow">
               <div class="col-lg-3 col-sm-6 mt-3">
                      <img class="p-3" id="cartimg" src="${carts.Image}">
                  </div>
                  <div class="col-lg-3 col-sm-6 mt-3">
                     <h5 id="cartname" class="text-white p-3 align-middle">${carts.name}</h5>
                     <P id="cartpera" class="text-white align-middle"> ${carts.parg}</P>
                  </div>
                    <div class="col-lg-2 col-sm-6 mt-3">
                        <h5 id="price" class="text-white p-3 align-middle   ">$${carts.price}</h5>
                     </div>
                     <div class="col-lg-2 col-sm-6 mt-3 p-3">
                        <h5 id="quantity" class="text-white p-3 align-middle   ">${carts.quantity}</h5>
                        <button class="btn btn-warning m-2" type="button" onClick="delet(`+ i + `)">delet</button>
                     </div>
                <div class="col-lg-2 col-sm-6 mt-3">
                        <h5 id="subtotal" class="text-white p-3 align-middle   ">$${subtotal}</h5>
                     </div>
                     </div>
                    
                    `
                    
        
            total =parseFloat(total+subtotal) ;


    }
   
   document.getElementById('total').innerHTML = total;
   console.log(c);

}

function delet(data) {
    var data_items = localStorage.getItem('cart_items');
    console.log(data_items);
    data_items = JSON.parse(data_items);

    data_items.splice(data, 1);
    console.log(data_items)
    localStorage.setItem("cart_items", JSON.stringify(data_items));
    document.getElementById('itemnumber').innerHTML = data_items.length;

    cart();
}


function viweitem(params) {
    var cart_items = localStorage.getItem('cart_items');
    var cart_items = JSON.parse(cart_items);

    if (cart_items != null) {
        document.getElementById('itemnumber').innerHTML = cart_items.length;
    }

}
viweitem();

function clearcart() {
    localStorage.clear('cart_items');

    const cartListDiv = document.getElementById("cart")
    cartListDiv.innerHTML = ``;
    document.getElementById('itemnumber').innerHTML = 0;
}

