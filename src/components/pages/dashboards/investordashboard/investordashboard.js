import React, { Component } from 'react';
import '../../../assets/bootstrap.css';
import './investordashboard.css';
import { Navbar,Footer } from '../../navigation/navigation';
import noHistory from '../../../assets/images/nohistory.svg';
import axios from "axios";
import moneyGrowth  from  './images/money-growth1.svg'
import bomb  from  './images/bomb.svg'
import creditCard  from  './images/credit-card.svg'
import saveMoney  from  './images/save-money.svg'
import scale  from  './images/scale.svg'
import volume  from  './images/volume.svg'
import compaigncard  from  './images/compaigncard.png'


class InvestorsDashboard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            investedAmount: 1,
            repaidAmount: 0,
            remainingAmount: 0,
            averageInvestment: 0,
            averageInterest: 0,
            numOfInvestments: 0,
            table : [],
            isLoadingTable: false,
            availableCampaigns:[],
            isCampaign:false,
            user:""
        }
    }
    

    listAvailableCampaigns = () => {

        const token =  localStorage.getItem('FMLToken');
        const config = {
            headers: { 
                Authorization: `${token}` 
            }
        };
        axios.get('https://api.fundmylaptop.com/api/campaigns/availableCampaigns',config)
        .then(response => {
            console.log(response.data)
            if(response.data.success){
                this.setState({isCampaign:true})
                const { data } = response.data
                this.setState({
                    availableCampaigns:data
                });
                
            }
        })
        .catch(error => {
          console.log(error);
        });
        // try {
        //     const {data: campaignData } = await axios.get('https://api.fundmylaptop.com/api/campaigns/availableCampaigns',config)
        //     this.setState({isCampaign: false, availableCampaigns: campaignData});
        //     console.log(availableCampaigns)
        // } catch(error) {
        //     console.log(error);
        // }
    }

    getAccountOverview = () => {
        const token =  localStorage.getItem('FMLToken') 
        const config = {
            headers: { 
                Authorization: `${token}` 
            }
        };    
        

        /* Account Overview */
        axios.get('https://api.fundmylaptop.com/api/campaigns/userOverview',config)
        .then(response => {
            console.log(response)
            if(response.data.success){
                const { data } = response.data
                this.setState({
                    investedAmount: data.investedAmount,
                    repaidAmount: data.repaidAmount,
                    remainingAmount: data.remainingAmount,
                    averageInvestment: data.averageInvestment,
                    averageInterest: data.averageInterest,
                    numOfInvestments: data.numOfInvestments
                });
                
            }
        })
        .catch(error => {
          console.log(error);
        });

    }

    listFundedCampaigns = async() => {

        const token =  localStorage.getItem('FMLToken');
        const config = {
            headers: { 
                Authorization: `${token}`
            }       
        };

        
        axios.get('https://api.fundmylaptop.com/api/campaigns/fundedCampaigns',config)
        .then(response => {
            console.log(response.data)
            if(response.data.success){
                this.setState({isLoading:true})
                const { data } = response.data
                this.setState({
                    table:data
                });
                console.log(response.data.data);
                
            }
        })
        .catch(error => {
          console.log(error);
        });

    }
    // listFundedCampaigns = async() => {

    //     const token =  localStorage.getItem('FMLToken');
    //     const config = {
    //         headers: { 
    //             Authorization: `${token}`
    //         }       
    //     };

    //     this.setState({isLoadingTable: true});
    //     try {
    //         const {data: {data: campaignTable}} = await axios.get('https://api.fundmylaptop.com/api/campaigns/fundedCampaigns',config);
    //         this.setState({isLoadingTable: false, table: campaignTable});
    //     } catch (error) {
    //         console.log(error)   
    //     }

    // }

    firstName = () => {
        const {user: {credentials: {data: {firstName : userName}}}} = JSON.parse(localStorage.getItem('FMLState'))
        this.setState({user:userName})
    }

    componentDidMount(){
        
        this.firstName();

        this.listAvailableCampaigns();
        
        this.getAccountOverview();

        this.listFundedCampaigns();

    }
      
    render() {
        const { investedAmount,
                repaidAmount,
                remainingAmount,
                averageInvestment,
                averageInterest,
                numOfInvestments,
                table,
                isLoadingTable,
                availableCampaigns,
                isCampaign,
                user
        } = this.state;

        return(
        <div>
            <Navbar />
            <div className="investor-dashboard container-fluid mt-4">
        {/* ***Overview*** */}
        <div className="container investoroverview px-0">

          <h3 className="investortitle pt-3">
            Welcome back,<span> {user.charAt(0).toUpperCase().concat(user.slice(1))}</span>
          </h3>
          <div
            className=" my-4 
                 d-flex 
                 flex-wrap
                 justify-content-between
                 align-items-center"
          >
            <h4 className="my-0 mx-sm-0 mx-auto investoroverview__title">
              ACCOUNT OVERVIEW
            </h4>
          </div>

          <div className="row mx-auto">
            <div className="col-9 pl-0 pr-0 pr-md-3">
              <div className="row">
                {/* Overview cards */}
                
                  <div className="col-sm-6 col-lg-4 mx-auto">
                  <div className="my-2 investoroverview-card d-flex align-items-center ">
                      <div className='ml-3 mr-2 investoroverview-card__img ' style={{
            background: ' rgba(153, 158, 163, 0.22)',
            boxShadow: '1px 2px 2px rgba(240, 235, 235, 0.2)',
        }}>
                          <img src={moneyGrowth} alt=''/>
          
                      </div>
                      <div className='investoroverview-card__info'>
                          <h4 className='mb-2 investoroverview-card__title'>#{investedAmount}</h4>
                          <span className='investoroverview-card__desc'>Invested Amount</span>
                      </div>    
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4">
                  <div className="my-2 investoroverview-card d-flex align-items-center ">
                      <div className='ml-3 mr-2 investoroverview-card__img ' style={{
            background: ' rgba(255, 184, 0, 0.16)',
            boxShadow: '1px 2px 2px rgba(240, 235, 235, 0.2)',
        }}>
                          <img src={creditCard} alt=''/>
          
                      </div>
                      <div className='investoroverview-card__info'>
                          <h4 className='mb-2 investoroverview-card__title'>#{repaidAmount}</h4>
                          <span className='investoroverview-card__desc'>Repaid Amount</span>
                      </div>    
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4">
                  <div className="my-2 investoroverview-card d-flex align-items-center ">
                      <div className='ml-3 mr-2 investoroverview-card__img ' style={{
            background: ' rgba(153, 158, 163, 0.22)',
            boxShadow: '1px 2px 2px rgba(240, 235, 235, 0.2)',
        }}>
                          <img src={bomb} alt=''/>
          
                      </div>
                      <div className='investoroverview-card__info'>
                          <h4 className='mb-2 investoroverview-card__title'>#{remainingAmount}</h4>
                          <span className='investoroverview-card__desc'>Remaining Amount</span>
                      </div>    
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4">
                  <div className="my-2 investoroverview-card d-flex align-items-center ">
                      <div className='ml-3 mr-2 investoroverview-card__img ' style={{
            background: ' rgba(255, 184, 0, 0.16)',
            boxShadow: '1px 2px 2px rgba(240, 235, 235, 0.2)',
        }}>
                          <img src={volume} alt=''/>
          
                      </div>
                      <div className='investoroverview-card__info'>
                          <h4 className='mb-2 investoroverview-card__title'>#{averageInvestment}</h4>
                          <span className='investoroverview-card__desc'>Average Investment</span>
                      </div>    
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4">
                  <div className="my-2 investoroverview-card d-flex align-items-center ">
                      <div className='ml-3 mr-2 investoroverview-card__img ' style={{
            background: '#F2EBFB',
            boxShadow: '1px 2px 2px rgba(240, 235, 235, 0.2)',
        }}>
                          <img src={saveMoney} alt=''/>
          
                      </div>
                      <div className='investoroverview-card__info'>
                          <h4 className='mb-2 investoroverview-card__title'>{averageInterest} %</h4>
                          <span className='investoroverview-card__desc'>Average Interest</span>
                      </div>    
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4">
                  <div className="my-2 investoroverview-card d-flex align-items-center ">
                      <div className='ml-3 mr-2 investoroverview-card__img ' style={{
            background: '#FEF3EF',
            boxShadow: '1px 2px 2px rgba(240, 235, 235, 0.2)',
        }}>
                          <img src={scale} alt=''/>
          
                      </div>
                      <div className='investoroverview-card__info'>
                          <h4 className='mb-2 investoroverview-card__title'>{numOfInvestments}</h4>
                          <span className='investoroverview-card__desc'>Investments</span>
                      </div>    
                  </div>
                </div>
                
              </div>
            </div>
            <div className="col-md-3 my-2 py-0 investoroverview__progress
                    d-flex
                    align-items-center
                    justify-content-between"
            >
              <div className="investoroverview__progress-bar m-auto">
                <svg
                  className=""
                  width="100%"
                  height="100%"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M99.9998 8.69548C111.99 8.69548 123.863 11.0571 134.94 15.6456C146.018 20.2341 156.083 26.9595 164.562 35.4379C173.04 43.9163 179.766 53.9816 184.354 65.0592C188.943 76.1367 191.304 88.0096 191.304 99.9998C191.304 111.99 188.943 123.863 184.354 134.941C179.766 146.018 173.04 156.083 164.562 164.562C156.083 173.04 146.018 179.766 134.94 184.354C123.863 188.943 111.99 191.304 99.9998 191.304C88.0095 191.304 76.1367 188.943 65.0591 184.354C53.9816 179.766 43.9163 173.04 35.4379 164.562C26.9595 156.083 20.2341 146.018 15.6456 134.94C11.0571 123.863 8.69548 111.99 8.69548 99.9998C8.69549 88.0095 11.0572 76.1367 15.6456 65.0591C20.2341 53.9816 26.9595 43.9163 35.4379 35.4379C43.9163 26.9595 53.9817 20.2341 65.0592 15.6456C76.1368 11.0571 88.0096 8.69547 99.9999 8.69548L99.9998 8.69548Z"
                    stroke="#E1E1E1"
                    strokeWidth="8.69565"
                    strokeDasharray="1.74 1.74"
                  />
                </svg>
                <div className="investoroverview__progress-info d-flex flex-column align-items-center">
                  <h5>0%</h5>
                  <span>REPAID</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ***Compaign*** */}
        <div className="container investorcompaign">
          <div className="investorcompaign__header d-flex justify-content-between">
            <h4 className="investorcompaign__title">
              CAMPAIGNS AVAILABLE FOR INVESTING
            </h4>
            <span className="investorcompaign__view-more">View more +</span>
          </div>

          {/* Compaign cards */}
          <div className="row">
            {availableCampaigns.map((data) => (
              <div className='col-xs-8 col-md-4 col-lg-3 my-2' key={data.id}>
              <div className="compaign-card">
                  {/* Card header */}
                <div className='investorcompaign-card__header d-flex'>
                    <div className="investorcompaign-card__img">
                        <img src={compaigncard} alt=''/>
                    </div>
                    <div className=' ml-2 investorcompaign-card__info'>
                         <h5 className='investorcompaign-card__name' title={data.name}>{data.name.length > 10 ? data.name.split(" ")[0] + "..." : data.name}</h5>
                         <span className='investorcompaign-card__job'>{data.occupation}</span>
                    </div>
                </div>
                  {/* Card Body   */}
                <div className="investorcompaign-card__body">
                <p className='my-3 investorcompaign-card__body-desc'>Loan Amount: <span>{data.loanAmount}</span></p>
                    <div className="progress" style={{height: '15px' }}>
                        <div className="progress-bar " 
                            role="progressbar" 
                            style={ {width: "70%" ,
                            backgroundColor: '#FB3F5C',
                            borderRadius: '3px 0px 0px 3px',
                            } }
                            aria-valuenow="100" aria-valuemin="0" 
                            aria-valuemax="100">
                                
                        </div>
                    </div>    
                    <div className='d-flex justify-content-between mt-3 mb-2'>
                        <span className='investorcompaign-card__progress-info'>{data.amountFunded} Funded</span>
                         <span className='investorcompaign-card__progress-info'>{data.amountLeft} Left</span>
    
                    </div>
                 </div>
                <button className='investorcompaign-card__btn'>View profile</button>             
            </div>
           </div>
            ))}
          </div>
        </div>
        {/* ************** */}

        {/* ***Table*** */}
        <div className="container investordashboard-table pb-5">
          <h4 className="investorcompaign__title">Your Investments</h4>
          <div className="overflow-auto">
            {table.length > 0 && isLoadingTable ? (
               <div>
                 <table className="table overflow-auto" style={{ borderRadius: '5px 5px 0px 0px'  }}>
            <thead className="investorthead">
              <tr>
              <td>LOAN</td>
              <td>AMOUNT</td>
              <td>INTEREST RATE</td>
              <td>TERM</td>
              <td>TOTAL RETURNS</td>
              <td>PAYMENT DUE</td>
              <td>STATUS</td>
              </tr>
            </thead>
          </table>
          <tbody className="investortbody">
              {table.map((row, idx) => (
               <tr key={idx}>

                  <td>{row.id}</td>
                  <td className="lightgreen">{row.amount}</td>
                  <td>{row.interestRate}</td>
                  <td>{row.term ? row.term : " "}</td>
                  <td className="lightgreen">{row.totalReturns}</td>
                  <td> <span><b className="investorday"></b></span> {row.paymentDue}</td>
                  <td >{row.status}</td>
                </tr>
              )
              )}
          </tbody>
        </div>
            ) : (
              <div>
                <table className="table overflow-auto" style={{ borderRadius: '5px 5px 0px 0px'  }}>
            <thead className="investorthead">
              <tr>
              <td>LOAN</td>
              <td>AMOUNT</td>
              <td>INTEREST RATE</td>
              <td>TERM</td>
              <td>TOTAL RETURNS</td>
              <td>PAYMENT DUE</td>
              <td>STATUS</td>
              </tr>
            </thead>
          </table>
          <div className="my-5 d-flex flex-column align-items-center">
            <img className="img-fluid" src={noHistory} alt="no data" />
            <h3 className="mb-4 text-center investortable__no-history-title">
              You Have No History Yet.
            </h3>
          </div>
              </div>
            )}
          
          </div>
          
        </div>
        {/* *********** */}
          </div>
      <Footer />
        </div>
        )
    }

} 


export default InvestorsDashboard;