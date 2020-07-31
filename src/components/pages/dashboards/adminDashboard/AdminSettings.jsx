import React, { Component } from 'react'
import AdminDashboard from './adminDashboard'

class AdminSettings extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <AdminDashboard>
                <h1>Admin Settings</h1>
            </AdminDashboard>
        )
    }
}

export default AdminSettings
