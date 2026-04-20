import * as React from "react";
import "./style.scss";

type FooterLinksProps = {
    heading: string,
    links: string[]
}

function FooterLinks({ heading, links }:FooterLinksProps) {

    return (
        <div className="footer-links">
            <h3>{heading}</h3>
            {links.map((v, i) => <p key={i}>{v}</p>)}
        </div>
    )
}

export default FooterLinks;