import React from "react"
import { useSelector } from "react-redux"

import { getPromoted } from "store/entities/promotion"
import { Layout } from "components/App"

export const Result: React.FC = () => {
  const promoted = useSelector(getPromoted)

  return (
    <Layout>
      {promoted ? (
        <React.Fragment>
          <h1>Congratulations, you won!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h1>Better luck next time!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </React.Fragment>
      )}
    </Layout>
  )
}
