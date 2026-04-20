import * as React from "react";
import "./style.scss";
import HeadingWithSub from "../../../components/common/HeadingWithSub";
import { graphql, useStaticQuery } from "gatsby";

function Testimonials() {
  const data = useStaticQuery(graphql`
    query {
      contentfulTestimonials {
        heading {
          raw
        }
        testimonials {
          name
          role
          quote
          rating
        }
      }
    }
  `);

  const headingContent = data?.contentfulTestimonials?.heading;
  const testimonials = data?.contentfulTestimonials?.testimonials;

  return (
    <div className="testimonials-section">
      <HeadingWithSub richText={headingContent} />
      <div className="testimonials-grid">
        {testimonials.map((testimonial: any, index: number) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-stars">
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <div className="testimonial-author">
              <div className="author-avatar">{testimonial.name.charAt(0)}</div>
              <div className="author-info">
                <h5 className="author-name">{testimonial.name}</h5>
                <p className="author-role">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
