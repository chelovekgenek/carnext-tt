import React from "react"
import { Header, Logo, Content, ContentWrapper } from "./MainLayout.styled"

export const MainLayout: React.FC = ({ children }) => (
  <React.Fragment>
    <Header>
      <Logo src="https://www.carnext.com/static/images/carnext/logo-eu-header.png" alt="logo" />
    </Header>
    <ContentWrapper>
      <Content>{children}</Content>
    </ContentWrapper>
  </React.Fragment>
)
