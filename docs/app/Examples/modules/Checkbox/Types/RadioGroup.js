import React, { Component } from 'react'
import { Form, Checkbox } from 'stardust'

export default class CheckboxRadioGroupExample extends Component {
  state = {}
  handleClick = (e, props) => this.setState({ value: props.value })

  render() {
    return (
      <Form>
        <Form.Field>
          <Checkbox
            type='radio'
            label='Choose this'
            value='this'
            name='radioGroup'
            onClick={this.handleClick}
            checked={this.state.value === 'this'}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            type='radio'
            label='Or that'
            value='that'
            name='radioGroup'
            onClick={this.handleClick}
            checked={this.state.value === 'that'}
          />
        </Form.Field>
      </Form>
    )
  }
}
