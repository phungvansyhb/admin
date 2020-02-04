import React, { Component } from 'react'

export default class EditCource extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
    
    ClearForm = ()=>{
        document.getElementById('FormInput1').value = null;
        document.getElementById('FormInput2').value = null;
        document.getElementById('FormInput3').value =null;
        document.getElementById('FormInput4').value = null;
        document.getElementById('FormInput5').value = null;
    }
    getValue =()=>{
        var  item = {
            id : this.props.put.id,
            ten : document.getElementById('FormInput1').value ,
            theloai : document.getElementById('FormSelect').value,
            muctieu : document.getElementById('FormInput3').value ,
            gia : document.getElementById('FormInput4').value ,
            giangvien : document.getElementById('FormInput5').value
           
        }
        return item
    }
    render() {
        console.log(this.props)
        return (
            <div className="col " id ="formEdit">
            <div className="card mb-4">
                <div
                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">Form edit khoa hoc</h6>
                </div>
                <div className="card-body">
                    <form name="form" >
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Tên khóa học</label>
                            <input
                                defaultValue={this.props.put.ten}
                                required
                                name="tenkhoahoc"                                
                                className="form-control"
                                id="FormInput1"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Thể loại</label>
                            <select className="form-control" id="FormSelect" name="theloai" defaultValue={this.props.put.theloai}>
                                
                                <option >lập trình c</option>
                                <option>web-co-ban</option>
                                <option>ardruino</option>
                                <option>proteus</option>
                                <option>altium</option>
                            </select>
                        </div>
                       
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Mục tiêu khóa học</label>
                            <textarea
                                name="muctieu"
                                required
                                defaultValue={this.props.put.muctieu}
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
                                defaultValue={this.props.put.gia}
                                className="form-control"
                                id="FormInput4"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Giảng Viên</label>
                            <input
                                 required
                                name="giangvien"
                                className="form-control"
                                defaultValue={this.props.put.giangvien}
                                id="FormInput5"/>
                        </div>
                        <div>
                            <button type="button" 
                                
                                onClick ={() => this.props.edit(this.getValue()) }
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
