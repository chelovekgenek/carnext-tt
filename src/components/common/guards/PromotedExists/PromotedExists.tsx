import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router"

import { isPromoted } from "store/entities/promotion"
import { TAppState } from "store/entities"

interface IStateProps {
  promoted: ReturnType<typeof isPromoted>
}
interface IProps extends IStateProps {}

export const PromotedExists: React.FC<IProps> = ({ children, promoted }) => {
  return promoted ? <React.Fragment>{children}</React.Fragment> : <Redirect to="/" />
}

export default connect<IStateProps, {}, {}, TAppState>(state => ({
  promoted: isPromoted(state),
}))(PromotedExists)
