import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useStaticQuery, graphql } from "gatsby"
import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/dev.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => {
  const data = useStaticQuery(graphql`
  {
    site {
      siteMetadata {
        description
      }
    }
  }
`)
    
  return (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Hi There!</h1>
				<h4>{data.site.siteMetadata.description}</h4>
				<Button as={AnchorLink} href="#contact">
					Hire me
				</Button>
			</Details>
			<Thumbnail>
				<img src={dev} alt={data.site.siteMetadata.description} />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)}

// export const query = graphql`
// {
//   site {
//     siteMetadata {
//       title
//       description
//       author
//     }
//   }
// }
// `