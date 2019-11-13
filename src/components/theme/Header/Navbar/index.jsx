import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Container } from 'components/common'
import NavbarLinks from '../NavbarLinks'
import { Wrapper } from './styles'

const Navbar = () => {
  const data = useStaticQuery(graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`)
  return (
	<Wrapper as={Container}>
		<Link to="/">{data.site.siteMetadata.title}</Link>
		<NavbarLinks desktop />
	</Wrapper>
)}

export default Navbar
