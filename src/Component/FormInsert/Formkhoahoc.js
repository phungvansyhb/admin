import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";

export default class Formkhoahoc extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    ClearForm = ()=>{
        document.getElementById('FormInput1').value = null;
        document.getElementById('FormInput3').value =null;
        document.getElementById('FormInput4').value = null;
        document.getElementById('FormInput5').value = null;
    }
    submitForm = (event) =>{
        event.preventDefault()
        this.setState({
            isRedirect:true
        })

    }
    getValue =(event)=>{
        const key = event.target.name;
        const value = event.target.value; 
        this.setState({
            [key]:value
        })
      
    }
   
    render() {
       
        return (
            <div className="col-md-5 " id ="formEdit">
            <div className="card mb-4">
                <div
                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">Form insert khoa hoc</h6>
                </div>
                <div className="card-body">
                    <form name="form" >
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Tên khóa học</label>
                            <input
                                defaultValue=""
                                onChange={(event) => this.getValue(event)}
                                required
                                name="tenkhoahoc"                                
                                className="form-control"
                                id="FormInput1"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Thể loại</label>
                            <select className="form-control" id="" name="theloai" defaultValue="" onChange={(event) => this.getValue(event)}>
                                <option >---</option>
                                <option >lập trình c</option>
                                <option>web-co-ban</option>
                                <option>ardruino</option>
                                <option>proteus</option>
                                <option>altium</option>
                            </select>
                        </div>
                        {/* <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Số buổi dạy</label>
                            <input
                                onChange={(event) => this.getValue(event)}
                                name="sobuoiday"
                                required
                                className="form-control"
                                id="FormInput2"/>
                        </div> */}
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Mục tiêu khóa học</label>
                            <textarea
                             
                                name="muctieu"
                                onChange={(event) => this.getValue(event)}
                                required
                                className="form-control"
                                id="FormInput3"
                                rows={3}
                                />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Giá</label>
                            <input
                                name="gia"
                                required
                                onChange={(event) => this.getValue(event)}
                                className="form-control"
                                id="FormInput4"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Giảng Viên</label>
                            <input
                                 required
                                name="giangvien"
                                onChange={(event) => this.getValue(event)}
                                className="form-control"
                                id="FormInput5"/>
                        </div>
                        <div>
                            <button type="reset" 
                                onClick = {(tenkhoahoc,theloai,muctieu,gia,giangvien) => this.props.add(tenkhoahoc= this.state.tenkhoahoc , 
                                    theloai = this.state.theloai , muctieu = this.state.muctieu , gia = this.state.gia ,
                                    giangvien = this.state.giangvien
                                    )} 
                                className="btn btn-info">Xác nhận
                            </button>
                                    
                            <button type="button" onClick ={() =>this.ClearForm()} className="btn btn-warning">
                                    Xóa hết
                            </button>
                                {/* (event) => this.submitForm(event) */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
            
        )
    }
}
