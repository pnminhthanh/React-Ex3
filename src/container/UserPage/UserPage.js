import React, { useEffect, useState } from 'react';
import Table from '../Table/Table';
import axios from 'axios';
import PopUpBuilder from '../PopUpBuilder/PopUpBuilder';
import { connect } from 'react-redux';
import { Button } from '../../component/UI/Button/button';
import 'antd/dist/antd.css';
import {
  fetchUsers,
  deleteUser,
  submitUsers,
} from '../../store/actions/userActions';

const columns = [
  {
    title: 'Username',
    dataIndex: 'UserName',
    key: 'UserName',
    width: '250px',
  },
  {
    title: 'Password',
    dataIndex: 'PassWord',
    key: 'PassWord',
    width: '100px',
  },
  {
    title: 'Phonenumber',
    dataIndex: 'PhoneNumber',
    key: 'PhoneNumber',
    width: '200px',
  },
  {
    title: 'Email',
    dataIndex: 'Email',
    key: 'Email',
    width: '300px',
  },
];

const data = axios.get('/users');

function UserPage(props) {
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
    <div>
      <h1>Users Table Data</h1>
      <Button elementType="success" name="Add User" />
      <Table columns={columns} />
    </div>
  );
}
//  const mapStateToProps = state => ({
//     users: state.userReducer.users
//   });

//   export default connect(mapStateToProps)(UsersPage);

export default UserPage;
