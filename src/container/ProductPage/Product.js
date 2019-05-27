import React, { useEffect, useState } from 'react';
import Table from '../Table/Table';
import axios from 'axios';
// import PopUpBuilder from '../PopupBuilder/PopupBuilder';
// import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import './Product.css';
// import {
//   fetchUsers,
//   deleteUser,
//   submitUsers,
// } from '../../store/actions/userActions';

const columns = [
  {
    title: '#',
    dataIndex: 'index',
    key: 'index',
    width: '50px',
  },
  {
    title: 'Name',
    dataIndex: 'Name',
    key: 'Name',
    width: '250px',
  },
  {
    title: 'Category',
    dataIndex: 'Category',
    key: 'Category',
    width: '200px',
  },
  {
    title: 'Description',
    dataIndex: 'Description',
    key: 'Description',
    width: '300px',
  },
  {
    title: 'Price',
    dataIndex: 'Price',
    key: 'Price',
    width: '200px',
  },
  {
    title: 'Brand',
    dataIndex: 'Brand',
    key: 'Brand',
    width: '200px',
  },
];

function ProductPage(props) {
  // const [openModal, setOpenModal] = useState({ isOpen: false, data: {} });

  // useEffect(() => {
  //   props.dispatch(fetchUsers());
  // }, []);

  // const viewDetails = item => {
  //   var modaldata = {
  //     type: 'view',
  //     title: 'Product details',
  //     item: item,
  //   };
  //   setOpenModal({ isOpen: true, data: modaldata });
  // };

  // const deleteConfirm = item => {
  //   var modaldata = {
  //     type: 'delete',
  //     title: 'Delete Product',
  //     item: item,
  //     deleteMessage: 'Do you want to delete User ' + item.UserName + '?',
  //   };
  //   setOpenModal({ isOpen: true, data: modaldata });
  // };

  // const deleteuser = () => {
  //   props.dispatch(deleteUser(openModal.data.item.UserID));
  //   setOpenModal({ isOpen: false, data: {} });
  // };

  // const create = () => {
  //   var modaldata = {
  //     type: 'insert',
  //     title: 'New User',
  //     item: {},
  //   };
  //   setOpenModal({ isOpen: true, data: modaldata });
  // };

  // const update = item => {
  //   var modaldata = {
  //     type: 'update',
  //     title: 'Update User ' + item.UserName,
  //     item: item,
  //   };
  //   setOpenModal({ isOpen: true, data: modaldata });
  // };

  // const Submit = item => {
  //   if (openModal.data.item.UserID) {
  //     item.UserID = openModal.data.item.UserID;
  //   }
  //   props.dispatch(submitUsers(item));
  //   setOpenModal({ isOpen: false, data: {} });
  // };

  // return (
  //   <div className="Userdiv">
  //     <div className="pageTitle">Users Management Page</div>
  //     <div className="buttondiv">
  //       <Button btnType="action" text="Create" clicked={create} />
  //       <Table
  //         columns={columns}
  //         dataSource={props.users}
  //         viewDetails={viewDetails}
  //         Delete={deleteConfirm}
  //         Update={update}
  //       />
  //     </div>
  //     <PopUpBuilder
  //       feilds={ColunmModel}
  //       data={openModal.data}
  //       delete={deleteuser}
  //       submit={Submit}
  //       closeModal={() => setOpenModal({ isOpen: false, data: {} })}
  //       visible={openModal.isOpen}
  //     />
  //   </div>
  // );

  return (
    <div className="productPage">
      <div className="header">
        {' '}
        <h1 className="tittle">Products Table Data</h1>
        <button>Add Product</button>
      </div>
      <Table columns={columns} />
    </div>
  );
}
//  const mapStateToProps = state => ({
//     users: state.userReducer.users
//   });

//   export default connect(mapStateToProps)(UsersPage);

export default ProductPage;
