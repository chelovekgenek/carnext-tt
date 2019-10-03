import React from "react"
import { Field, FieldProps } from "formik"

import { FormItemError } from "../FormItem"
import * as Styles from "./Input.styled"

interface IProps {
  name: string
  label: string
}

export const Input: React.FC<IProps> = ({ name, label }) => (
  <Field name={name}>
    {({ field, form: { touched, errors }, ...props }: FieldProps) => (
      <Styles.Container>
        <Styles.Label htmlFor={name}>{label}</Styles.Label>
        <Styles.Input id={name} type="text" value={field.value || ""} {...field} {...props} />
        <FormItemError>{touched[field.name] && errors[field.name]}</FormItemError>
      </Styles.Container>
    )}
  </Field>
)
