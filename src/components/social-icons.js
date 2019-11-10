/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

export default function SociaIcons() {
  return (
    <StaticQuery 
      query={socialIconsQuery}
      render={(data) => {
        const { social } = data.site.siteMetadata;
        return (
          <section className="page-social-icons">
            {Object.keys(data).map((key) => {
              if (key !== 'site') {
                return renderSocialIcon(
                  key,
                  social[key],
                  data[key].childImageSharp.fixed,
                );
              }
            })}
          </section>
        );
      }}
    />
  );
}

export function renderSocialIcon(key, link, image) {
  return (
    <a href={link} target="_blank">
      <Image
        key={key}
        fixed={image}
      />
    </a>
  );
}

const socialIconsQuery = graphql`
  query SocialIconsQuery {
    facebook: file(absolutePath: { regex: "/facebook-logo.png/" }) {
      childImageSharp {
        fixed(width: 120, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    soundcloud: file(absolutePath: { regex: "/soundcloud-logo.png/" }) {
      childImageSharp {
        fixed(width: 120, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    audiomack: file(absolutePath: { regex: "/audiomack-logo.png/" }) {
      childImageSharp {
        fixed(width: 120, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    instagram: file(absolutePath: { regex: "/instagram-logo.png/" }) {
      childImageSharp {
        fixed(width: 120, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    twitter: file(absolutePath: { regex: "/twitter-logo.png/" }) {
      childImageSharp {
        fixed(width: 120, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    youtube: file(absolutePath: { regex: "/youtube-logo.png/" }) {
      childImageSharp {
        fixed(width: 120, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    spotify: file(absolutePath: { regex: "/spotify-logo.png/" }) {
      childImageSharp {
        fixed(width: 120, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    deezer: file(absolutePath: { regex: "/deezer-logo.png/" }) {
      childImageSharp {
        fixed(width: 120, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    bandcamp: file(absolutePath: { regex: "/bandcamp-logo.png/" }) {
      childImageSharp {
        fixed(width: 120, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        social {
          facebook
          soundcloud
          audiomack
          instagram
          twitter
          youtube
          spotify
          deezer
          bandcamp
        }
      }
    }
  }
`
