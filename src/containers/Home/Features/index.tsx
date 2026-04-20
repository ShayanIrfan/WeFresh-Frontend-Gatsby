import * as React from "react";
import "./style.scss";
import HeadingWithSub from "../../../components/common/HeadingWithSub";
import { graphql, useStaticQuery } from "gatsby";

function Features() {
  const data = useStaticQuery(graphql`
    query {
      contentfulFeatures {
        heading {
          raw
        }
        features {
          icon
          title
          description
        }
      }
    }
  `);

  const headingContent = data?.contentfulFeatures?.heading;
  const features = data?.contentfulFeatures?.features;

  return (
    <div className="features-section">
      <HeadingWithSub richText={headingContent} />
      <div className="features-grid">
        {features.map((feature: any, index: number) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h4 className="feature-title">{feature.title}</h4>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
