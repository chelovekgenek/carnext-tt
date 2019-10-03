import React from "react"
import { connect } from "react-redux"
import { FormikProps, Form, withFormik } from "formik"

import { Input, Checkbox } from "components/common/form"
import { Button } from "components/common/ui"

import { initialValues, schema } from "./schema"
import * as Styles from "./Main.styled"
import { TAppState } from "store/entities"
import { PromotionActions } from "store/entities/promotion"

interface IDispatchProps {
  submit: typeof PromotionActions.request
}
interface IProps extends IDispatchProps {}

export const MainForm: React.FC<IProps & FormikProps<typeof initialValues>> = ({ handleSubmit, isValid }) => (
  <Form>
    <Styles.Row>
      <Styles.Column padding={1}>
        <Input label="First name" name="firstname" />
      </Styles.Column>
      <Styles.Column padding={1}>
        <Input label="Surname" name="surname" />
      </Styles.Column>
    </Styles.Row>
    <Input label="Email address" name="email" />
    <Input label="Phone number" name="phone" />
    <Input label="Voucher code" name="code" />
    <Checkbox label="Accept Privacy Settlement" name="agreement" />
    <Button type="submit" onClick={handleSubmit} disabled={!isValid}>
      Get offer
      <i className="fas fa-chevron-right" />
    </Button>
  </Form>
)

export default connect<{}, IDispatchProps, {}, TAppState>(
  null,
  {
    submit: PromotionActions.request,
  },
)(
  withFormik<IProps, typeof initialValues>({
    handleSubmit: (values, { props }) => props.submit(values),
    mapPropsToValues: () => initialValues,
    validationSchema: schema,
    validateOnBlur: true,
  })(MainForm),
)
