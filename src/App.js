/* eslint-disable jsx-a11y/anchor-is-valid */

import './styles.css';

import 'font-awesome/css/font-awesome.min.css';

// import  './layout.js'

const  App = () => {

  window.addEventListener('mouseup',function(event){
    var nav = document.querySelector('.nav__list');
    if(event.target !== nav && event.target.parentNode !== nav){
      nav.style.left = "-40rem";
      document.body.classList.remove("active");
    }
  }); 

  const openNav =() => {
    const openNav = document.querySelector(".hamburger");
    console.log("🚀 ~ file: App.js ~ line 13 ~ openNav ~ openNav", openNav)
    const nav = document.querySelector(".nav__list");
    const navLeft = nav.getBoundingClientRect().left;
    if (navLeft < 0) {
      nav.style.left = "0";
      document.body.classList.add("active");
    }

  }

  const closeNav =()=> {
    const nav = document.querySelector(".nav__list");
    const navLeft = nav.getBoundingClientRect().left;
    if (navLeft === 0) {
      nav.style.left = "-40rem";
      document.body.classList.remove("active");
    }
  }

  return (
    <div>
    {/* <!-- Header --> */}
      <header className="header" id="header">
          <nav className="nav">
              <div className="nav__center container">
                  <div className="logo">
                      <h1>Fruity</h1>
                  </div>

                  <div className="nav__menu">
                      <ul className="nav__list">
                          <li className="nav__item">
                              <a href="#header" className="nav__link scroll-link">Home</a>
                          </li>

                          <li className="nav__item">
                              <a href="#new" className="nav__link scroll-link">New</a>
                          </li>

                          <li className="nav__item">
                              <a href="#all" className="nav__link scroll-link">Shop</a>
                          </li>

                          <li className="nav__item">
                              <a href="#featured" className="nav__link scroll-link">Featured</a>
                          </li>

                          <li className="nav__item">
                              <a href="#contact" className="nav__link scroll-link">Contact</a>
                          </li>

                          <li className="nav__close flex__center" onClick={closeNav}>
                              <span className="fa fa-times fa-2x" id='close'></span>
                          </li>
                      </ul>

                      <div className="cart flex__center">
                          <span>
                           <span className='fa fa-cart-plus fa-2x' id='shoppoing-cart'></span>
                          </span>
                      </div>

                      <div className="hamburger flex__center" onClick={openNav}>
                        <span className='fa fa-bars fa-2x' id='bars' ></span>
                      </div>
                  </div>
              </div>
          </nav>

          <div className="hero">
              <div className="hero__center container">
                  <div className="hero__left">
                      <h1>Fresh Juice</h1>
                      <p>
                          We Beleive That Healthy Eating, Clean Air And, Gental Char Best Start To Genuinw Wellbeging.
                      </p>
                      <a href="#" className="button hero__btn">Shop Now</a>
                  </div>

                  <div className="hero__right">

                  </div>
              </div>

              <a href="#" className="go-down flex__center">
                  <svg>
                      <use xlinkHref="./images/sprite.svg#icon-angle-down"></use>
                  </svg>
              </a>
          </div>
      </header>
      {/* <!-- New Products --> */}

        <main>
            <section className="section new" id="new">
                <div className="new__center container">
                    <div className="title">
                        <h1>New Products</h1>
                    </div>

                    <div className="product__center">
                        <div className="product">
                            <div className="product__header">
                                <img src="./images/product5.png" alt="" />
                                <span className="flex__center">
                                    <svg>
                                        <use xlinkHref="./images/sprite.svg#icon-camera"></use>
                                    </svg>
                                </span>
                            </div>
                            <div className="product__footer">
                                <h2>Quiz Alikomi</h2>
                                <div className="rating">
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-empty"></use>
                                        </svg>
                                    </span>
                                </div>
                                <h4 className="price">$500</h4>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product__header">
                                <img src="./images/product6.png" alt="" />
                                <span>
                                    <svg>
                                        <use xlinkHref="./images/sprite.svg#icon-camera"></use>
                                    </svg>
                                </span>
                            </div>
                            <div className="product__footer">
                                <h2>Quiz Alikomi</h2>
                                <div className="rating">
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-empty"></use>
                                        </svg>
                                    </span>
                                </div>
                                <h4 className="price">$500</h4>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product__header">
                                <img src="./images/product7.png" alt="" />
                                <span>
                                    <svg>
                                        <use xlinkHref="./images/sprite.svg#icon-camera"></use>
                                    </svg>
                                </span>
                            </div>
                            <div className="product__footer">
                                <h2>Quiz Alikomi</h2>
                                <div className="rating">
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-empty"></use>
                                        </svg>
                                    </span>
                                </div>
                                <h4 className="price">$500</h4>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product__header">
                                <img src="./images/product8.png" alt="" />
                                <span>
                                    <svg>
                                        <use xlinkHref="./images/sprite.svg#icon-camera"></use>
                                    </svg>
                                </span>
                            </div>
                            <div className="product__footer">
                                <h2>Quiz Alikomi</h2>
                                <div className="rating">
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-empty"></use>
                                        </svg>
                                    </span>
                                </div>
                                <h4 className="price">$500</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Category --> */}
            <section className="section category">
                <div className="category__center container">
                    <div className="category__left">
                        <div className="content">
                            <h2>Daily Fresh</h2>
                            <h1>Fresh Fruits</h1>
                            <a href="#" className="button category__btn">Shop Now</a>
                        </div>
                        <img src="./images/cat2.png" alt="" />
                    </div>

                    <div className="category__right">
                        <div className="content">
                            <h2>Big Save</h2>
                            <h1>Save 50%</h1>
                            <a href="#" className="button category__btn">Shop Now</a>
                        </div>
                        <img src="./images/cat1.png" alt="" />
                    </div>
                </div>
            </section>


            <section className="section all__products" id="all">
                <div className="all__center container">
                    <div className="title">
                        <h1>All Products</h1>
                    </div>

                    <div className="product__center">
                        <div className="product">
                            <div className="product__header">
                                <img src="./images/product11.png" alt="" />
                                <span>
                                    <svg>
                                        <use xlinkHref="./images/sprite.svg#icon-camera"></use>
                                    </svg>
                                </span>
                            </div>
                            <div className="product__footer">
                                <h2>Quiz Alikomi</h2>
                                <div className="rating">
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-empty"></use>
                                        </svg>
                                    </span>
                                </div>
                                <h4 className="price">$500</h4>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product__header">
                                <img src="./images/product10.png" alt="" />
                                <span>
                                    <svg>
                                        <use xlinkHref="./images/sprite.svg#icon-camera"></use>
                                    </svg>
                                </span>
                            </div>
                            <div className="product__footer">
                                <h2>Quiz Alikomi</h2>
                                <div className="rating">
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-empty"></use>
                                        </svg>
                                    </span>
                                </div>
                                <h4 className="price">$500</h4>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product__header">
                                <img src="./images/product9.png" alt="" />
                                <span>
                                    <svg>
                                        <use xlinkHref="./images/sprite.svg#icon-camera"></use>
                                    </svg>
                                </span>
                            </div>
                            <div className="product__footer">
                                <h2>Quiz Alikomi</h2>
                                <div className="rating">
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-empty"></use>
                                        </svg>
                                    </span>
                                </div>
                                <h4 className="price">$500</h4>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product__header">
                                <img src="./images/product8.png" alt="" />
                                <span>
                                    <svg>
                                        <use xlinkHref="./images/sprite.svg#icon-camera"></use>
                                    </svg>
                                </span>
                            </div>
                            <div className="product__footer">
                                <h2>Quiz Alikomi</h2>
                                <div className="rating">
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-empty"></use>
                                        </svg>
                                    </span>
                                </div>
                                <h4 className="price">$500</h4>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product__header">
                                <img src="./images/product7.png" alt="" />
                                <span>
                                    <svg>
                                        <use xlinkHref="./images/sprite.svg#icon-camera"></use>
                                    </svg>
                                </span>
                            </div>
                            <div className="product__footer">
                                <h2>Quiz Alikomi</h2>
                                <div className="rating">
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-empty"></use>
                                        </svg>
                                    </span>
                                </div>
                                <h4 className="price">$500</h4>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product__header">
                                <img src="./images/product6.png" alt="" />
                                <span>
                                    <svg>
                                        <use xlinkHref="./images/sprite.svg#icon-camera"></use>
                                    </svg>
                                </span>
                            </div>
                            <div className="product__footer">
                                <h2>Quiz Alikomi</h2>
                                <div className="rating">
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-empty"></use>
                                        </svg>
                                    </span>
                                </div>
                                <h4 className="price">$500</h4>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product__header">
                                <img src="./images/product5.png" alt="" />
                                <span>
                                    <svg>
                                        <use xlinkHref="./images/sprite.svg#icon-camera"></use>
                                    </svg>
                                </span>
                            </div>
                            <div className="product__footer">
                                <h2>Quiz Alikomi</h2>
                                <div className="rating">
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-empty"></use>
                                        </svg>
                                    </span>
                                </div>
                                <h4 className="price">$500</h4>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product__header">
                                <img src="./images/product4.png" alt="" />
                                <span>
                                    <svg>
                                        <use xlinkHref="./images/sprite.svg#icon-camera"></use>
                                    </svg>
                                </span>
                            </div>
                            <div className="product__footer">
                                <h2>Quiz Alikomi</h2>
                                <div className="rating">
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-empty"></use>
                                        </svg>
                                    </span>
                                </div>
                                <h4 className="price">$500</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="featured">
                <div className="new__center container">
                    <div className="title">
                        <h1>Featured Products</h1>
                    </div>

                    <div className="product__center">
                        <div className="product">
                            <div className="product__header">
                                <img src="./images/product1.png" alt="" />
                                <span>
                                    <svg>
                                        <use xlinkHref="./images/sprite.svg#icon-camera"></use>
                                    </svg>
                                </span>
                            </div>
                            <div className="product__footer">
                                <h2>Quiz Alikomi</h2>
                                <div className="rating">
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-empty"></use>
                                        </svg>
                                    </span>
                                </div>
                                <h4 className="price">$500</h4>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product__header">
                                <img src="./images/product2.png" alt="" />
                                <span>
                                    <svg>
                                        <use xlinkHref="./images/sprite.svg#icon-camera"></use>
                                    </svg>
                                </span>
                            </div>
                            <div className="product__footer">
                                <h2>Quiz Alikomi</h2>
                                <div className="rating">
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-empty"></use>
                                        </svg>
                                    </span>
                                </div>
                                <h4 className="price">$500</h4>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product__header">
                                <img src="./images/product3.png" alt="" />
                                <span>
                                    <svg>
                                        <use xlinkHref="./images/sprite.svg#icon-camera"></use>
                                    </svg>
                                </span>
                            </div>
                            <div className="product__footer">
                                <h2>Quiz Alikomi</h2>
                                <div className="rating">
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-empty"></use>
                                        </svg>
                                    </span>
                                </div>
                                <h4 className="price">$500</h4>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product__header">
                                <img src="./images/product4.png" alt="" />
                                <span>
                                    <svg>
                                        <use xlinkHref="./images/sprite.svg#icon-camera"></use>
                                    </svg>
                                </span>
                            </div>
                            <div className="product__footer">
                                <h2>Quiz Alikomi</h2>
                                <div className="rating">
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-full"></use>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg>
                                            <use xlinkHref="./images/sprite.svg#icon-star-empty"></use>
                                        </svg>
                                    </span>
                                </div>
                                <h4 className="price">$500</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact container" id="contact">
                <div className="contact__left">
                    <h1>Subscribe for more vidoes</h1>
                    <p>If you like this website make sure to leave a like, comment and Subscribe</p>
                </div>
                <div className="contact__right">
                    <form action="#">
                        <input type="email" placeholder="Enter email address" />
                        <a href="#" className="button">Subscribe</a>
                    </form>
                </div>
            </section>
        </main>
    </div>
  );
}

export default App;
