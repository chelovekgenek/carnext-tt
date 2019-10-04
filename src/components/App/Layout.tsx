import React from "react"
import { Link } from "react-router-dom"

import { Header, Logo, Content, ContentWrapper } from "./Layout.styled"

export const Layout: React.FC = ({ children }) => (
  <React.Fragment>
    <Header>
      <Link to="/">
        <Logo src="https://www.carnext.com/static/images/carnext/logo-eu-header.png" alt="logo" />
      </Link>
    </Header>
    <ContentWrapper>
      <Content>{children}</Content>
    </ContentWrapper>
  </React.Fragment>
)
