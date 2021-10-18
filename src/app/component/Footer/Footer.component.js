/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import PropTypes from 'prop-types';
import React from 'react';
import { withTranslation } from 'react-i18next';

import './Footer.style.scss';

export class Footer extends React.Component {
    static propTypes = {
        t: PropTypes.func.isRequired
    }

    render() {
        const { t } = this.props;
        const year = new Date().getFullYear();

        return (
            <section className="Footer">
                <img
                  className="Elementor Elementor-Top"
                  src="/assets/img/icons/elementor.svg"
                  alt="Footer section start boundary"
                />
                <div className="Footer-Block">
                    <div className="container">
                        <div className="row">
                            <div className="Footer-Block-Item col-sm-3">
                                <img
                                  className="Logo"
                                  src="/assets/img/logo/logo.png"
                                  alt="Logo"
                                />
                                <p className="Simple-Text">
                                    Dolor church-key veniam, fap Bushwick mumblecore
                                    irure Vice consectetur 3 wolf moon
                                    sapiente literally quinoa.
                                </p>
                            </div>
                            <div className="Footer-Block-Item col-xs-6 col-sm-2">
                                <h3>Overview</h3>
                                <ul className="List List-Light">
                                  <li className="List-Light-Item">Home</li>
                                  <li className="List-Light-Item">Food menu</li>
                                  <li className="List-Light-Item">Online delivery</li>
                                  <li className="List-Light-Item">About us</li>
                                </ul>
                            </div>
                            <div className="Footer-Block-Item col-xs-6 col-sm-2">
                                <h3>Resources</h3>
                                <ul className="List List-Light">
                                    <li className="List-Light-Item">Home</li>
                                    <li className="List-Light-Item">Food menu</li>
                                    <li className="List-Light-Item">Online delivery</li>
                                    <li className="List-Light-Item">About us</li>
                                </ul>
                            </div>
                            <div className="Footer-Block-Item col-sm-2">
                                <h3>Contact info</h3>
                                <ul className="List List-Elementor">
                                    <li className="List-Elementor-Item">
                                        <a
                                          href={ `tel:${ t('address.phone') }` }
                                          className="Footer-Link"
                                        >
                                            <span>
                                                <i className="fas fa-phone-alt" />
                                            </span>
                                            <span className="Elementor-Text">
                                                { t('address.phone') }
                                            </span>
                                        </a>
                                    </li>
                                    <li className="List-Elementor-Item">
                                        <a
                                          href={ `mailto:${ t('address.email') }` }
                                          className="Footer-Link"
                                        >
                                            <span>
                                                <i className="far fa-envelope" />
                                            </span>
                                            <span className="Elementor-Text">
                                                { t('address.email') }
                                            </span>
                                        </a>
                                    </li>
                                    <li className="List-Elementor-Item">
                                        <a
                                          href="#"
                                          className="Footer-Link"
                                        >
                                            <span>
                                                <i className="fas fa-link" />
                                            </span>
                                            <span className="Elementor-Text">
                                                { t('address.web') }
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="Footer-Block-Item col-sm-3">
                                <h3>Location</h3>
                                <ul className="List List-Elementor">
                                    <li className="List-Elementor-Item">
                                        <a
                                          href="https://goo.gl/maps/2erjPnp65Ksf3DVy5"
                                          className="Footer-Link"
                                        >
                                            <span>
                                                <i className="fas fa-map-marker-alt" />
                                            </span>
                                            <span className="Elementor-Text">
                                                { t('address.line-full') }
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Footer-Notice">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <span className="Copyright-Notice">
                                    { t('copyright', { year }) }
                                </span>
                            </div>
                            <div className="col-sm-6">
                                <ul
                                  className="List List-Footer"
                                >
                                  <li className="List-Footer-Item">Our menu</li>
                                  <li className="List-Footer-Item">Careers</li>
                                  <li className="List-Footer-Item">Reviews</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withTranslation()(Footer);
