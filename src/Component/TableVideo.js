import React, {Component} from 'react'
import {
    BrowserRouter as Router,
   
    Link,
   
  } from "react-router-dom";
export default class Table extends Component {
    render() {
        
        return (
            <div>
                
                <div className="container-fluid" id="container-wrapper">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Danh sách Video</h1>
                        <Link to={"/insert"+this.props.match.path} className="btn btn-sm btn-success">Thêm mới</Link>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 mb-4">
                            {/* Simple Tables */}
                            <div className="card">
                               
                                <div className="table-responsive">
                                    <table className="table align-items-center table-flush">
                                        <thead className="thead-light">
                                            <tr>
                                                <th>STT</th>
                                                <th>Tên khóa học</th>
                                                <th>Thể loại</th>
                                                <th>Tác giả</th>
                                                <th>Giá</th>
                                                <th>Ngày up</th>
                                                <th>Thao tác</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <a href="#">1</a>
                                                </td>
                                                <td>Lập trình C</td>
                                                <td>Lập trình Cơ bản</td>
                                                <td>Tác giả</td>
                                                <td>xxx vnd</td>
                                                <td>ngày up</td>
                                                <td>
                                                    <a href="#" className="btn btn-sm btn-danger">Delete</a>
                                                    <a href="forms.html" className="btn btn-sm btn-primary">Edit</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="card-footer"/>
                            </div>
                        </div>
                    </div>
                    {/*Row*/}
                </div>
            </div>
        )
    }
}
