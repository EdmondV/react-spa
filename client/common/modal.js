import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { createDate } from '../helpers/time';
import closeButton from '../images/close-button-1.svg';
import Input from './input';

const ModalWrapper = styled.form`
  height: 65%;
  width: 30%;
  margin-bottom: 5%;
  position: absolute;
  bottom: 0px;
  border-radius: 2px;
  background-color: #ffffff;
  color: #000000;
  padding: 80px 30px 30px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  opacity: ${({ show }) => show ? 1 : 0};
  z-index: ${({ show }) => show ? 1 : -1};
  transition: opacity 250ms;

  h2 {
    margin-bottom: 60px;
    font-family: HelveticaNeue;
    font-size: 36px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000000;
  }

  .close-icon {
    position: absolute;
    top: 20px;
    right: 20px;
  }

  #upload-img {
    display: none;
  }

  button[type=submit] {
    border: 0;
    outline: none;
    font-family: HelveticaNeue;
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${({ disabled }) => disabled ? '#d8d8d8' : '#000000'};
    margin: 25px 0 33px 0;
    cursor: pointer;
  }
`;

class Modal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      text: '',
      category: '',
      disabled: true,
    };
  }

  setInState = (data, type) => {
    this.setState({ [type]: data }, () => this.validate());
  }

  validate() {
    const el = document.getElementById('upload-img');
    if (!el) return;

    const { name, text, category } = this.state;

    if (!name || !text || !category || !el.src) {
      return this.setState({ disabled: true });
    }
    return this.setState({ disabled: false });
  }

  submit = () => {
    const el = document.getElementById('upload-img');
    if (!el) return;

    this.props.submit({ ...this.state, src: el.src, time: createDate(new Date(), true), id: Math.random().toString(36).substr(1, 11) });
  }

  closeModal = () => {
    this.onClear();
    this.setState({ name: '', text: '', category: '', });
    this.props.toggleModal();
  }

  onClear = () => {
    const el = document.getElementById('upload-img');
    if (!el) return;
    el.src = '';
  }

	render() {
    const { disabled } = this.state;
		const { children, show } = this.props;
		return (
			<ModalWrapper show={show} className='modal-container' disabled={disabled} onSubmit={this.submit}>
        <img className='close-icon' src={closeButton} onClick={this.closeModal} />
        <h2>TITLE</h2>
        <Input name='name' type='text' placeholder='Название' onBlur={this.setInState} />
        <Input name='text' type='text' placeholder='Текст' onBlur={this.setInState} />
        <Input name='category' type='text' placeholder='Категория' onBlur={this.setInState} dropdown />
        <Input id="file-input" type="file" name="file" onChange={this.setInState} clearButton={true} onClear={this.onClear} />
        <button type='submit' disabled={disabled}>ОТПРАВИТЬ</button>
        <img src='' id='upload-img' />
      </ModalWrapper>
		)
	}
}

export default Modal;
