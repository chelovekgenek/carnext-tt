import React from "react"
import { Header, Logo, Content } from "./MainLayout.styled"

export const MainLayout: React.FC = ({ children }) => (
  <React.Fragment>
    <Header>
      <Logo src="https://www.carnext.com/static/images/carnext/logo-eu-header.png" alt="logo" />
    </Header>
    <Content>{children}</Content>
  </React.Fragment>
)
