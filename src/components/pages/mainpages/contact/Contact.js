import React, { Component } from 'react';
import ContactCss from './Contact.css'
import emailIcon from "./email-icon.svg"
import facebookIcon from "./facebook-icon.svg"
import instagramIcon from "./instagram-icon.svg"
import locationIcon from "./location-icon.svg"
import twitterIcon from "./twitter-icon.svg"
import linkedinIcon from "./linkedin-icon.svg"
import contactTextIcon from "./contact-text.svg"
import callIcon from "./call-icon.svg"
import {Navbar,Footer} from '../../navigation/navigation'
import ScrollIntoView from '../../../router/scrollintoview/ScrollIntoView'
import {SubmitContactForm} from '../../../../actions/contactActions'
import {connect} from 'react-redux'

class Contact extends Component {
   state = {
     name:"",
     email:"",
     title:"",
     comment:"",
     contactValidation : {

     },

   }
   
  //  componentDidUpdate(prevProps,prevState){
  //   if (prevProps.contact.contactValidation !== this.props.contact.contactValidation ) {
  //     this.setState(
  //       {
  //         contactValidation : this.props.contact.contactValidation
  //       },
  //       () => {
  //         console.log(this.state.contactValidation);
  //       }
  //     );
  //   }
  //  }

   inputOnchange = (e) => {
      this.setState ({
        [e.target.id]: e.target.value,
      })
   }

   FormSubmit = (e) => {
     

      
      let validMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if(document.getElementById("name").value !=="" && document.getElementById("email").value !=="" && document.getElementById("title").value !=="" && document.getElementById("tel").value !=="" && document.getElementById("comment").value !=="" && document.getElementById("email").value.match(validMail)) {


        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("title").value="";
       document.getElementById("tel").value="";
       document.getElementById("comment").value="";


        var x = document.getElementById("snackbar");
      
        x.className += "shows";
        x.style.transform="translateX(-50%)";
      
    
        setTimeout(()=>{ x.className = x.className.replace("shows", "");
                         x.style.transform="translateX(0%)";
      }, 3000);

    


      e.preventDefault();
      const newContact = {
          name: this.state.name,
          email: this.state.email,
          title: this.state.title,
          comment: this.state.comment

      }
      this.props.SubmitContactForm(newContact);

      
      } else {
        
        var y = document.getElementById("snackbar2");
      
        y.className += "shows2";
        y.style.transform="translateX(-50%)";
      
    
        setTimeout(()=>{ y.className = y.className.replace("shows2", "");
                         y.style.transform="translateX(0%)";
      }, 3000);


      }

    
   };
     render() {
    return(
    <ScrollIntoView>
    <Navbar />
    <div className={ContactCss.contact}>

      <main className="container-fluid px-0">
        <div className="top-image">
          <img className="top-image__title" src={contactTextIcon} alt="" />
          <p className="top-image__text">Feel free to contact us anytime. We will get back to you as soon as possible</p>
        </div>
        <section className="back-wrap">
         <div id="snackbar" className="back-wrap2" > Submitted  </div>
         <div id="snackbar2" className="back-wrap3" > Please fill the form correctly</div>

          <div className="row container-fluid mx-auto main-wrap">
            <div className="col contact--wrap container-fluid">
              <div className="contact--wrap-1">
                <div className="py-2 contact-item d-flex align-items-center mb-4">
                  <img className="mx-4" src={callIcon} alt="" />
                  <div className="contact-item__group">
                    <p className="contact-item__title mb-0">Phone Number</p>
                    <span className="contact-item__num">(+234) 81 770 47279 </span>
                  </div>
                </div>
                <div className="py-2 contact-item nth-3 d-flex align-items-center mb-4">
                  <img className="mx-4" src={emailIcon} alt="" />
                  <div className="contact-item__group">
                    <p className="contact-item__title mb-0">Email Address</p>
                    <span className="contact-item__num">example@gmail.com</span>
                  </div>
                </div>
              </div>
              <div className="contact--wrap-2">
                <div className="py-2 contact-item d-flex align-items-center mb-4">
                  <img className="mx-4" src={locationIcon} alt="" />
                  <div className="contact-item__group">
                    <p className="contact-item__title mb-0">Location</p>
                    <span className="contact-item__num">Plot 1, Awolowo Way, Ikeja, Lagos</span>
                  </div>
                </div>
                <div className="py-2 contact-item d-flex align-items-center justify-content-between px-4">
                <img className="my-1" src={facebookIcon} alt="" />
                <img className="my-1" src={instagramIcon} alt="" />
                <img className="my-1" src={twitterIcon} alt="" />
                <img className="my-1" src={linkedinIcon} alt="" />
                   
                </div>
              </div>
            </div>
            <div className="col px-0">
              <div className="container px-0 form--wrap">
                <div className="form--case">
                  <div>
                    <p className="contact-item__title">Send a Message</p>
                    <span className="contact-item__num">Do you have anything you want to tell us? Get in touch with us today.</span>
                  </div>
                  <form className="form-field">
                    <div className="row m-0 d-flex justify-content-between">
                      <div className="form-group form-item--input">
                        <label htmlFor="name" >Full Name</label>
                        <input onChange={this.inputOnchange} type="text" className="contact-item__num py-4 form-control" id="name" placeholder="Input full name" required />
                      </div>
                      <div className="form-group  form-item--input">
                        <label htmlFor="email">Email Address</label>
                        <input onChange={this.inputOnchange} type="email" className="contact-item__num py-4 form-control" id="email" placeholder="Input email" required/>
                      </div>
                    </div>
                    <div className="row m-0 d-flex justify-content-between">
                      <div className="form-group form-item--input">
                        <label htmlFor="tel">Phone Number</label>
                        <input onChange={this.inputOnchange} type="phone" className="contact-item__num py-4 form-control" id="tel" placeholder="Input phone number" required/>
                      </div>
                      <div className="form-group form-item--input">
                        <label htmlFor="title">Subject</label>
                        <input onChange={this.inputOnchange} type="text" className="contact-item__num py-4 form-control" id="title" placeholder="Input subject" required/>
                      </div>
                    </div>
                    <div className="form-group w-100">
                      <label htmlFor="comment">Message</label>

                      <textarea onChange={this.inputOnchange} className="pt-3 form-item--text-area contact-item__num form-control col-12" id="comment" rows placeholder="Input message" defaultValue={""} required/>
                    </div>
                    <button onClick={this.FormSubmit} className="form-submit" type="submit">Send Message</button>

                    
                  </form>

                </div>
              </div>
            </div>
          </div>
        </section>
      </main> 
        </div>
        <Footer/>
      </ScrollIntoView>
     )
     }
}

const mapStateToProps = (state) => ({
  contact: state.contact,
});


export default connect(mapStateToProps, { SubmitContactForm })(Contact);