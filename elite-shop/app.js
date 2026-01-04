/* EliteShop - app.js (module) */
const PRODUCTS_URL = 'products.json'

const $ = sel => document.querySelector(sel)
const $$ = sel => Array.from(document.querySelectorAll(sel))

let products = []
let cart = JSON.parse(localStorage.getItem('elite_cart')||'{}')
let wishlist = JSON.parse(localStorage.getItem('elite_wishlist')||'[]')

function saveCart(){localStorage.setItem('elite_cart',JSON.stringify(cart));updateCartCount();}
function saveWishlist(){localStorage.setItem('elite_wishlist',JSON.stringify(wishlist));}

async function loadProducts(){
  const res = await fetch(PRODUCTS_URL)
  products = await res.json()
}

function renderProductsGrid(target, items){
  const container = document.getElementById(target)
  if(!container) return
  container.innerHTML = ''
  items.forEach(p=>{
    const el = document.createElement('div')
    el.className = 'product-card'
    el.innerHTML = `
      <a href="product.html?id=${p.id}"><img loading="lazy" src="${p.images[0]}" alt="${p.name}"></a>
      <div class="product-meta">
        <div class="product-title">${p.name}</div>
        <div class="price">${p.onSale?`<span style=\"text-decoration:line-through;color:#999\">${p.price}€</span> ${p.salePrice}€`:`${p.price}€`}</div>
      </div>
      <div style="margin-top:auto;display:flex;gap:.5rem">
        <button class="btn" data-id="${p.id}" data-action="fav">♥</button>
        <button class="btn primary" data-id="${p.id}" data-action="add">Ajouter</button>
      </div>
    `
    container.appendChild(el)
  })
}

function addToCart(id){
  const p = products.find(x=>x.id==id)
  if(!p) return
  if(cart[id]) cart[id].qty += 1
  else cart[id] = {id:p.id,name:p.name,price:p.onSale?p.salePrice:p.price,image:p.images[0],qty:1}
  saveCart()
  showToast(`${p.name} ajouté au panier`)
}

function toggleWishlist(id){
  id = Number(id)
  if(wishlist.includes(id)){wishlist = wishlist.filter(x=>x!==id);showToast('Retiré des favoris')}
  else{wishlist.push(id);showToast('Ajouté aux favoris')}
  saveWishlist()
}

function updateCartCount(){
  const count = Object.values(cart).reduce((s,i)=>s+i.qty,0)
  $$('#cartCount').forEach(el=>el.textContent = count)
}

function showToast(msg){
  const t = $('#toast')
  t.textContent = msg
  t.classList.add('show')
  setTimeout(()=>t.classList.remove('show'),2200)
}

function renderCart(){
  const list = $('#cartList'); if(!list) return
  list.innerHTML = ''
  Object.values(cart).forEach(it=>{
    const el = document.createElement('div'); el.className='cart-item'
    el.innerHTML = `<img src="${it.image}" alt=""><div style="flex:1"><div>${it.name}</div><div class=\"price\">${it.price}€</div></div>
      <div><input type="number" min=1 value="${it.qty}" data-id="${it.id}" class="qty"></div>
      <div><button class="btn" data-id="${it.id}" data-action="remove">Suppr</button></div>`
    list.appendChild(el)
  })
  const total = Object.values(cart).reduce((s,i)=>s + i.price*i.qty,0)
  $('#cartTotal').textContent = `${total}€`
}

function bindGlobal(){
  document.addEventListener('click',e=>{
    const btn = e.target.closest('button') || e.target.closest('a')
    if(!btn) return
    const id = btn.dataset.id
    const action = btn.dataset.action
    if(action==='add') addToCart(Number(id))
    if(action==='fav') toggleWishlist(Number(id))
    if(action==='remove'){ delete cart[id]; saveCart(); renderCart(); }
  })

  document.addEventListener('input', e=>{
    if(e.target.classList.contains('qty')){
      const id = e.target.dataset.id; const val = Number(e.target.value)
      if(val<1) return
      cart[id].qty = val; saveCart(); renderCart()
    }
  })

  const search = document.getElementById('searchInput')
  if(search){search.addEventListener('input', e=>{
    const q = e.target.value.toLowerCase()
    const filtered = products.filter(p=>p.name.toLowerCase().includes(q)||p.description.toLowerCase().includes(q))
    renderProductsGrid('productsGrid', filtered.slice(0,12))
  })}
}

function initSwiper(){
  if(typeof Swiper!=='undefined'){
    new Swiper('.hero-swiper',{pagination:{el:'.swiper-pagination'},autoplay:{delay:4500},loop:true})
  }
}

function fadeInOnScroll(){
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(en=>{if(en.isIntersecting) en.target.classList.add('visible')})
  },{threshold:0.08})
  $$('.fade-in').forEach(el=>obs.observe(el))
}

async function mountHome(){
  await loadProducts()
  renderProductsGrid('productsGrid', products.slice(0,8))
  renderProductsGrid('promoProducts', products.filter(p=>p.onSale).slice(0,3))
  updateCartCount(); initSwiper(); fadeInOnScroll(); bindGlobal();
  // Promo countdown simple
  const end = Date.now() + 1000*60*60*6
  const cd = ()=>{
    const rem = Math.max(0,end-Date.now());
    const h = String(Math.floor(rem/3600000)).padStart(2,'0');
    const m = String(Math.floor(rem%3600000/60000)).padStart(2,'0');
    const s = String(Math.floor(rem%60000/1000)).padStart(2,'0');
    const el = document.getElementById('countdown'); if(el) el.textContent = `${h}:${m}:${s}`
  }
  cd(); setInterval(cd,1000)
}

async function mountCategory(){
  await loadProducts(); bindGlobal(); updateCartCount();
  const params = new URLSearchParams(location.search); const cat = params.get('cat')
  $('#catalogTitle').textContent = cat?cat:'Tous les produits'
  let list = products.slice()
  if(cat){ list = list.filter(p=>p.category.toLowerCase().includes(cat.toLowerCase())) }
  renderProductsGrid('productsGrid', list)
  // simple filters
  $('#sortSelect')?.addEventListener('change', e=>{
    const v=e.target.value; if(v==='price-asc') list.sort((a,b)=> (a.onSale?a.salePrice:a.price)-(b.onSale?b.salePrice:b.price))
    if(v==='price-desc') list.sort((a,b)=> (b.onSale?b.salePrice:b.price)-(a.onSale?a.salePrice:a.price))
    if(v==='new') list.sort((a,b)=> (b.isNew?1:0)-(a.isNew?1:0))
    renderProductsGrid('productsGrid', list)
  })
}

async function mountProduct(){
  await loadProducts(); bindGlobal(); updateCartCount();
  const id = new URLSearchParams(location.search).get('id')
  const p = products.find(x=>x.id==id)
  if(!p){ document.getElementById('productDetail').textContent='Produit introuvable'; return }
  const cont = document.getElementById('productDetail')
  cont.innerHTML = `
    <div><img src="${p.images[0]}" alt="${p.name}" loading="lazy"></div>
    <div>
      <h2>${p.name}</h2>
      <p class="price">${p.onSale?`${p.salePrice}€ <span style=\"text-decoration:line-through;color:#999\">${p.price}€</span>`:`${p.price}€`}</p>
      <p>${p.description}</p>
      <div class="product-actions">
        <select id="sizeSelect">${p.sizes.map(s=>`<option>${s}</option>`).join('')}</select>
        <button class="btn primary" data-id="${p.id}" data-action="add">Ajouter au panier</button>
        <button class="btn" data-id="${p.id}" data-action="fav">❤</button>
      </div>
    </div>
  `
}

function mountCart(){
  bindGlobal(); updateCartCount(); renderCart();
}

function mountCheckout(){
  bindGlobal(); updateCartCount();
  const s1 = $('#shippingForm'), s2 = $('#paymentForm')
  s1?.addEventListener('submit', e=>{e.preventDefault(); document.getElementById('step1').classList.remove('active'); document.getElementById('step2').classList.add('active')})
  s2?.addEventListener('submit', e=>{e.preventDefault(); document.getElementById('step2').classList.remove('active'); document.getElementById('step3').classList.add('active'); showToast('Paiement simulé — commande confirmée'); localStorage.setItem('elite_orders', JSON.stringify({date:Date.now(),cart:cart})); cart={}; saveCart()})
}

function mountAccount(){
  bindGlobal(); updateCartCount();
  $('#loginForm')?.addEventListener('submit', e=>{e.preventDefault(); showToast('Connexion simulée');})
  const orders = JSON.parse(localStorage.getItem('elite_orders')||'null')
  if(orders) $('#ordersList').textContent = 'Dernière commande simulée — voir console';
}

// Auto-mount based on page
document.addEventListener('DOMContentLoaded', ()=>{
  const path = location.pathname.split('/').pop();
  if(path===''||path==='index.html') mountHome()
  if(path==='category.html') mountCategory()
  if(path==='product.html') mountProduct()
  if(path==='cart.html') mountCart()
  if(path==='checkout.html') mountCheckout()
  if(path==='account.html') mountAccount()
})

export{}
