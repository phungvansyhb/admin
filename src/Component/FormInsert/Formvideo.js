import React, { Component } from 'react'

export default class Formvideo extends Component {
    render() {
        return (
            <div>
            <div className="col-lg-12">
              {/* General Element */}
              <div className="card mb-4">
                  <div
                      className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-primary">Form edit video</h6>
                  </div>
                  <div className="card-body">
                      <form>
                          <div className="form-group">
                              <label htmlFor="exampleFormControlInput1">Tiêu đề video</label>
                              <input
                                  name="Fname"
                                  type="email"
                                  className="form-control"
                                  id="exampleFormControlInput1"/>
                          </div>
                          <div className="form-group">
                              <label htmlFor="exampleFormControlSelect1">Thể loại</label>
                              <select className="form-control" id="exampleFormControlSelect1">
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
                                  className="form-control"
                                  id="exampleFormControlTextarea1"
                                  rows={3}
                                  defaultValue={""}/>
                          </div>
                          <div className="form-group">
                              <label htmlFor="exampleFormControlInput1">Link youtube</label>
                              <input
                                  name="Fname"
                                  type="email"
                                  className="form-control"
                                  id="exampleFormControlInput1"/>
                          </div>
                         
                          <div className="form-group">
                              <label htmlFor="exampleFormControlInput1">Tác giả</label>
                              <input
                                  name="name"
                                  type="email"
                                  className="form-control"
                                  id="exampleFormControlInput1"/>
                          </div>
                          <div>
                              <button type="submit" className="btn btn-info">Xác nhận</button>
                              <button type="button" className="btn btn-warning">Hủy</button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
        )
    }
}
