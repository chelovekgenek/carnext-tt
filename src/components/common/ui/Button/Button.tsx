import React, { ButtonHTMLAttributes } from "react"

import * as Styles from "./Button.styled"

interface IProps extends ButtonHTMLAttributes<never> {}

export const Button: React.FC<IProps> = props => <Styles.Button {...props} />
