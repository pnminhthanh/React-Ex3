import 'antd/dist/antd.css';
import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ['descend', 'ascend'],
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}

const TableGrid = props => {
  return (
    <Table
      columns={props.columns}
      dataSource={props.data}
      onChange={onChange}
    />
  );
};

export default TableGrid;

// import React,{ Component }  from 'react';
// import './Table.css'
// import Button from '../../components/UI/Button/Button'

// class Table extends Component {

//     Delete = (event,itemdata) => {
//         event.preventDefault();
//         this.props.Delete(itemdata);
//     }

//     getdata = (itemdata) => {
//         const listItems = this.props.columns.map(
//             (colunmName) =>
//                 <td>{itemdata[colunmName.dataIndex]}</td>
//         );
//         return <>
//                 {listItems}
//                 <td>
//                 <Button btnType="Edit" text="Edit"
//                  clicked={(event) => this.onUpdate(event, itemdata)} />
//                 <Button btnType="delete" text="Delete"
//                  clicked={(event) => this.Delete(event, itemdata)} />
//                  </td>
//                 </>;
//     }

//     onView = (event,itemdata) => {
//         event.preventDefault();
//         this.props.viewDetails(itemdata)
//     }

//     onUpdate = (event,itemdata) => {
//         event.preventDefault();
//         this.props.Update(itemdata);
//     }

//     getRows = () =>{
//         console.log(" props.dataSource", this.props.dataSource)
//         const TableData = this.props.dataSource.map(
//             (itemdata) =>
//                 <tr onDoubleClick={(event) => this.onView(event, itemdata)}>
//                     {this.getdata(itemdata)}
//                 </tr>

//         ) ;
//         return <> {TableData} </>;
//     }

//     render() {
//         const TableHeader = this.props.columns.map(
//             (item) =>
//             <th style={{width:item.width ? item.width : "200px"}}>
//             {item.title}
//             </th>
//         );

//         return (
//             <div className="tableDiv">
//                 <table >
//                  {TableHeader}
//                 <th className="action"></th>
//                 {this.getRows()}

//                 </table>
//                 <div className="helptext">Double click on row to view more details</div>
//             </div>
//         );
//       }
// }
// export default Table;
