import React from "react"
import { useSelector } from "react-redux"
import { Redirect } from "react-router"

import { isPromoted } from "store/entities/promotion"

export const PromotedExists: React.FC = ({ children }) => {
  const promoted = useSelector(isPromoted)
  return promoted ? <React.Fragment>{children}</React.Fragment> : <Redirect to="/" />
}
