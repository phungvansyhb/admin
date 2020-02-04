import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
   
  } from "react-router-dom";
export default class Formbaiviet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false,
           

        }
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
    sentValue = () =>{
        var noidungform = "noi dung :";
        noidungform += "tieu de bai viet: " +this.state.tieude;
        noidungform += "/the loai: " +this.state.theloai;
        noidungform += "/mo ta: " +this.state.mota;
        noidungform += "/noi dung: " +this.state.noidung;
        noidungform += "/gia: "+ this.state.gia;
        noidungform += "/tac gia: " +this.state.tacgia;
        return noidungform;
    }
    render() {
        if(this.state.isRedirect){
            console.log(this.sentValue());
            return <Redirect to="/bai-viet"/>
        }
        return (
            <div>
                  <div className="col-lg-12">
                    {/* General Element */}
                    <div className="card mb-4">
                        <div
                            className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">Form edit bài viết</h6>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Tiêu đề bài viết</label>
                                    <input
                                     onChange={(event) => this.getValue(event)}
                                        name="tieude"
                                        required
                                        className="form-control"
                                        id="exampleFormControlInput1"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Thể loại</label>
                                    <select className="form-control" id="exampleFormControlSelect1" name="theloai"  onChange={(event) => this.getValue(event)}>
                                        <option>lập trình c</option>
                                        <option>web-co-ban</option>
                                        <option>ardruino</option>
                                        <option>proteus</option>
                                        <option>altium</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Mô tả ngắn</label>
                                    <textarea
                                     onChange={(event) => this.getValue(event)}
                                        name="mota"
                                        required
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows={3}
                                        defaultValue={""}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">nội dung bài viết</label>
                                    <textarea
                                     onChange={(event) => this.getValue(event)}
                                        name="noidung"
                                        required
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows={3}
                                        defaultValue={""}/>
                                </div>
                               
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Tác giả</label>
                                    <input
                                     onChange={(event) => this.getValue(event)}
                                        name="tacgia"
                                        required
                                        className="form-control"
                                        id="exampleFormControlInput1"/>
                                </div>
                                <div>
                                <button type="submit" onClick = {(event) => this.submitForm(event)} className="btn btn-info">Xác nhận</button>
                                    <Link to ="/khoa-hoc">
                                        <button type="button" className="btn btn-warning">
                                        Hủy
                                        
                                        </button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
