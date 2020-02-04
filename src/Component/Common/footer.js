import React, {Component} from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="sticky-footer bg-white">
                    <div className="container my-auto">
                        <div className="copyright text-center my-auto">
                            <span>copyright © 2019 - developed by 
                                <b>
                                     DevZone
                                </b>
                            </span>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
