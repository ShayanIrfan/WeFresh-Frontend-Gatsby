import * as React from "react";
import { useState } from 'react';
import './style.scss';
import '../../styles/globals.scss';
import Hamburger from '../../assets/svgs/Hamburger.svg'
// Mobile Navbar
import MobileNav from '../../components/Header/mobile navbar';
// Desktop Navbar
import DesktopNav from '../../components/Header/desktop navbar';
import { graphql, useStaticQuery } from 'gatsby';

const Header = () => {

    const data = useStaticQuery(graphql`
    query {
        contentfulHeader {
          logo {
            images {
              url
              title
            }
          }
          links {
            content
          }
          signupButton {
            button
          }
        }
      }
    `)

    const [showNav, setShowNav] = useState(false);

    const navList = data?.contentfulHeader?.links;

    const navEnablerDisablerFunc = () => {
        setShowNav(false);
    }

    return (
        <div className="header">
            <div className={"flex-space-between desktop-nav-container"}>
                {data?.contentfulHeader?.logo?.images &&
                    <div>
                        <img src={data.contentfulHeader.logo.images.url} alt={data.contentfulHeader.logo.images.title} />
                    </div>
                }
                {navList &&
                    <DesktopNav list={navList} />
                }
                <button onClick={() => setShowNav(true)}><Hamburger /></button>
            </div>
            {navList && data?.contentfulHeader?.logo?.images && data?.contentfulHeader?.signupButton?.button &&
                <MobileNav showNav={showNav} navEnablerDisablerFunc={navEnablerDisablerFunc} list={navList} image={data.contentfulHeader.logo.images} signUpBtnTxt={data.contentfulHeader.signupButton.button} />
            }
        </div>
    );
}

export default Header;