import './diss.scss';
import React from 'react'

const ProductDetail = () => {
  return (
    <div>
      <div className="itemPage">
        <section className="wrapper">
            <table role="presentation" className="header-table">
                <tbody>
                    <tr>
                        <td role="presentation">
                                <h1 className="headTwo">Batteries &amp; Chargers</h1>
                        </td>
                        <td>
                            {/* <div className="border-line"></div> */}
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="clearfix viewList">
                <div className="showMobile mx-auto">
                    <ul className="list-inline float-right-lg">
                      <li className="list-inline-item">
                        <a 
                        href="/en-us/shop/cart" 
                        className="headSix tableCaption" 
                        aria-label="View cart containing 1 items" 
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" focusable="false" width="35px" height="35px" viewBox="0 0 35 35" version="1.1">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g transform="translate(-1192.000000, -363.000000)" fill="#66CC33" fill-rule="nonzero">
                                        <g>
                                            <g transform="translate(0.000000, 154.000000)">
                                                <g transform="translate(1192.000000, 209.000000)">
                                                    <g>
                                                        <g>
                                                            <path d="M35,1.13209988 C35,1.75701902 34.5099967,2.26419977 33.9062427,2.26419977 L32.3924826,2.26419977 C31.4022677,2.26419977 30.5330952,2.95553543 30.2793435,3.94423599 L25.5557703,22.2918014 C25.1736844,23.775607 23.8699257,24.811101 22.3867908,24.811101 L22.3780407,24.811101 L6.60460212,24.811101 C5.11855053,24.811101 3.81479183,23.7740976 3.43270594,22.2918014 L0.0449749971,10.4138095 C-0.125651142,9.81455126 0.203934392,9.18510372 0.784354933,9.00849614 C1.36331713,8.82886963 1.97144619,9.17302799 2.14207233,9.77379566 L5.53855334,21.6804675 C5.67417924,22.2012334 6.10876547,22.5469013 6.60460212,22.5469013 L22.3809574,22.5469013 L22.3838741,22.5469013 C22.8811691,22.5469013 23.314297,22.2012334 23.4426312,21.7076379 L28.164746,3.36309139 C28.6737078,1.38267132 30.4120527,0 32.3924826,0 L33.9062427,0 C34.5099967,0 35,0.507180748 35,1.13209988 M16.4061259,31.0376504 C16.4061259,33.2218484 18.124054,35 20.2342764,35 C22.3444989,35 24.062427,33.2218484 24.062427,31.0376504 C24.062427,28.8534524 22.3444989,27.0753008 20.2342764,27.0753008 C18.124054,27.0753008 16.4061259,28.8534524 16.4061259,31.0376504 Z M9.29670342,27.0753008 C7.186481,27.0753008 5.46855287,28.8534524 5.46855287,31.0376504 C5.46855287,33.2218484 7.186481,35 9.29670342,35 C11.4069258,35 13.124854,33.2218484 13.124854,31.0376504 C13.124854,28.8534524 11.4069258,27.0753008 9.29670342,27.0753008" id="ecom-cart"></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <span className="headSix" id="span-cart-count-item">1</span>
                            View Cart
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="/en-us/shop/wishlist" className="headSix tableCaption" aria-label="View Wishlist">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" focusable="false" width="33px" height="35px" viewBox="0 0 33 35" version="1.1">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g transform="translate(-1352.000000, -363.000000)" fill="#66CC33" fill-rule="nonzero">
                                        <g>
                                            <g transform="translate(0.000000, 154.000000)">
                                                <g transform="translate(1192.000000, 209.000000)">
                                                    <g transform="translate(159.000000, 0.000000)">
                                                        <g>
                                                            <path d="M22.3524141,23.0017016 L17.4083579,28.2978717 L12.4643018,23.0017016 C11.5738205,22.0872335 11.354826,20.6887229 11.9160902,19.5329783 C12.6383372,18.049574 14.3960949,17.4478719 15.8405889,18.189574 C16.1219461,18.3340421 16.3786484,18.523191 16.6005435,18.7510634 L17.4083579,19.5821272 L18.2161723,18.7510634 C19.3604552,17.5774464 21.2110318,17.5774464 22.3524141,18.7510634 C22.5743093,18.9804251 22.7599471,19.2440421 22.9006257,19.5329783 C23.4647905,20.6887229 23.2428954,22.0872335 22.3524141,23.0017016 L22.3524141,23.0017016 Z M12.4236935,6.7021275 C12.4236935,3.82765948 14.7021072,1.48936167 17.4997265,1.48936167 C20.2987962,1.48936167 22.5757596,3.82765948 22.5757596,6.7021275 L22.5757596,10.4255317 L12.4236935,10.4255317 L12.4236935,6.7021275 Z M33.5660963,29.9778716 L31.2789808,11.1776593 C31.2804311,11.0421274 31.2528755,10.9065955 31.1847116,10.7859572 L29.5183225,7.78638279 C29.1484972,7.11765941 28.4697591,6.7021275 27.7489624,6.7021275 L25.7722101,6.7021275 C25.3922328,6.7021275 25.0847702,7.03425515 25.0847702,7.44680833 C25.0847702,7.85787215 25.3922328,8.19148917 25.7722101,8.19148917 L27.7489624,8.19148917 C27.9897114,8.19148917 28.2145072,8.3299998 28.3377822,8.55340405 L29.3790942,10.4255317 L24.0260547,10.4255317 L24.0260547,6.7021275 C24.0260547,3.00553184 21.0993591,0 17.4997265,0 C13.9015443,0 10.9733983,3.00553184 10.9733983,6.7021275 L10.9733983,10.4255317 L5.63921274,10.4255317 L6.67617378,8.55340405 C6.80234946,8.3299998 7.0285955,8.19148917 7.26789421,8.19148917 L9.24319621,8.19148917 C9.62317354,8.19148917 9.93208641,7.85787215 9.93208641,7.44680833 C9.93208641,7.03425515 9.62317354,6.7021275 9.24319621,6.7021275 L7.26789421,6.7021275 C6.54854781,6.7021275 5.86980967,7.11617004 5.49563352,7.78638279 L3.83069468,10.7859572 C3.7654314,10.9036168 3.7349752,11.03617 3.7349752,11.1702125 L3.72192255,11.1702125 L1.43335679,29.9778716 C1.41305266,30.1625525 1.4,30.3472333 1.4,30.5334035 C1.4,33.0012758 3.34919669,35.0014885 5.75233577,35 L29.2471173,35 C29.4284042,35 29.6082408,34.9880843 29.7880774,34.9642545 C32.1723626,34.6589353 33.8634068,32.4248928 33.5660963,29.9778716 L33.5660963,29.9778716 Z"></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            View Wishlist
                        </a>
                    </li>
                  </ul>
                </div>
              <a href="../" className="headSix backList" aria-label="BACK TO ACCESSORY RESULTS">&lt; Back to Accessory Results</a>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div id="apparelIndicators" className="carousel slide carousel-fade">
                  <div className="carousel-inner">
                    <div className="carousel-item  active">
                      <img 
                      src="https://www.kawasaki.com/content/uploads/accessories/048493130040/048493130040-130759205409033971.jpg?w=800&amp;404=~/content/images/404.jpg" alt="Yuasa® Fused Ring Charger Connector detail photo 1"/>
                    </div>
                    <ol className="carousel-indicators clearfix mb-5">
                      <li className="active">
                          <a 
                          data-target="#apparelIndicators" 
                          data-slide-to="0" 
                          className=" active" 
                          href="javascript:void(0)" 
                          aria-label="Yuasa® Fused Ring Charger Connector photo 1 Slider Dot.">
                            <svg 
                            className="offIndicator" 
                            xmlns="http://www.w3.org/2000/svg" 
                            xmlnsXlink="http://www.w3.org/1999/xlink" 
                            width="19px" 
                            height="19px" 
                            viewBox="0 0 19 19" 
                            version="1.1">
                              <g 
                              stroke="none" 
                              stroke-width="1" 
                              fill="none" 
                              fill-rule="evenodd">
                                <g 
                                transform="translate(-127.000000, -404.000000)" 
                                fill-rule="nonzero">
                                  <g>
                                    <g>
                                      <g 
                                      transform="translate(15.000000, 126.000000)">
                                        <g>
                                          <g 
                                          transform="translate(66.000000, 279.000000)">
                                            <g 
                                            transform="translate(47.000000, 0.000000)">
                                              <circle 
                                              stroke="#4A4A4A" 
                                              opacity="0.439999998" 
                                              cx="8.5" cy="8.5" r="8.5">
                                              </circle>
                                              <circle 
                                              fill="#4A4A4A" 
                                              cx="8.5" cy="8.5" r="3.5">
                                              </circle>
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </svg>
                            <svg className="onIndicator" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="17px" height="17px" viewBox="0 0 17 17" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-81.000000, -405.000000)" fill="#66CC33" fill-rule="nonzero"><g><g><g transform="translate(15.000000, 126.000000)"><g><g transform="translate(66.000000, 279.000000)"><g><circle cx="8.5" cy="8.5" r="8.5"></circle></g></g></g></g></g></g></g></g></svg>
                            <img src="https://www.kawasaki.com/content/uploads/accessories/048493130040/048493130040-130759205409033971.jpg?w=100&amp;h=100&amp;404=~/content/images/404.jpg" alt="Yuasa® Fused Ring Charger Connector photo thumbnail 1"/>
                          </a>
                      </li>
                    </ol>
                  </div>
                  <div id="AccVideoGallery" className="row no-gutters">
                  </div>
                </div>  
              </div>  
              <div className="col-12 col-md-1">
                  <input id="Accessory_AccessoryName" name="Accessory.AccessoryName" type="hidden" value="Yuasa® Fused Ring Charger Connector"/>
                  <input id="AccessoryMasterCategoryName" name="AccessoryMasterCategoryName" type="hidden" value="Maintenance Products"/>
                  <input data-val="true" data-val-number="The field MSRP must be a number." data-val-required="The MSRP field is required." id="Accessory_MSRP" name="Accessory.MSRP" type="hidden" value="10.95"/>
              </div>
              <div className="col-sm-12 col-md-5">
                <h2 className="headTwo mb-2">Yuasa<span className="sup">®</span> Fused Ring Charger Connector</h2>
                  <div data-itemnumberstatus="048493130040" className="">
                    <p className="pTwo mb-2">Item # 048493-130040</p>
                      <div className="headFour" ><span className="headSix">MSRP</span>$10.95
                      </div>
                        <div className="availability">
                          <div className="headFive mb-4">
                              <a href="#" className="strecth" data-toggle="modal" data-target="#shareModal" aria-label="SHARE KAWASAKI EVENT BUTTON opens in a new window">
                                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="22px" height="31px" viewBox="0 0 22 31" version="1.1">
                                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                          <g transform="translate(-855.000000, -688.000000)" fill="#6FBE44" fill-rule="nonzero">
                                              <g>
                                                  <g transform="translate(0.000000, 454.000000)">
                                                      <g transform="translate(45.000000, 50.000000)">
                                                          <g transform="translate(810.000000, 0.000000)">
                                                              <g transform="translate(0.000000, 184.000000)">
                                                                  <g>
                                                                      <g transform="translate(3.473684, 0.000000)">
                                                                          <path d="M15.6315789,8.10526316 C15.8631579,8.33684211 15.8631579,8.8 15.6315789,9.14736842 C15.4,9.37894737 14.9368421,9.37894737 14.5894737,9.14736842 L8.8,3.35789474 L8.8,21.4210526 C8.8,21.7684211 8.45263158,22.1157895 8.10526316,22.1157895 C7.75789474,22.1157895 7.41052632,21.7684211 7.41052632,21.4210526 L7.41052632,3.35789474 L1.62105263,9.14736842 C1.38947368,9.37894737 0.926315789,9.37894737 0.578947368,9.14736842 C0.347368421,8.91578947 0.347368421,8.45263158 0.578947368,8.10526316 L7.64210526,1.04210526 C7.75789474,0.926315789 7.75789474,0.926315789 7.87368421,0.926315789 C7.98947368,0.926315789 8.10526316,0.926315789 8.10526316,0.926315789 C8.22105263,0.926315789 8.33684211,0.926315789 8.33684211,0.926315789 C8.45263158,0.926315789 8.45263158,1.04210526 8.56842105,1.04210526 L15.6315789,8.10526316 Z"></path>
                                                                      </g>
                                                                      <path d="M18.6421053,11.4631579 L15.0526316,11.4631579 L15.0526316,12.8526316 L18.6421053,12.8526316 C19.4526316,12.8526316 20.0315789,13.4315789 20.0315789,14.2421053 L20.0315789,27.4421053 C20.0315789,28.1368421 19.4526316,28.8315789 18.6421053,28.8315789 L3.58947368,28.8315789 C2.77894737,28.8315789 2.2,28.2526316 2.2,27.4421053 L2.2,14.2421053 C2.2,13.5473684 2.77894737,12.8526316 3.58947368,12.8526316 L6.94736842,12.8526316 L6.94736842,11.4631579 L3.70526316,11.4631579 C2.08421053,11.4631579 0.810526316,12.7368421 0.810526316,14.2421053 L0.810526316,27.4421053 C0.810526316,28.9473684 2.08421053,30.2210526 3.70526316,30.2210526 L18.7578947,30.2210526 C20.3789474,30.2210526 21.6526316,28.9473684 21.6526316,27.4421053 L21.6526316,14.2421053 C21.5368421,12.7368421 20.2631579,11.4631579 18.6421053,11.4631579 Z"></path>
                                                                  </g>
                                                              </g>
                                                          </g>
                                                      </g>
                                                  </g>
                                              </g>
                                          </g>
                                      </g>
                                  </svg>
                                  <span className="headFive">SHARE</span>
                              </a>
                          </div>
                      </div>
                    </div>
                    <div id="InStockFormContainer" className="noStock">
                      <form action="/en-us/shop/InStock" className="form-horizontal" data-ajax="true" data-ajax-begin="InStockBegin" data-ajax-failure="InStockFailure" data-ajax-method="POST" data-ajax-success="InStockSuccess" id="InStockForm" method="post">
                        <input id="InStockCategory" name="InStockCategory" type="hidden" value="batteries-chargers"/>
                        <input id="InStockImageUrl" name="InStockImageUrl" type="hidden" value="https://www.kawasaki.com/content/uploads/accessories/048493130040/048493130040-130759205409033971.jpg?w=800&amp;404=~/content/images/404.jpg"/>
                        <input id="InStockItemNumber" name="InStockItemNumber" type="hidden" value="048493130040"/>
                        <input id="InStockProductUrl" name="InStockProductUrl" type="hidden" value="/en-us/shop/maintenance-products/batteries-chargers/048493130040/yuasa-fused-ring-charger-connector"/>
                        <input name="__RequestVerificationToken" type="hidden" value="o50nZfiKDh0M3g6uWeIaT65nG-0XDOuirrW4kSxsJPEMk6jMYuV5nyuQvGwB6UwDGqOmXGWTzZmf6XTeTGpE_6ABW1rd9m15yYdwLBg6Cgghsvkc687OQmVvQ0Itgc_S88SSDe8-GxDp6dK58EG72w2"/>                            
                        <div className="mb-3 headFive">NOTIFY ME WHEN THIS ITEM IS IN STOCK</div>
                        <div className="mb-3">
                          <input aria-label="notify me by email" className="form-control headFive" id="InStockEmail" name="InStockEmail" type="text" value=""/>
                        </div><button type="submit" className="blackBtn">notify me</button>
                        <div id="InStockMessage">
                        </div>
                      </form>                    
                    </div>
                    <div className="pOne">
                      Yuasa
                      <span className="sup">®</span> 
                      Fused Ring Charger Connector is an additionalplug-in connector htmlFor Yuasa and Battery Tender chargers
                      <ul>
                        <li>In-line fuse included</li>
                        <li>Simple, quick plug-in connection to charger</li>
                        <li>Ring terminals are permanently attached to battery</li>
                      </ul>
                    </div>
                    <hr/>
                        <div className="form-group row mt-5">
                            <div className="col-3 col-form-label">
                                <label htmlFor="quantity" className="headSix d-block">Quantity</label>
                            </div>
                            <div className="col-4">
                                <select className="form-control headFive" id="quantity">
                                    <option selected>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                    <option>13</option>
                                    <option>14</option>
                                    <option>15</option>
                                    <option>16</option>
                                    <option>17</option>
                                    <option>18</option>
                                    <option>19</option>
                                    <option>20</option>
                                    <option>21</option>
                                    <option>22</option>
                                    <option>23</option>
                                    <option>24</option>
                                    <option>25</option>
                                </select>
                            </div>
                        </div>
                        <div className="sizing-box">
                            <input id="SelectedSKU" name="SelectedSKU" type="hidden" value="048493130040"/>
                            <p className="pTwo"></p>
                        </div>
                    <br/>
                    <ul className="list-inline btnGroup">
                        <li className="list-inline-item">
                            <button 
                            className="blackBtn" 
                            id="shop_cart"  
                            data-target="#CartModal" 
                            data-master-name="maintenance-products" 
                            data-category-name="batteries-chargers" 
                            aria-label="Add To Cart" 
                            aria-live="off" 
                            data-model-year="" 
                            data-model-code="">
                              <span className="triangle"></span> ADD TO CART
                            </button>
                        </li>
                        <li className="list-inline-item">
                            <button className="blackBtn" id="shop_wishlist"  data-target="#WishlistModal" aria-label="Add To Wishlist">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height="17px" width="17px" viewBox="0 0 33 35" version="1.1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g transform="translate(-1352.000000, -363.000000)" fill="#66CC33" fill-rule="nonzero">
                                            <g>
                                                <g transform="translate(0.000000, 154.000000)">
                                                    <g transform="translate(1192.000000, 209.000000)">
                                                        <g transform="translate(159.000000, 0.000000)">
                                                            <g>
                                                                <path d="M22.3524141,23.0017016 L17.4083579,28.2978717 L12.4643018,23.0017016 C11.5738205,22.0872335 11.354826,20.6887229 11.9160902,19.5329783 C12.6383372,18.049574 14.3960949,17.4478719 15.8405889,18.189574 C16.1219461,18.3340421 16.3786484,18.523191 16.6005435,18.7510634 L17.4083579,19.5821272 L18.2161723,18.7510634 C19.3604552,17.5774464 21.2110318,17.5774464 22.3524141,18.7510634 C22.5743093,18.9804251 22.7599471,19.2440421 22.9006257,19.5329783 C23.4647905,20.6887229 23.2428954,22.0872335 22.3524141,23.0017016 L22.3524141,23.0017016 Z M12.4236935,6.7021275 C12.4236935,3.82765948 14.7021072,1.48936167 17.4997265,1.48936167 C20.2987962,1.48936167 22.5757596,3.82765948 22.5757596,6.7021275 L22.5757596,10.4255317 L12.4236935,10.4255317 L12.4236935,6.7021275 Z M33.5660963,29.9778716 L31.2789808,11.1776593 C31.2804311,11.0421274 31.2528755,10.9065955 31.1847116,10.7859572 L29.5183225,7.78638279 C29.1484972,7.11765941 28.4697591,6.7021275 27.7489624,6.7021275 L25.7722101,6.7021275 C25.3922328,6.7021275 25.0847702,7.03425515 25.0847702,7.44680833 C25.0847702,7.85787215 25.3922328,8.19148917 25.7722101,8.19148917 L27.7489624,8.19148917 C27.9897114,8.19148917 28.2145072,8.3299998 28.3377822,8.55340405 L29.3790942,10.4255317 L24.0260547,10.4255317 L24.0260547,6.7021275 C24.0260547,3.00553184 21.0993591,0 17.4997265,0 C13.9015443,0 10.9733983,3.00553184 10.9733983,6.7021275 L10.9733983,10.4255317 L5.63921274,10.4255317 L6.67617378,8.55340405 C6.80234946,8.3299998 7.0285955,8.19148917 7.26789421,8.19148917 L9.24319621,8.19148917 C9.62317354,8.19148917 9.93208641,7.85787215 9.93208641,7.44680833 C9.93208641,7.03425515 9.62317354,6.7021275 9.24319621,6.7021275 L7.26789421,6.7021275 C6.54854781,6.7021275 5.86980967,7.11617004 5.49563352,7.78638279 L3.83069468,10.7859572 C3.7654314,10.9036168 3.7349752,11.03617 3.7349752,11.1702125 L3.72192255,11.1702125 L1.43335679,29.9778716 C1.41305266,30.1625525 1.4,30.3472333 1.4,30.5334035 C1.4,33.0012758 3.34919669,35.0014885 5.75233577,35 L29.2471173,35 C29.4284042,35 29.6082408,34.9880843 29.7880774,34.9642545 C32.1723626,34.6589353 33.8634068,32.4248928 33.5660963,29.9778716 L33.5660963,29.9778716 Z"></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                Add To Wishlist
                            </button>
                        </li>
                    </ul>
                    <p className="pTwo" id="cart-error"></p>

                    Most items ship to dealer within 5-7 business days for free. Special dealer only items may be excluded.
                    <br/>
                    <br/> 
                    Additional shipping charges apply to qualified ship to home orders.
                    <br/>
                    <br/>
                    Price and specifications are subject to change without notice or liability. Availability is subject to production, stocking and demand. Manufacturers suggested retail prices shown.
                    
                    <div id="AccVideoGallery-mobile" className="row no-gutters mt-4 mb-4">
                    </div>
                    <hr/>
                    <div className="list-inline inlineLinks mt-4 mb-4">
                    </div>
                </div>
            </div>
        </section>
    </div>
    </div>
  )
}

export default ProductDetail