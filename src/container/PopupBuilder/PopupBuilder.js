import React, { Component } from 'react';
import { Modal } from 'antd';
import Button from '../../components/UI/Button/Button';
import './PopUpBuilder.css';
import FormInsert from './FormInsert/FormInsert';

class PopUpBuilder extends Component {
  details = () => {
    var ElementsArray = [];
    for (var item in this.props.data.item) {
      ElementsArray.push({
        key: item,
        value: this.props.data.item[item],
      });
    }

    let items = (
      <>
        {ElementsArray.map(element => (
          <div className="textdiv">
            <div className="text">{element.key}:</div>
            <div className="value">{element.value}</div>
          </div>
        ))}
      </>
    );

    return (
      <>
        {items}
        <div className="customfooter">
          <Button text="Close" clicked={this.props.closeModal} />
        </div>
      </>
    );
  };

  getDeleteComfirm = () => {
    let deleteBox = (
      <div className="deletemessage">{this.props.data.deleteMessage}</div>
    );
    return (
      <>
        {' '}
        {deleteBox}
        <div className="customfooter">
          <Button btnType="delete" text="OK" clicked={this.props.delete} />
          <Button text="Cancle" clicked={this.props.closeModal} />
        </div>
      </>
    );
  };

  getForm = isnew => {
    let newfi = this.props.feilds;
    for (let item in newfi) {
      if (this.props.data.item[item]) {
        newfi[item].value = this.props.data.item[item];
        newfi[item].valid = true;
      } else {
        newfi[item].value = '';
        newfi[item].valid = false;
      }
    }
    let btnName = isnew ? 'Insert' : 'Update';
    return (
      <>
        {' '}
        <FormInsert
          feilds={newfi}
          valid={!isnew}
          btnActionName={btnName}
          close={this.props.closeModal}
          submit={this.props.submit}
        />{' '}
      </>
    );
  };

  getbody = () => {
    let inputElement = null;
    switch (this.props.data.type) {
      case 'insert':
        inputElement = this.getForm(true);
        break;
      case 'update':
        inputElement = this.getForm(false);
        break;
      case 'delete':
        inputElement = this.getDeleteComfirm();
        break;
      default:
        inputElement = this.details();
    }
    return <>{inputElement}</>;
  };

  render() {
    return (
      <div>
        <Modal
          title={this.props.data.title}
          visible={this.props.visible}
          onCancel={this.props.closeModal}
          footer={null}
          destroyOnClose={true}
        >
          {this.getbody()}
        </Modal>
      </div>
    );
  }
}
export default PopUpBuilder;
