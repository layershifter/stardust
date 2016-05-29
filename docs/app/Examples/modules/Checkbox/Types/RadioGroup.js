import React, { Component } from 'react'
import { Form, Checkbox } from 'stardust'

export default class CheckboxRadioGroupExample extends Component {
  render() {
    return (
      <Form>
        <Form.Field>
          <Checkbox type='radio' label='Choose this' name='radioGroup' />
        </Form.Field>
        <Form.Field>
          <Checkbox type='radio' label='Or that' name='radioGroup' />
        </Form.Field>
      </Form>
    )
  }
}
