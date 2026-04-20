import * as React from "react";
import './style.scss';
import { graphql, useStaticQuery } from 'gatsby';

type PlatformsProps = {
    playstore?: "white" | "black",
    textColor?: "white" | "grey"
}

function Platforms({ playstore = "black", textColor = "grey" }: PlatformsProps) {

    const data = useStaticQuery(graphql`
    query {
        contentfulPlatforms {
          platformsTitle
          plaformsIconApple {
            images {
              url
              title
            }
          }
          platformsIconPlaystore {
            images {
              url
              title
            }
          }
          platformsIconPlaystoreWhite {
            images {
              url
              title
            }
          }
        }
      }
    `)

    return (
        <div className="platforms">
            <p style={{ color: textColor === "white" ? "#ffffff" : "#868E95" }}>Available on</p>
            <div className="flex-center">
                <div className='first-logo'>
                    <img src={data.contentfulPlatforms.plaformsIconApple.images.url} alt={data.contentfulPlatforms.plaformsIconApple.images.title} />
                </div>
                {playstore === "white" ?
                    <div className='second-logo'>
                        <img src={data.contentfulPlatforms.platformsIconPlaystoreWhite.images.url} alt={data.contentfulPlatforms.platformsIconPlaystoreWhite.images.title} />
                    </div>
                    :
                    <div className='second-logo'>
                        <img src={data.contentfulPlatforms.platformsIconPlaystore.images.url} alt={data.contentfulPlatforms.platformsIconPlaystore.images.title} />
                    </div>
                }
            </div>
        </div>
    );
}

export default Platforms;