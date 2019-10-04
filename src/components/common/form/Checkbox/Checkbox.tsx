import React from "react"
import { Field, FieldProps } from "formik"

import { FormItem, FormItemError } from "../FormItem"

import * as Styles from "./Checkbox.styled"

interface IProps {
  name: string
  label: string
}

export const Checkbox: React.FC<IProps> = ({ name, label }) => (
  <Field name={name}>
    {(formikFieldProps: FieldProps) => <InnerFormItem name={name} label={label} {...formikFieldProps} />}
  </Field>
)

export const InnerFormItem: React.FC<IProps & FieldProps> = ({
  label,
  name,
  field,
  form: { touched, errors },
  ...props
}) => (
  <FormItem>
    <Styles.Checkbox id={name} type="checkbox" checked={field.value || false} {...field} {...props} />
    <Styles.Label htmlFor={name}>{label}</Styles.Label>
    <FormItemError>{touched[name] && errors[name]}</FormItemError>
  </FormItem>
)
