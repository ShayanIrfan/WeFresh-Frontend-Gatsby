import * as React from "react";
import './style.scss';
import RightContainer from "../../../components/Hero/right container";
import LeftContainer from "../../../components/Hero/left container";
import BgFill from '../../../components/Hero/background fills';
import { graphql, useStaticQuery } from 'gatsby';

function Hero() {

  const data = useStaticQuery(graphql`
    query {
        contentfulHero {
          phoneImage {
            images {
              url
              title
            }
          }
          inputWithButton {
            desktopPlaceholder
            phonePlaceholder
            sendButton {
              button
            }
          }
        }
      }
    `)

  return (
    <>
      <div className="flex-space-around Hero">
        {data?.contentfulHero?.inputWithButton &&
          <LeftContainer inputWithButton={data.contentfulHero.inputWithButton} />
        }
        {data?.contentfulHero?.phoneImage?.images &&
          <RightContainer image={data.contentfulHero.phoneImage.images} />
        }
      </div>
      <BgFill />
    </>
  );
}

export default Hero;