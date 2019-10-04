import React from "react"
import { connect } from "react-redux"

import { getPromoted } from "store/entities/promotion"
import { Layout } from "components/App"
import { TAppState } from "store/entities"

interface IStateProps {
  promoted: ReturnType<typeof getPromoted>
}
interface IProps extends IStateProps {}

export const Result: React.FC<IProps> = ({ promoted }) => (
  <Layout>
    {promoted ? (
      <React.Fragment>
        <h1>Congratulations, you won!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <h1>Better luck next time!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
      </React.Fragment>
    )}
  </Layout>
)

export default connect<IStateProps, {}, {}, TAppState>(state => ({
  promoted: getPromoted(state),
}))(Result)
