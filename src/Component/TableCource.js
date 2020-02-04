import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";
import FormKhoahoc from './FormInsert/Formkhoahoc'
import Data from './../dulieu/dulieukhoahoc.json'
import FormEditCource from './FormEdit/EditCource'

export default class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formInsertstatus : false,
            formEditstatus: false,
            data : Data,
            searchInfor :'',
            InformationEdit:{}
        }
    }
    setInsertStatus = () =>{
        this.setState({
            formInsertstatus : ! this.state.formInsertstatus,
        })
    }
    renderButton = () => {
        if (this.state.formInsertstatus == false && this.state.formEditstatus === false) {
            return (
            <div className="btn btn-sm btn-success" onClick = {() => this.setInsertStatus()}>Thêm mới</div>
            )
        }
        else if (this.state.formInsertstatus === true || this.state.formEditstatus === true){
            return(
            <div className="btn btn-sm btn-success" onClick = { () => { this.setState({
                formEditstatus:false,
                formInsertstatus:false

            })}}>Đóng</div>
            )
        }


    }
    getData = (tenkhoahoc,theloai,muctieu,gia,giangvien) =>{
        var item = {};
        item.id = 10;
        item.ten = tenkhoahoc;
        item.theloai = theloai;
        item.buoi1 = "buoi1";
        item.buoi2 = "buoi1";
        item.buoi3 = "buoi1";
        item.buoi4 = "buoi1";
        item.buoi5 = "buoi1";
        item.buoi6 = "buoi1";
        item.muctieu = muctieu;
        item.gia = gia;
        item.giangvien = giangvien;
        item.thoigianpost = "29-1-2020";
        var items = this.state.data;
        
        items.push(item)
        this.setState({
            data : items
        })
    }
    IsrenderformInsert =() =>{
        if(this.state.formInsertstatus === true )
            {return (
                <FormKhoahoc add = {(tenkhoahoc,theloai,muctieu,gia,giangvien) =>this.getData(tenkhoahoc,theloai,muctieu,gia,giangvien)}/>
        )}      
    }
    SetEditStatus = (item) => {
        var DataEdit = {
            id : item.id,
            ten : item.ten,
            theloai : item.theloai,
            thoigianpost : item.thoigianpost,
            muctieu : item.muctieu,
            gia : item.gia,
            giangvien : item.giangvien
        }     
        this.setState({
            formEditstatus:!this.state.formEditstatus,
            InformationEdit: DataEdit
        })
    }
    ChangeData =(item) =>{
        var temp = this.state.data;
        temp.forEach(olditem => {
               if(olditem.id === item.id){
                  olditem.ten = item.ten;
                  olditem.theloai =  item.theloai;
                  olditem.muctieu =  item.muctieu;
                  olditem.gia = item.gia;
                  olditem.giangvien =  item.giangvien
               }
           });
        this.setState({
            data: temp,
            formEditstatus:false 
        })
         
    }
    IsrenderformEdit =() =>{
        if(this.state.formEditstatus === true && this.state.formInsertstatus === false)
            {return (
                <FormEditCource put ={this.state.InformationEdit}  edit ={this.ChangeData}/>
        )}      
    }
    RemoveData =(item) =>{
        var tempData = this.state.data.filter( olditem => olditem.id !== item.id);
        this.setState({
            data : tempData
        })
    }
    render() {
       
        return (   
            <div className="row">              
                <div className="container-fluid" id="container-wrapper">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Danh sách khóa học</h1>
                        { this.renderButton() }
                    </div>
                    <div className = "row">
                        <div className="col mb-4">
                                {/* Simple Tables */}
                                <div className="card">
                                
                                    <div className="table-responsive">
                                        <table className="table align-items-center table-flush">
                                            <thead className="thead-light">
                                                <tr>
                                                    <th>STT</th>
                                                    <th>Tên khóa học</th>
                                                    <th>Thể loại</th>
                                                    <th>Ngày up</th>
                                                    <th>Thao tác</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.data.map( (value,key) => {
                                                        return (  
                                                        <tr key={value.id} >
                                                            <td>{key+1} </td>
                                                            <td>{value.ten}</td>
                                                            <td>{value.theloai}</td>
                                                            <td>{value.thoigianpost}</td>
                                                            <td>
                                                                <button  className="btn btn-sm btn-danger" onClick={()=>this.RemoveData(value)}>Delete</button>
                                                                <button  className="btn btn-sm btn-primary" onClick={() => this.SetEditStatus(value)}
                                                                >Edit</button>
                                                            </td>
                                                        </tr> 
                                                        )
                                                    })
                                                }
                                                    
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="card-footer"/>
                                </div>
                        </div>
                        { this.IsrenderformInsert()}
                        { this.IsrenderformEdit() }
                    </div>
                </div>    
            </div>              
        )
    }
}
