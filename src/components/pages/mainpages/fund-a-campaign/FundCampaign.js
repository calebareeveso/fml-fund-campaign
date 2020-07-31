import React, { Component } from 'react';
import { Navbar, Footer } from '../../navigation/navigation';
import '../../../assets/bootstrap.css';
import styles from './Fundcampaign.module.css';
import head from './images/head.png';
import tag from './images/tag.png';
import fakedata from './fakedata.js';
import {Link} from 'react-router-dom'
import pageurl from '../../../router/url/pageurl';
import axios from 'axios';
import EachCampaign from './eachCampiagn'


// class EachCampaign extends Component {
//     state = {  }
//     render() { 
//         let span1 = {
//             color: "#FB3F5C"
//         }
//         let span2 = {
//             marginRight: 10
//         }
//         return (  
//             <div className={styles.campaign_component}>
//                 <div className={['mb-4', styles.line].join(" ")}></div>
//                 <div className="container">
//                     <h3>Fund {this.props.camp.user.firstName} laptop purchase</h3>
//                     <div className="row mb-4">
//                         <div className={['col-12', styles.details_row].join(" ")}>
//                             <img src={this.props.camp.user.photoURL} className={['float-left',styles.row_img].join(" ")}></img>
//                             <div className={["d-flex flex-wrap align-items-center", styles.details_flex].join(" ")}>
//                                 <div className='mr-md-5'>
//                                     <h3 className={styles.name}>by <span  style={span1}>{`${this.props.camp.user.firstName} ${this.props.camp.user.lastName}`}</span><span><img src={tag}className={styles.img2}></img></span></h3>
//                                 </div>
//                                 <div className="pt-2">
//                                     <p><span style={span2}>{this.props.camp.user.campaignCount} Campaign Created</span><span style={span2}>|</span>  <span style={span2}>{this.props.camp.location}</span><span style={span2}>|</span><span style={span2}>{this.props.camp.createdAt}</span></p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className={['container mb-4', styles.description].join(" ")}>
//                             <p>{this.props.camp.description}</p>
//                             <div className={styles.progress_div}>
//                                 <div className="row">
//                                     <div className="col-9">
//                                         <h3>Raised : NGN {this.props.camp.amountAccumulated} of NGN {this.props.camp.amount}</h3>
//                                     </div>
//                                     <div className="col-3">
//                                         <h3 className="float-right">{Math.round(this.props.camp.amountAccumulated/this.props.camp.amount * 100)}%</h3>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className='mb-4'>
//                                 <progress className={styles.progress_bar} value={Math.round(this.props.camp.amountAccumulated/this.props.camp.amount * 100)} max="100"></progress>
//                             </div>
//                             <div className={['d-flex flex-wrap', styles.button_flex].join(" ")}>
//                                 <button className={styles.btn1}>FUND THIS CAMPAIGN</button>
//                                 <Link className={styles.btn2} role="button" to={`${pageurl.FUND_A_CAMPAIGN}${pageurl.COMPAIGN_PAGE_URL}/${this.props.camp["_id"]}`}>
//                                     VIEW THIS CAMPAIGN
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }


export default class FundCampaign extends Component {
        state = {
           data: [],
            clicked: 0
        }
        handleclick = () => {
            this.setState(prevstate => {
                return {
                    clicked: prevstate.clicked + 1
                }
            })
        }
        componentDidMount () {
            const token = localStorage.getItem('FMLToken');
            axios.defaults.headers.common['Authorization'] = token;
        
            axios.get(`https://api.fundmylaptop.com/api/campaigns/campaigns`).then(res => {
              this.setState({
                data: [...res.data.data]
              }, () => {
                console.log(this.state.data);
              })
            }).catch(err => {
              console.log(err);
            })
        
            
          }
    render() {
        let load = {
            width:120,
            height:60,
            backgroundColor: "#FB3F5C"
        }
        let comps = this.state.data.map(camp => <EachCampaign camp={camp} key = {camp.id} /> )
        return (
            <div className={styles.body}>
                <Navbar />
                    {/* Heading row */}
                    <div className={styles.heading_row}>
                        <div className={['container d-flex justify-content-between align-items-center py-3', styles.heading_flex].join(" ")}>
                            <div className={styles.header_left}>
                                <h1>Available Campaigns</h1>
                            </div>
                            <div className={styles.header_right}>
                                <select>
                                    <option value="sort">Sort by</option>
                                    <option value="popular">Popular</option>
                                    <option value="latest">Latest</option>
                                    <option value="oldest">Oldest</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    {this.state.clicked == 0 ? [comps[0], comps[1], comps[2]] : this.state.clicked > 0 ? comps : null}
                    <div className="d-flex justify-content-center align-items-center mb-4">
                        <button className="btn btn-sm btn-danger" onClick ={this.handleclick} style={load}>Load More</button>
                    </div>
                <Footer />
            </div>
        )
    }
}
