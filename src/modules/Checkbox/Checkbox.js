import React, { Component, PropTypes } from 'react'
import cx from 'classnames'

import AutoControlledComponent from '../../utils/AutoControlledComponent'
import META from '../../utils/Meta'
import { getUnhandledProps } from '../../utils/propUtils'

const _meta = {
  library: META.library.semanticUI,
  name: 'Checkbox',
  type: META.type.module,
  props: {
    style: [
      'checkbox',
      'radio',
      'slider',
      'toggle',
    ],
    type: [
      'checkbox',
      'radio',
    ],
  },
}

/**
 * All React Checkbox props and capabilities are also supported.
 */
export default class Checkbox extends AutoControlledComponent {
  static propTypes = {
    className: PropTypes.string,

    /** Whether or not checkbox is checked. */
    checked: PropTypes.bool,

    /** The initial value of checked. */
    defaultChecked: PropTypes.bool,

    /** Removes padding for a label. Auto applied when there is no label. */
    fitted: PropTypes.bool,

    /** The text of the associated label element. */
    label: PropTypes.string,

    /** Called when the value of checked changes. */
    onChange: PropTypes.func,

    /** Either checkbox, radio, slider, or toggle. Defaults to match type.*/
    style: PropTypes.oneOf(_meta.props.style),

    /** Controls behavior. Either checkbox or radio. */
    type: PropTypes.oneOf(_meta.props.type),
  }

  static defaultProps = {
    type: 'checkbox',
  }

  static autoControlledProps = [
    'checked',
  ]

  handleClick = (e) => {
    this.trySetState({ checked: !this.state.checked })
    const { onClick } = this.props
    if (onClick) onClick(e)
  }

  handleChange = (e) => {
    const { onChange } = this.props
    if (onChange) onChange(e)
  }

  static _meta = _meta

  render() {
    const { className, label, style, type } = this.props
    const { checked } = this.state

    const _style = style || type

    const classes = cx(
      'sd-checkbox',
      'ui',
      _style !== 'checkbox' && _style,
      // auto apply fitted class to compact white space when there is no label
      // http://semantic-ui.com/modules/checkbox.html#fitted
      'fitted' && !label,
      checked && 'checked',
      'checkbox',
      className
    )
    const props = getUnhandledProps(Checkbox, this.props)

    return (
      <div className={classes}>
        <input
          {...props}
          type={type}
          className='hidden'
          onClick={this.handleClick}
          onChange={this.handleChange}
          tabIndex={0}
          checked={checked}
        />
        <label onClick={this.handleClick}>{label}</label>
      </div>
    )
  }
}
