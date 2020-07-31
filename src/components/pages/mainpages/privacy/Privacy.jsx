import React, { Component } from 'react';
import Privacy from './Privacy.module.css';
// import ScrollIntoView from '../../../router/scrollintoview/ScrollIntoView'
import { Navbar,Footer } from '../../navigation/navigation';
import ScrollIntoView from '../../../router/scrollintoview/ScrollIntoView'

class PrivacyPage extends Component {

    componentDidMount() {
        document.title = "Privacy Policy"
    }

    render() {
        return (
            <ScrollIntoView>
            <Navbar/>          
                <div className={[Privacy.main_bg, Privacy.text, Privacy.custom__px_main, Privacy.custom__py_main].join(' ')}>
                    <h1 className={Privacy.text_light}>PRIVACY POLICY</h1>
                </div>
                <div className={[Privacy.custom__px_main, Privacy.text, Privacy.text_dark].join(' ')}>
                    <div className={[Privacy.box_shadow, Privacy.custom__px1_main, Privacy.custom__py1_main, Privacy.mt_offset, Privacy.mb_main].join(' ')}>
                        <h4 className={Privacy.text_center}>Last updated: 23rd June, 2020.</h4>
                        <p>
                            Fund my Laptop operates http://www.mysite.com (change this) (the "Site"). This page informs you of our policies regarding 
                            the collection, use and disclosure of Personal Information we receive from users of the Site.
                        </p>
                        <p>
                            We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection 
                            and use of information in accordance with this policy.
                        </p>

                        {/** Information terms */}

                        <h6>Information Collection And Use</h6>
                        <p>
                            While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or 
                            identify you. Personally identifiable information may include, but is not limited to your name ("Personal Information").
                        </p>

                        {/** Log data terms */}

                        <h6>Log Data</h6>
                        <p>
                            Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data").
                        </p>
                        <p>
                            This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the 
                            pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics.
                        </p>
                        <p>
                            The Log Data section is for businesses that use analytics or tracking services in websites or apps, like Google Analytics. 
                            For the full disclosure section, create your own Privacy Policy.
                        </p>

                        {/** Communications terms */}

                        <h6>Communications</h6>
                        <p>
                            We may use your Personal Information to contact you with newsletters, marketing or promotional materials and other information 
                            that ...
                        </p>
                        <p>
                            The Communications section is for businesses that may contact users via email (email newsletters) or other methods. For the 
                            full disclosure section, create your own Privacy Policy.
                        </p>

                        {/** Cookies terms */}

                        <h6>Cookies</h6>
                        <p>
                            Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser 
                            from a web site and stored on your computer's hard drive.
                        </p>
                        <p>
                            Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when 
                            a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.
                        </p>

                        {/** Security terms */}

                        <h6>Security</h6>
                        <p>
                            The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, 
                            or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal 
                            Information, we cannot guarantee its absolute security.
                        </p>

                        {/** Changes terms */}

                        <h6>Changes To This Privacy Policy</h6>
                        <p>
                            This Privacy Policy is effective as of (add date) and will remain in effect except with respect to any changes in its provisions 
                            in the future, which will be in effect immediately after being posted on this page.
                        </p>
                        <p>
                            We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. 
                            Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your 
                            acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.
                        </p>
                        <p>
                            If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided 
                            us, or by placing a prominent notice on our website.
                        </p>

                        {/** Contact terms */}

                        <h6>Contact Us</h6>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us.
                        </p>
                    </div>
                </div>
            <Footer/>
            </ScrollIntoView>
        )
    }
}

export default PrivacyPage