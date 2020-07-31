import React, {Component} from 'react';
import axios from 'axios';
import styles from './Campaign.module.css';
import { Navbar, Footer } from '../../navigation/navigation';
import '../../../assets/bootstrap.css';
import Image1 from './img/a.png';
import Image2 from './img/b.png';
import Image3 from './img/c.png';
import Image4 from './img/d.png';
import Image5 from './img/e.png';
import Image6 from './img/f.png';
import Image7 from './img/facebook.png';
import Image8 from './img/instagram.png';
import Image9 from './img/twitter.png';
import Image10 from './img/mail.png';



// data:
// campData: {occupation: "student", currency: "NGN", amountAccumulated: 123456789, isFeatured: true, _id: "5d713995b721c3bb38c1f5d0", …}
// recommenders: Array(5)
// 0:
// createdAt: "2020-07-25T18:11:16.790Z"
// recUser: "5d7a514b5d2c12c7449be042"
// text: "dude is honest"
// updatedAt: "2020-07-25T18:11:16.790Z"
// user: {photoURL: "https://res.cloudinary.com/major-stark/image/upload/v1581430386/samples/imagecon-group.jpg", _id: "5d7a514b5d2c12c7449be044", firstName: "Gabriel", lastName: "Chia", email: "gchia@gmail.com", …}
// __v: 0
// _id: "5f1c75c4f8a31700139aca3c"
// __proto__: Object
// 1: {_id: "5f1c75c4f8a31700139aca3f", user: {…}, recUser: "5d7a514b5d2c12c7449be042", text: "screen, Lorem ipsum dolor sit amet, consectetur adipiscing elit", createdAt: "2020-07-25T18:11:16.791Z", …}






class CAMPAIGN extends Component
{

    componentDidMount() {
        this.fetchCampaign()
    }

    fetchCampaign() {
        axios.get(`https://api.fundmylaptop.com/api/campaigns/campaign/5d713995b721c3bb38c1f5d1
`)
      .then(res => {
        const campaign = res.data;
        console.log(campaign);

        // //DYNAMIC FULL NAME
        document.getElementById("name_Cam").innerHTML = `${campaign.data.campData.user.firstName} ${campaign.data.campData.user.lastName}`;
        document.getElementById("name1_Cam").innerHTML = `${campaign.data.campData.user.firstName} ${campaign.data.campData.user.lastName}'s Laptop purchase`;
        document.getElementById("name2_Cam").innerHTML = `${campaign.data.campData.user.firstName} ${campaign.data.campData.user.lastName}`;

        
       
        // //DYNAMIC PHONE NUMBER
        document.getElementById("Num_Cam").innerHTML = `${campaign.data.campData.user.phone}`;

        // //DYNAMIC STATEMENT
        document.getElementById("laptopName_comp").innerHTML = `${campaign.data.campData.description}. Thank you for your time 🙂. `;

        // //DYNAMIC LOAN AMOUNT
        document.getElementById("amt_Cam").innerHTML = `${campaign.data.campData.amount} ${campaign.data.campData.currency}`;

        // //DYNAMIC DESCRIPTION
        document.getElementById("desc_Cam").innerHTML = `${campaign.data.campData.title}`;

        // //DYNMAIC DATE
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const day = days[new Date().getDay()];
        const date = new Date().getDate();
        const month = months[new Date().getMonth()];
        const year = new Date().getFullYear();
        document.getElementById("date_camp").innerHTML = `${day} ${month} ${year}`;

        //DYNAMIC EMAIL
        document.getElementById("Email_Cam").innerHTML = `${campaign.data.campData.user.email}`;

        //DYNAMIC ADDRESS
        document.getElementById("add_Cam").innerHTML = `${campaign.data.campData.user.address}`;

         //DYNAMIC OCCUPATION
         document.getElementById("occ_cam").innerHTML = `${campaign.data.campData.occupation}`;

         //RECOMMENDERS TEXT 
         if(campaign.data.recommenders.length > 0) {
         document.getElementById("rec_txt_com").innerHTML = `${campaign.data.recommenders[0].text}`;
         document.getElementById("rec_txtt_com").innerHTML = `${campaign.data.recommenders[1].text}`;
         document.getElementById("rec_txttt_com").innerHTML = `${campaign.data.recommenders[2].text}`;
         } else {
             document.querySelector("#recommendations").style.display='none'
         }


      })

    }

 

    render() {
        return (
            <>
            <Navbar/>
            
                <div class={styles.bigCont}>
                    <div class="container">
                        <p className="mt-4" className={styles.navHead}>Home / Campaigns page / <span className={styles.specColor}>Compaign</span></p>
    
                        <p id="name1_Cam" className="mt-4" className={styles.pageHead}></p>
    
                        <div className={styles.centerDiv}>
                            <img className="img-fluid" className={styles.mainImg}  src={Image1} alt=""></img>
                            <img className="img-fluid" className={styles.playImg}  src={Image2} alt=""></img>
    
    
                            {/* ROW  ONE */}
                            <div className="row">
                                <div className="col-sm-6  col-12">
                                    <p className={styles.rowParaHead}>Posted by:</p>
                                    <div className="list-inline" className={styles.smGrp1}>
                                        <img className="img-fluid list-inline-item" src={Image3} alt=""></img>
                                        <p id="name_Cam" className="list-inline-item mt-4" className={styles.row1Para}></p>
                                    </div>
                                    <p id="Num_Cam"></p>
                                    <p id="Email_Cam"></p>
                                </div>
    
                                <div className="col-sm-6  col-12">
                                    <p className={styles.rowParaHead}>Posted on:</p>
                                    <p id="date_camp" className={styles.row1Para}></p>
                                </div>
    
                                <hr></hr>
                            </div>
    
    
                            {/* ROW  TWO */}
                            <div className="row">
                                <div className="col-sm-6  col-12">
                                    <p className={styles.rowParaHead}>Location:</p> 
                                    <p id="add_Cam" className={styles.row2Para}></p>
                                </div>
    
                                <div className="col-sm-6  col-12">
                                    <p className={styles.rowParaHead}>Occupation</p>
                                    <p id="occ_cam" className={styles.row2Para}></p>
                                </div>
    
                                <hr></hr>
                            </div>
    
    
                            {/* ROW  THREE */}
                            <div>
                                <p className={styles.desc}>Description</p>
                                <p id="desc_Cam" className={styles.row2Para}></p>
                                <p id="laptopName_comp" className={styles.descPara}></p>
    
                                <hr></hr>
                            </div>
    
                           
                            {/* ROW  FOUR */}
                            <div id="recommendations">
                                <p className={styles.rowParaHead}>Recommended by:</p>
    
                                <div  className="row pl-1" >
                                    <div className="list-inline col-sm-6 col-12" className={styles.row4Res, styles.row4, styles.smGrp2}>
                                        <img className="list-inline-item img-fluid" src={Image6} alt=""></img>
                                        <p  id="name_Cam" className="list-inline-item ml-4" className={styles.row2Para}> Jane Doe</p>
                                        <p id="rec_txt_com" className="list-inline-item ml-4" className={styles.rowParaHead}>11 successsful recommendations</p>
                                    </div>
 
                                    <div className="list-inline col-sm-6 col-12 ml-4" className={styles.row4Res, styles.row4, styles.smGrp}>
                                        <img className="list-inline-item img-fluid" src={Image4} alt=""></img>
                                        <p className="list-inline-item" className={styles.row2Para}>Vivian Doe</p>
                                        <p id="rec_txtt_com" className="list-inline-item" className={styles.rowParaHead}>7 successsful recommendations</p>
                                    </div>
                                </div>

                                <div  className="row mt-4 pl-1" >
                                    <div className="list-inline col-sm-6 col-12" className={styles.row4Res, styles.row4, styles.smGrp2}>
                                        <img className="list-inline-item img-fluid" src={Image5} alt=""></img>
                                        <p id="name2_Cam" className={styles.row2Para}></p>
                                        <p id="rec_txttt_com" className="list-inline-item" className={styles.rowParaHead}>6 successsful recommendations</p>
                                    </div>

                                    <div className="list-inline col-sm-6 col-12  mt-4" className={styles.row4Re, styles.row4, styles.smGrp3}>
                                        <a href=""><p className="list-inline-item" className={styles.rowParaHead, styles.specColor}>View recommender details</p></a>
                                    </div>

                                    <hr></hr>
                                </div>
                            </div>

                            
    
                            {/* ROW  FIVE */}
                            <div className="row">
                                <div className="col-sm-6  col-12">
                                    <p className={styles.rowParaHead}> Loan amount:</p>
                                    <p id="amt_Cam" className="font-weight-bold" className={styles.row1Para}></p>
                                </div>
    
                                <div className="col-sm-6  col-12">
                                    <p className={styles.rowParaHead}>Proposed Repayment period:</p>
                                    <p className={styles.row1Para}>3 months</p>
                                </div>
    
                                <hr></hr>
    
                            </div>
    
                            {/* ROW  SIX */}
                            <div className="row">
                                <div className="col-sm-9  col-12">
                                    <p className={styles.row2Para}>Get a <span className="font-weight-bold">N 275,000 </span>repayment in 3 months if you fund this loan</p>
                                </div>
    
                                <div className="col-sm-3  col-12" className={styles.resCenter}>
                                    <button className="text-light"  className={styles.btn} type="submit">Fund this loan</button>
                                </div>
    
                                <hr></hr>
    
                            </div>
    
                            {/* ROW  SEVEN */}
    
                            <div className="row">
                                <div className="col-sm-8  col-12">
                                    <p className={styles.row2Para}>Can’t fund? Want to help? Share this campaign on social media </p>
                                </div>
    
                                <div className="col-sm-4  col-12">
                                    <div className="list-inline"  className={styles.resCenter}>
                                        <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ffundmylaptop.com%2Fcampaign">
                                        <img className={styles.socialImg} src={Image7} alt=""></img>
                                        </a>
                                        <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Ffundmylaptop.com%2Fcampaign&text=Help%20fund%20a%20laptop">
                                        <img className="ml-4" className={styles.socialImg} src={Image9} alt=""></img>
                                        </a>
                                        <img className="ml-4"  className={styles.socialImg} src={Image10} alt=""></img>
                                        <img className="ml-4" className={styles.socialImg} src={Image8} alt=""></img>
                                    </div>
                                </div>
                            </div>
                       
            
                        </div>
    
                    </div>
    
                </div>
             
              
            <Footer/>
            </>
        )
    }
    
    
}

export default CAMPAIGN;
