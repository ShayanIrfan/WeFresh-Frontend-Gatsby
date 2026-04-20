import * as React from "react";
import "./style.scss";
// component import
import Platforms from "../../components/common/Platforms";
import FooterLinks from "../../components/common/FooterLinks";
import { graphql, useStaticQuery } from 'gatsby';

function Footer() {

    const data = useStaticQuery(graphql`
    query {
        contentfulFooter {
          footerLogo {
            images {
              url
              title
            }
          }
          links {
            heading
            links
          }
          copyrightContent
        }
      }
    `)

    const footerLinks = data?.contentfulFooter?.links;

    return (
        <div className="Footer">
            <div className="first-container">
                {/* <div className="first-container"> */}
                <div className="flex-space-around inner-first-container">
                    <div className="logo-section">
                        {data?.contentfulFooter?.footerLogo?.images &&
                            <img src={data.contentfulFooter.footerLogo.images.url} alt={data.contentfulFooter.footerLogo.images.title} />
                        }
                    </div>
                    {footerLinks && footerLinks.map((v: any, i: number) => <FooterLinks key={i} heading={v.heading} links={v.links} />)}
                    <div className="platforms-section">
                        <Platforms />
                    </div>
                </div>
            </div>
            <div className="copyright-section">
                <p dangerouslySetInnerHTML={{ __html: data?.contentfulFooter?.copyrightContent || "" }}></p>
            </div>
        </div>
    )
}

export default Footer