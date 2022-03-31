import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../Assets/Img/footerLogo.png";
import Img from "../../Assets/Img/footerBg.png";
import "./Footer.scss";

function Footer() {
  return (
    <footer className='footer'>
        <div className="container footer__content">
          <div className="footer__left">
              <img src={Img} alt="" className="footer__left-bg" />
              <Link to={"/"}>
                  <img src={Logo} alt="" />
              </Link>
          </div>
          <div className="footer__right">
              <ul className="footer__list">
                <li className="footer__item">
                  <h3 className="footer__item-title">
                  FIGHT WITH ME ON:
                  </h3>
                </li>
                <li className="footer__item">
                  <Link to={"/"}>twitter</Link>
                </li>
                <li className="footer__item">
                  <Link to={"/"}>instagram</Link>
                </li>
                <li className="footer__item">
                  <Link to={"/"}>telegram</Link>
                </li>
                <li className="footer__item">
                  <Link to={"/"}>youtube</Link>
                </li>
                <li className="footer__item">
                  <Link to={"/"}>figma</Link>
                </li>
              </ul>

              <ul className="footer__list">
                <li className="footer__item">
                  <h3 className="footer__item-title">
                  WHAT I HAVE DONE:
                  </h3>
                </li>
                <li className="footer__item">
                  <Link to={"/"}>Xalq Kutubxonasi</Link>
                </li>
                <li className="footer__item">
                  <Link to={"/"}>websitee</Link>
                </li>
                <li className="footer__item">
                  <Link to={"/"}>website</Link>
                </li>
                <li className="footer__item">
                  <Link to={"/"}>play market</Link>
                </li>
                <li className="footer__item">
                  <Link to={"/"}>app store</Link>
                </li>
              </ul>
              
              <ul className="footer__list">
                <li className="footer__item">
                  <Link to={"/"}>contact</Link>
                </li>
                <li className="footer__item">
                  <Link to={"/"}>blog</Link>
                </li>
                <li className="footer__item">
                  <Link to={"/"}>dribbble</Link>
                </li>
                <li className="footer__item">
                  <Link to={"/"}>behance</Link>
                </li>
              </ul>
          </div>
        </div>
    </footer>
  )
}

export default Footer