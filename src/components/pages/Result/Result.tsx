import React from "react"
import { useSelector } from "react-redux"
import { getPromoted } from "store/entities/promotion"

export const Result = () => {
  const promoted = useSelector(getPromoted)

  return (
    <React.Fragment>
      {promoted ? (
        <React.Fragment>
          <h1>Congratulations, you won!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. +++.
          </p>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h1>Better luck next time!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. ---.
          </p>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}
