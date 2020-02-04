import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import TableCource from '../Component/TableCource.js';
import TableNew from '../Component/TableNew.js';
import TableProject from '../Component/TableProject';
import TableVideo from '../Component/TableVideo';

import Formkhoahoc from '../Component/FormInsert/Formkhoahoc';
import Formbaiviet from '../Component/FormInsert/Formbaiviet';
import Formvideo from '../Component/FormInsert/Formvideo';
import Formproject from '../Component/FormInsert/Formproject';

import FormEditCource from '../Component/FormEdit/EditCource'

export default class Dieuhuong extends Component {
    render() {
        return (
            <div>
                <Switch>
                    {/* <Route  path="/insert/khoa-hoc" >
                            <Formkhoahoc/>
                    </Route> */}
                    <Route  path="/insert/bai-viet" >
                            <Formbaiviet/>
                    </Route>
                    <Route  path="/insert/video" >
                            <Formvideo/>
                    </Route>
                    <Route  path="/insert/project" >
                            <Formproject/>
                    </Route>

                     <Route  path="/edit-khoa-hoc" >
                            <FormEditCource/>
                    </Route>
                    {/* <Route  path="/insert/bai-viet" >
                            <Formbaiviet/>
                    </Route>
                    <Route  path="/insert/video" >
                            <Formvideo/>
                    </Route>
                    <Route  path="/insert/project" >
                            <Formproject/>
                    </Route> */} */}

                    <Route   path="/khoa-hoc" component={TableCource}>
                        
                    </Route>
                    <Route path="/project" component={TableProject}>
                        
                    </Route>
                    <Route path="/video" component={TableVideo}>
                        
                    </Route>
                    <Route path="/bai-viet" component={TableNew}>
                        
                    </Route>
                  
                </Switch>
            </div>
        )
    }
}
