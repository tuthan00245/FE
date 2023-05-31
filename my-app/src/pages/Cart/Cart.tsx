import React from 'react'
import './diss.scss'

const Cart = () => {
  return (
    <>
    <div className="cart">
        <section>
            <div className="cart__container">
                <table className="header__table">
                    <tbody>
                        <tr>
                            <td>
                                <h2 className="headTwo">SHOPPING CART</h2>
                            </td>
                            <td>
                                <div className="border__line"></div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="row">
                    <div className="col-md-8">
                        <div className="itembox">
                            <div className="imgPad">
                                <a href="">
                                    <img src="" alt="" className="left" />
                                </a>
                            </div>
                            <div className="col">
                                <a href="">
                                    <h3 className="headFour">
                                    Yuasa
                                    <span className="sup">®</span>
                                    Fused Ring Charger Connector
                                    </h3>
                                </a>
                                <p className="pOne">Item# 048493-130040</p>
                                <div>
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <div className="quantityContainer">
                                                <div className="list-inline-item">
                                                    <div className="form-group">
                                                        <label htmlFor="" className="headSix">QTY:</label>
                                                        <select name="" id="" className="form-control">
                                                            <option value="1" selected>1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                    </div>
                                                    {/* <input type="hiden" value="1" id="quantity" /> */}
                                                </div>
                                                <div className="list-inline-item"></div>
                                                <div className="list-inline-item">
                                                    <div className="form-group">
                                                        <button className="blackbtn">Update</button>

                                                    </div>
                                                </div>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="list-inline-item">
                                                <div className="headTwo">$10.95</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <button className="card-button">
                                        <u>MOVE TO WISHLIST</u>    
                                        </button>
                                        <button className="card-button">
                                        <u>REMOVE</u>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row"></div>
                    </div>
                    <div className="col-md-4">
                        <div className="disbox sticky">
                            <h2 className="headFour">ORDER SUMMARY</h2>
                            <h3 className="headFive mb-2">APPLY DISCOUNT</h3>
                            <span className="headFive">Promo Code</span>
                            <form action="" className="form-inline">
                                <fieldset className="w-100">
                                    <legend className="sr-only">Enter a promo code</legend>
                                        <input 
                                        id="ShoppingPromocode" 
                                        type="text" 
                                        className="mb-4" 
                                        aria-label="Promo Code"
                                        />
                                        <button 
                                            id="btnShopPromoCode" 
                                            type="button" 
                                            // onclick="SubmitPromocode(10.95, 'CART LANDING', [122], ['048493130040'])" 
                                            className="blackBtn w-100" 
                                            aria-label="Apply a promo code"
                                        >
                                            {/* <img 
                                            className="hide applyPromoSpinner" 
                                            alt="Loading animation" 
                                            src="/Content/Images/ajax.gif" 
                                            style={{margin: '-4px 7px 0px 0px'}}
                                            /> */}
                                            <span className="triangle"></span>
                                            APPLY
                                        </button>
                                    <div id="promocode-error" style={{}} className="invalid-feedback mb-2"></div>
                                </fieldset>
                            </form>
                            <div className="clearfix">
                                <div className="float-left">
                                    <h3 className="headFive">SUBTOTAL <span>(1 ITEMS)</span></h3>
                                    <div className="pTwo">Excluding tax and shipping</div>
                                </div>
                                <div className="float-right headFour">$10.95</div>
                            </div>
                            <button 
                                type="button" 
                                className="blackBtn mt-4" 
                            >
                                <div className="mx-auto">
                                    <span className="triangle"></span>
                                    CHECK OUT
                                </div>
                            </button>
                            <ul className="list-inline mt-3">
                                <li className="list-inline-item">
                                    <a href="/shop" className="headSix">CONTINUE SHOPPING</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="/wishlist" className="headSix">VIEW WISHLIST</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    </>
  )
}

export default Cart