import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchList, fetchCount, fetchStatus } from "../actions/listAction";
import ExpandList from '../pages/ExpandList'
import { Header } from './Header';
import LoginHeader from '../Routers/loginHeader'
import SideHeader from '../pages/sideHeder';
import Footer from '../pages/footer'

class ComplainList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      buttonActive: false,
      expandedRows: []


    }
  }

  componentDidMount() {
    this.props.dispatch(fetchList('UNSOLVED'));
    this.props.dispatch(fetchCount());
    this.props.dispatch(fetchStatus())

  }
  componentDidUpdate(pp, ps) {

    let role = localStorage.getItem('role')
    console.log(role)
    if (role == 'SUPER_ADMIN') {
      this.getButton()
    }
  }
  //get button if login is super Admin
  getButton = () => {
    let role = localStorage.getItem('role')

    if (role == 'SUPER_ADMIN') {
      return <button>Update</button>
    }
    else {
      return ''
    }

  }
  handleRowClick(rowId) {
    const currentExpandedRows = this.state.expandedRows;
    const isRowCurrentlyExpanded = currentExpandedRows.includes(rowId);

    const newExpandedRows = isRowCurrentlyExpanded ?
      currentExpandedRows.filter(id => id !== rowId) :
      currentExpandedRows.concat(rowId);

    this.setState({ expandedRows: newExpandedRows });
  }
  render() {

    const { error, loading, data, status1, count } = this.props;
    if (error) {
      return <div>Error! {error.message}</div>;
    }
    if (loading) {
      return <div>Loading...</div>;
    }

    const displaystatus = (index) => status1.map((d, i) => {
      if (i == index) {
        return d.count
      }
    })


    const displayData = data.map((data1, i) => {
      const getCategory = () => {
        let categoryName = data1.category.name

        if (!categoryName) {
          return categoryName
        }
        else {
          return 'null'
        }
      }
      const clickCallback = () => this.handleRowClick(data1.id);
      const itemRows = [<tr key={data1.id} onClick={clickCallback} >
        <td>{data1.tokenNumber}</td>
        <td>{getCategory}</td>
        <td>{data1.address.line1}</td>
        <td>{data1.complainer.firstName}</td>
        <td>{data1.karyaKarta.firstName}<br />{data1.karyaKarta.phone}</td>
        <td>{data1.adhikari.firstName}</td>
        <td>{data1.createdDate}</td>
        <td>{this.getButton()}</td>
      </tr>
      ];
      if (this.state.expandedRows.includes(data1.id)) {
        itemRows.push(
          <tr key={"row-expanded-" + data1.id} style={{ color: "#fff", backgroundColor: 'gray', height: 100, }}>
            <td>description-{data1.description}</td>
            <td>Comments-{data1.comments.text}</td>
            <td>Assiged Karyakarta:-{data1.karyaKarta.firstName + data1.karyaKarta.lastName}</td>
          </tr>
        );
      }
      return itemRows
    })

    return (

      <div >
        <LoginHeader />
        < h2 > Complains({count})</h2 >
        <div style={{ color: 'blue', textAlign: "center", }}>
          <table border='1' style={{ width: 500 }}>
            <th onClick={() => this.props.dispatch(fetchList('UNSOLVED'))}>UNSOLVED({displaystatus(0)})</th>
            <th onClick={() => this.props.dispatch(fetchList('SOLVED'))}>SOLVED({displaystatus(1)})</th>
            <th onClick={() => this.props.dispatch(fetchList('ON-HOLD'))}>IN-HOLD({displaystatus(2)})</th>
            <th onClick={() => this.props.dispatch(fetchList('INPROGRESS'))}>INPROGRESS({displaystatus(3)})</th>
          </table>
        </div>
        <div style={{ textAlign: "center", }}>
          <table border='1' style={{ width: 1000, borderCollapse: 2 }} >
            <th >tokenNumber</th>
            <th>Complaint Category</th>
            <th>Assembly, Locality :<br />Address</th>
            <th>Complainer</th>
            <th>Assignee</th>
            <th>Adhikari</th>
            <th>Date</th>
            <th>Action</th>
            {displayData}

          </table>
          <Footer />

        </div>

      </div >

    )
  }
}
const mapStateToProps = state => {
  return {
    data: state.listReducer.items,
    count: state.listReducer.count,
    status1: state.listReducer.status,
    loading: state.listReducer.loading,
    error: state.listReducer.error

  }
}
export default connect(mapStateToProps)(ComplainList)
