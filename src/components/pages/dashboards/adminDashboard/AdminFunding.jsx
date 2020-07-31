import React, { Component } from 'react'
import AdminDashboard from './adminDashboard'

class AdminFunding extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <AdminDashboard>
                <h1>Admin Fundings</h1>
            </AdminDashboard>
        )
    }
}

export default AdminFunding
