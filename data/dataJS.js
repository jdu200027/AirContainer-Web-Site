document.querySelector('header').innerHTML = `
<div class = "container">
<nav class = "navbar">
  <div class="logo-container">
  <img class="logo-img" src="../images/logo.jpg" />
  <a href = "index.html" class = "navbar-brand">Air Conditioner</a>
  </div>
  <a href = './SignUp.html' class = 'navbar-brand'>
  <i class='fas fa-user'></i
  ></a>
  <div class = "cart">
    <button type = "button" id = "cart-btn">
      <i class = "fas fa-shopping-cart"></i>
      <span id = "cart-count-info"></span>
    </button> 
    <div class = "cart-container">
      <div class = "cart-list">
      </div>
      <div class = "cart-total">
        <h3>Total: $</h3>
        <span id = "cart-total-value"></span>
      </div>
      <button type="submit" id="orderProduct">Order the product</button>
    </div>
  </div>
</nav>
</div>
`;

document.querySelector('main').innerHTML = `
<div class="topImage"></div>
<div class = "container">
  <h2>Our Products</h2>
  <div class = "product-list"></div>
</div>
`

document.querySelector('footer').innerHTML =   `
<div class="container1">
<div class="row">
    <div class="footer-col">
        <h4>copmany</h4>
        <ul>
            <li><a href="#">about us</a></li>
            <li><a href="#">our services</a></li>
            <li><a href="#">privacy policy</a></li>
            <li><a href="../html/dev.html">Project developers</a></li>
        </ul>
    </div>
    <div class="footer-col">
        <h4>get help</h4>
        <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">shipping</a></li>
            <li><a href="#">returns</a></li>
            <li><a href="#">order status</a></li>
            <li><a href="#">payment options</a></li>
        </ul>
    </div>
    <div class="footer-col">
        <h4>online shop</h4>
        <ul>
          <li><a href="#">shiwaki</a></li>
          <li><a href="#">mitsubishi</a></li>
          <li><a href="#">toshiba</a></li>
          <li><a href="#">fujitsu</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4 class="h42">follow us</h4>
        <div class="social-links">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
        </div>
    </div>
</div>
</div>
`