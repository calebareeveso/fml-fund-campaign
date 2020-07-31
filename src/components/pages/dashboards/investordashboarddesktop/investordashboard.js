import React, { Component } from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/core";
import '../../../assets/bootstrap.css';
import './investordashboard.css';
import { Navbar,Footer } from '../../navigation/navigation';
import arrowLeft from '../../../assets/images/arrow-left.svg';
import arrowRight from '../../../assets/images/arrow-right.svg';
import noHistory from '../../../assets/images/nohistory.svg';
import axios from "axios";
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';



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
        
        const slideArea = document.querySelector(".investorhelp-card-contain");
        const slide = document.querySelector(".investorhelp-card");
        const controls = document.querySelectorAll(".investorslide-control");
    
        function handleScroll(e) {
          const slideItemWidth = slide.getBoundingClientRect().width;
          if (e.target.classList.contains("investorarrow-left")) {
            console.log(-slideItemWidth);
            slideArea.scroll({
              left: -slideItemWidth + slideArea.scrollLeft,
              behavior: "smooth"
            });
          } else {
            slideArea.scroll({
              left: slideItemWidth + slideArea.scrollLeft,
              behavior: "smooth"
            });
            console.log(slideItemWidth);
          }
        }

        controls.forEach(control => {
            control.addEventListener("click", handleScroll);
        });

        
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
            <div className="container px-4" id="investorpage-container">
                <div id="content-wrap">
                    <div className="container-main">
                        <div className="">
                            <div>
                                <section className="investoruser">
                                    <h1 className="investoruser__intro">Welcome Back, <span className="investortext--secondary">{user}</span></h1>
                                    {isCampaign && (
                                        <p>
                                            Campaign available for investing. <span><a className="investorpink-text" href="#">View More</a></span>
                                        </p>
                                    )}
                                    
                                </section>
                                {isCampaign ? (
                                        <div className="investorcontain-arrow-helper">
                                            <img className="investorslide-control investorarrow-left d-block" src={arrowLeft} />
                                            <img className="investorslide-control investorarrow-right d-block" src={arrowRight} />
                                            <div className="investorhelp-card-contain row mx-0 px-0 overflow-auto mt-4">
                                            {availableCampaigns.map((campaign, idx) => (
                                                // <Campaign campaign={campaign} />
                                                
                                                    <div className="investorhelp-card rounded p-3 p-md-3" key={idx}>
                                                        <div className="investorprofile">
                                                            <span className="investorplaceholder"></span>
                                                            <div className="investorprofile-text">
                                                            <h5  title={campaign.name}>{campaign.name.length > 10 ? campaign.name.split(" ")[0] + "..." : campaign.name}</h5>
                                                            <small>{campaign.occupation}</small>
                                                            </div>
                                                        </div>
                                                        <p className="investorloan-amount">Loan Amount: {campaign.loanAmount}</p>
                                                        <div className="investorfunded-progress">
                                                            <div className="investorfunded"></div>
                                                        </div>
                                                        <div className="investorfunded-info">
                                                            <span className="investorfunded">{campaign.amountFunded} Funded</span>
                                                            <span className="investorfund-left">{campaign.amountLeft} Left</span>
                                                        </div>
                                                        <div className="w-100"></div>
                                                        <button className="btn btn-fml-secondary mt-3">Invest Now</button>
                                                    </div>
                                                
                                            ))}
                                            </div>
                                            
                                        </div>        
                                ):(
                                    <div>

                                    </div>
                                )}
                            
                                <br />
    
                                <header className='investoraccount-header'>Here is your account overview</header>
                                
                                <section className="investoraccount investorpadding">
                                    <div className="investoraccount__block investororder2">
                                        <div className="investoraccount__block--details">
                                            <small>Invested Amount</small>
                                            <br />
                                            <h2><span>NGN</span>{investedAmount}</h2>
                                        </div>
                                        <div className="investoraccount__block--details">
                                            <small>Repaid Amount</small>
                                            <br />
                                            <h2><span>NGN</span>{repaidAmount}</h2>
                                        </div>
                                        <div className="investoraccount__block--details investorhide">
                                            <small>Remaining Amount</small>
                                            <br />
                                            <h2><span>NGN</span>{remainingAmount}</h2>
                                        </div>
                                        <div className="investoraccount__block--details investorhide">
                                            <small>Investments</small>
                                            <br />
                                            <h2>{numOfInvestments}</h2>
                                        </div>
                                        <div className="investoraccount__block--details investorhide">
                                            <small>Average Investment</small>
                                            <br />
                                            <h2><span>NGN</span>{averageInterest}</h2>
                                        </div>
                                        <div className="investoraccount__block--details investorhide">
                                            <small>Average Interest</small>
                                            <br />
                                            <h2>{averageInvestment}<span>%</span></h2>
                                        </div>
                                    </div>
                                    <div className="d-flex investororder1">
                                        <div className="col-7 investordontshow">
                                            <h5 className="text-left mb-0 pb-0">Total Invested Amount</h5><br />
                                            <h5 className=".investedAmount text-left mt-0 pt-0" ><small>NGN </small>{investedAmount}</h5>
                                        </div>
                                        <div className="investorspace investordontshow"></div>
                                        <div className="overview__progress-bar mx-auto mt-md-2">
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
                                            <div className="overview__progress-info d-flex flex-column align-items-center">
                                                <h5 className="percentage">0%</h5>
                                                <span>REPAID</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </section>
    
                                <section className="investortable investortablepadding">
                                    {table.length > 0 && isLoadingTable ? ( 
                                        <div>  
                                            <div className="investortable__container">
                                                <header>Your Investments</header>
                                                <table>
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
                                                        
                                                    <tbody className="investortbody">
                                                        {table.map((row, idx) => (
                                                            <tr key={idx}>
                                                                <td>{idx}</td>
                                                                <td>{row.amount}</td>
                                                                <td>{row.interestRate}</td>
                                                                <td>{row.term ? row.term : " "}</td>
                                                                <td>{row.totalReturns}</td>
                                                                <td> <span><b className="investorday"></b></span> {row.paymentDue}</td>
                                                                <td>{row.status}</td>
                                                            </tr>
                                                            )
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    ):(
                                        <div className="investortable__container">
                                            <header className="mb-2">Your Investments</header>
                                            <table>
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
                                                <h3 className="mb-4 text-center table__no-history-title">
                                                    You Have No Investment Yet.
                                                </h3>
                                            </div>
                                        </div>          
                                    )}
        
                                </section>
                            </div>
                        </div>
                    </div>
                </div>            
            </div>
            <Footer />
        </div>
        )
    }

} 


export default InvestorsDashboard;