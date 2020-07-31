import React, { useState, useEffect } from "react";
import "../pages/dashboards/adminDashboard/adminDashboard.css";
import axios from "axios";
const AdminTable = () => {
	const [admins, setAdmin] = useState("");
	useEffect(() => {
		const apiUrl =
			"https://fundmylaptopadmin.herokuapp.com/api/admin/dashboard";
		axios.get(apiUrl).then((response) => setAdmin(response.data.data.campaigns));
	},[]);

	const totalProfit = admins.totalProfit


	return admins ? (
		<table className="table table-light bg-white mt-3 shadow-sm">
			<thead className="thead-blue text-white">
				<tr>
					<td className="py-3 d-none d-md-block">ID</td>
					<td className="py-3">Name</td>
					<td className="py-3 d-none d-md-block">Amount</td>
					<td className="py-3">Status</td>
				</tr>
			</thead>
			{admins.map((admin) => {
				return (
					<tbody>
						<tr>
							<td className="py-4 d-none d-md-block"></td>
							<td className="py-4 py-md-2">
								<img src= {admin.photoURL} className="img-fluid d-none d-md-inline mr-3" alt="img" 
								style={{height:"40px", width:"40px", borderRadius:"50%"}} />{" "}
								{admin.name}
							</td>
							<td className="py-4 d-none d-md-block">{admin.amount}</td>
							<td className="py-4">
								<span className="status-success pl-4 py-2">{admin.status}</span>
							</td>
						</tr>
					</tbody>
				)
			})}
		</table>
	) : "";
};
export default AdminTable;
