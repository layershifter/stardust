import React, { Component, PropTypes } from 'react'
import cx from 'classnames'

import AutoControlledComponent from '../../utils/AutoControlledComponent'
import META from '../../utils/Meta'
import { makeDebugger } from '../../utils/debug'
import { getUnhandledProps } from '../../utils/propUtils'

const debug = makeDebugger('checkbox')

const _meta = {
  library: META.library.semanticUI,
  name: 'Checkbox',
  type: META.type.module,
  props: {
    kind: [
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

    /** Called when the checkbox or label is clicked. */
    onClick: PropTypes.func,

    /** Display as a checkbox, radio, slider, or toggle. Defaults to match the type. */
    kind: PropTypes.oneOf(_meta.props.kind),

    /** HTML tab-index for the input. */
    tabIndex: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),

    /** HTML input type, either checkbox or radio. */
    type: PropTypes.oneOf(_meta.props.type),
  }

  static defaultProps = {
    type: 'checkbox',
    tabIndex: 0,
  }

  static autoControlledProps = [
    'checked',
  ]

  static _meta = _meta

  state = {}

  handleClick = (e) => {
    debug.group('handleClick()')
    debug(`checked: ${this.props.checked}`)
    // debug(`checked: ${this.state.checked}`)
    debug.groupEnd()
    const { onClick, name, value, checked } = this.props
    if (onClick) onClick(e, { name, value, checked })
    this.toggle()
  }

  handleChange = (e) => {
    debug.group('handleChange()')
    debug(e.target.checked)
    debug.groupEnd()
    const { onChange } = this.props
    if (onChange) onChange(e)
  }

  toggle = () => {
    debug('toggle()')
    const { disabled, readOnly } = this.props
    if (disabled || readOnly) return
    this.trySetState({ checked: !this.state.checked })
  }

  render() {
    const { className, label, kind, tabIndex, type } = this.props
    const { checked } = this.state

    const _kind = kind || type

    const classes = cx(
      'sd-checkbox',
      'ui',
      // don't add duplicate "checkbox" classes, but add any other kind
      _kind !== 'checkbox' && _kind,
      // auto apply fitted class to compact white space when there is no label
      // http://semantic-ui.com/modules/checkbox.html#fitted
      !label && 'fitted',
      checked && 'checked',
      'checkbox',
      className
    )
    const props = getUnhandledProps(Checkbox, this.props)
    return (
      <div className={classes} onClick={this.handleClick}>
        <input
          {...props}
          {...this.state}
          type={type}
          className='hidden'
          onChange={this.handleChange}
          tabIndex={tabIndex}
        />
        <label>{label}</label>
      </div>
    )
  }
}
