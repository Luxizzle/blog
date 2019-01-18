import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div>
            <div
              style={{
                display: `flex`,
                marginBottom: rhythm(1),
              }}
            >
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                style={{
                  marginRight: rhythm(1 / 2),
                  marginBottom: 0,
                  minWidth: 50,
                  borderRadius: `100%`,
                }}
                imgStyle={{
                  borderRadius: `50%`,
                }}
              />
              <p>
                Jelmer de Waal. A front-end developer at{' '}
                <a
                  href="https://your-source.nl/"
                  target="_blank"
                  rel="noopener"
                >
                  Your Source
                </a>
                . This is a place for my collection of thoughts.
              </p>
            </div>
            <p>
              Twitter:{' '}
              <a
                href={`https://twitter.com/${social.twitter}`}
                target="_blank"
                rel="noopener"
              >
                @Luxizzle
              </a>
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
