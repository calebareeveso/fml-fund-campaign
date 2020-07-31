import React, { Component } from 'react';
import { Navbar, Footer } from '../../navigation/navigation';
import '../../../assets/bootstrap.css';
import styles from './Fundcampaign.module.css';
import head from './images/head.png';
import tag from './images/tag.png';
import fakedata from './fakedata.js';
import {Link} from 'react-router-dom'
import pageurl from '../../../router/url/pageurl';


import { connect } from 'react-redux';
import axios from 'axios';





 class EachCampaign extends Component {
        // state = {
        //     data : fakedata,
        //     clicked: 0
        // }
        state = {
            fullUserData: {},
            recommendations: [],
            errorMessage: '',
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
            
              
        
            document.getElementById('exampleModalCenter').addEventListener('click',()=>{
                setTimeout(() => {
            document.getElementById("show1").classList.remove(styles.none)
            document.getElementById("show2").classList.remove(styles.show);
            window.location.reload(true);

            }, 200);
            })
          }
        



          myDone(id){

            const token = localStorage.getItem('FMLToken');
            axios.defaults.headers.common['Authorization'] = token;

            console.log(id);
            axios.delete(`https://api.fundmylaptop.com/api/campaigns/${id}`)
            .then(res => {
                const datas = this.state.data.filter(item => item._id !== id);
                this.setState({ datas });
                }).catch(err => {
                  console.log(err);
            
               
            //   const posts = this.state.posts.filter(item => item.id !== id);
             
           
            })
           

            setTimeout(() => {
                document.getElementById("show1").classList.toggle(styles.none)
               document.getElementById("show2").classList.toggle(styles.show);
             
            }, 1000);
        
            const Continue = document.getElementById("continue")
            Continue.addEventListener('click',()=>{
            setTimeout(() => {
                document.getElementById("show1").classList.remove(styles.none)
                document.getElementById("show2").classList.remove(styles.show);
                window.location.reload(true);
            
          }, 1000);
        })


        // https://api.fundmylaptop.com/api/campaign/:campaignId
        }
          render() {
            const credentials = this.props.user.credentials;
            console.log(this.props.user.credentials);
            console.log(this.props.user.credentials.data.isAdmin);
            // { this.props.user.credentials.data.isAdmin === true ?  <button className={styles.btn2}>DELETE CAMPAIGN</button> : <button className={styles.btn2}>VIEW THIS CAMPAIGN</button> }

        
        
            const {
              // _id,
              firstName,
              lastName,
              photoURL,
              email,
              phone,
              address,
              occupation,
              gender,
              // isVerified,
              // isAdmin,
              // isAuth,
              // role,
              // isActive
            } = credentials.data;
        
            const { fullUserData } = this.state;
            const recommendations = [...this.state.recommendations];


            let load = {
                width:120,
                height:60,
                backgroundColor: "#FB3F5C"
            }
            let comps = this.state.data.map(camp => <EachCampaign camp={camp} key = {camp.id} /> )
        
        let span1 = {
            color: "#FB3F5C"
        }
        let span2 = {
            marginRight: 10
        }
        console.log(this.props.camp._id)
        return (  
            <div className={styles.campaign_component}>



                <div class="modal fade " id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered " role="document">
                    <div class="modal-content " data-dismiss="modal">
                   
                    <div className={['text-center',"modal-body", "px-5","pt-5", "text-danger" ].join(" ")}>
                       <h3 id="show1" className="pb-4"  >  <div  className={["spinner-border text-danger "].join(" ")}></div> Deleting  Campaign...</h3>
            

            
                       <h4 id="show2" className={[" text-success" , styles.none].join(" ")}> DONE ✔
                       <button type="button" id="continue" className={['btn','mt-3','btn-outline-success','w-100'].join(" ")} data-dismiss="modal">Continue</button>
                       </h4>
                    </div>
                    {/* "px-5","pt-5", */}
                    
                    </div>
                </div>
                </div>


                <div className={['mb-4', styles.line].join(" ")}></div>
                <div className="container">
                    <h3>Fund {this.props.camp.user.firstName} laptop purchase</h3>
                    <div className="row mb-4">
                        <div className={['col-12', styles.details_row].join(" ")}>
                            <img src={this.props.camp.user.photoURL} className={['float-left',styles.row_img].join(" ")}></img>
                            <div className={["d-flex flex-wrap align-items-center", styles.details_flex].join(" ")}>
                                <div className='mr-md-5'>
                                    <h3 className={styles.name}>by <span  style={span1}>{`${this.props.camp.user.firstName} ${this.props.camp.user.lastName}`}</span><span><img src={tag}className={styles.img2}></img></span></h3>
                                </div>
                                <div className="pt-2">
                                    <p><span style={span2}>{this.props.camp.user.campaignCount} Campaign Created</span><span style={span2}>|</span>  <span style={span2}>{this.props.camp.location}</span><span style={span2}>|</span><span style={span2}>{this.props.camp.createdAt}</span></p>
                                </div>
                            </div>
                        </div>
                        <div className={['container mb-4', styles.description].join(" ")}>
                            <p>{this.props.camp.description}</p>
                            <div className={styles.progress_div}>
                                <div className="row">
                                    <div className="col-9">
                                        <h3>Raised : NGN {this.props.camp.amountAccumulated} of NGN {this.props.camp.amount}</h3>
                                    </div>
                                    <div className="col-3">
                                        <h3 className="float-right">{Math.round(this.props.camp.amountAccumulated/this.props.camp.amount * 100)}%</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='mb-4'>
                                <progress className={styles.progress_bar} value={Math.round(this.props.camp.amountAccumulated/this.props.camp.amount * 100)} max="100"></progress>
                            </div>
                            <div className={['d-flex flex-wrap', styles.button_flex].join(" ")}>
                
                                { this.props.user.credentials.data.isAdmin === true ?  <button id="done" onClick={()=> this.myDone(this.props.camp._id)} className={styles.btn2} data-toggle="modal" data-target="#exampleModalCenter">DELETE CAMPAIGN</button>
                                
                                : <div className={['d-flex flex-wrap', styles.button_flex].join(" ")}> <Link className={styles.btn2} role="button" to={`${pageurl.FUND_A_CAMPAIGN}${pageurl.COMPAIGN_PAGE_URL}/${this.props.camp["_id"]}`}>
                                    VIEW THIS CAMPAIGN
                                </Link> <button className={styles.btn1}>FUND THIS CAMPAIGN</button></div> }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    user: state.user,
  });

  export default connect(mapStateToProps)(EachCampaign);
