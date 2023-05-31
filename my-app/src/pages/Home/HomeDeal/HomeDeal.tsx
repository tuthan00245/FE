import './diss.scss'
import React from 'react'


const HomeDeal = () => {
  return (
    <>
    <section className="home__vehicles">
        <div className="container">
            <table className="header__table">
                <tbody>
                    <tr>
                        <td>
                            <h2 className="headTwo">FLASH SALE VEHICLES</h2>
                        </td>
                        <td>
                            <div className="border__line"></div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="card__deck">
                <div className="row">
                    <div className="vehicleContainer">
                        <a href="">
                            <img src={require('../../../assets/images/Deal/1.jpg')} alt="NINJA® ZX™-4RR KRT EDITION featured vehicle" className="lazyload" />
                        </a>
                        <div className="headFive">
                            ALL-New 2023
                        </div>
                        <div className="headThree">
                            NINJA
                            <span className="sup">®</span>
                             ZX
                             <span className="sup">™</span>
                              4RR KRT EDITION
                        </div>
                        <div className="greenSpacer"></div>
                        <p className="pTwo">
                            <span className="acc__msrp">
                            MSRP
                            </span>
                             Price
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default HomeDeal