import React, { PureComponent } from 'react';

import closeButton from '../images/close-button-1.svg';
import DefaultInputWrapper from './defaultInputWrapper';

export const isNotEmpty = (value) => {
  let res;
  switch (typeof value) {
    case 'string':
      res = !!value.length;
      break;
    case 'number':
      res = true;
      break;
		case 'object':

    default:
      res = false;
  }

  return res;
};

class Input extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			active: false,
			value: '',
			arrow: 'down',
		};
	}

	onFocus = () => {
		this.setState({
			active: true,
			arrow: 'up',
		});
	}

	onBlur = (e) => {
		let value = e.target.value;
		const hasValue = isNotEmpty(e.target.value);
		if (this.props.type === 'file' && hasValue) {
			this.uploadImg(e.target.files[0]);
			value = e.target.files[0].name;
		}
		if (this.props.onBlur) {
			this.props.onBlur(value, this.props.name);
		}
		this.setState({
			active: hasValue,
			value: value,
			arrow: 'down',
		});
	}

	onChange = (e) => {
		let value = e.target.value;
		const hasValue = isNotEmpty(e.target.value);
		if (this.props.type === 'file' && hasValue) {
			this.uploadImg(e.target.files[0]);
			value = e.target.files[0].name;
		}
		if (this.props.onChange && hasValue) {
			this.props.onChange(value, this.props.name);
		}
		this.setState({
			active: hasValue,
			value: value,
		});
	}

	uploadImg(file) {
		const reader = new FileReader();
		const preview = document.getElementById('upload-img');

		reader.onloadend = function () {
			preview.src = reader.result;
		}
		if (file) {
			reader.readAsDataURL(file);
		}
	}

	onClear = () => {
		this.setState({ active: false, value: '' });
		this.props.onClear();
	}

	render() {
		const { active, value } = this.state;
		const { type, name, placeholder, dropdown, id, clearButton, className } = this.props;
		return (
			<DefaultInputWrapper active={active}>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          id={id}
          className={className}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={this.onChange}
          autoComplete='off'
        />
        {clearButton && <img onClick={this.onClear} className='clear-button' src={closeButton} alt='closeButton' />}
				{type === 'file' && <label className='file-label' htmlFor={id}>{active ? value : 'Выберите файл'}</label>}
			</DefaultInputWrapper>
		)
	}
}

export default Input
