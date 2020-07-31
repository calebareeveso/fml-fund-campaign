import React, {useReducer, useEffect} from 'react';
import styles from './invite.module.css';
import '../../../assets/bootstrap.css';
import { withRouter} from 'react-router-dom';
import Breadcrumb from '../user-profile/breadcrumb/breadcrumb';
import { Navbar, Footer } from '../../navigation/navigation';
import ScrollIntoView from '../../../router/scrollintoview/ScrollIntoView';
import { connect } from 'react-redux';
import { recommendUser } from '../../../../actions/actions';

const breadcrumbLinks = [
    {link: '/user-profile', label: 'Dashboard'},
    {link: '/recommendations', label: 'Create Request'},
    {link: '/recommendations', label: 'Add a Recommender'}
];

const initialState = {
    name: '',
    email: '',
    message: '',
    errors: null,
};

function reducer(state, { field, value }) {
    return {
      ...state,
      [field]: value,
    };
}


const Invite = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if (props.user.errors) {
          dispatch({ field: 'errors', value: props.user.errors });
        }
    }, [props.user.errors]);

    const onChange = (event) => {
        dispatch({ field: event.target.name, value: event.target.value });
    };

    const { email, message } = state;

    
  const onSubmit = (event) => {
    const { history } = props;
    // eslint-disable-next-line
    let validMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const errorEmail = document.getElementById('errorEmail');
    const errorMessage = document.getElementById('errorMessage');
    event.preventDefault();

    if (email === '' || email === null || !email.match(validMail)) {
      errorEmail.textContent = '* Please input a valid email.';
      setTimeout(() => {
        errorEmail.textContent = '';
      }, 2000);
    }
    if (message === '') {
      errorMessage.textContent =
        '* Please write something';
      setTimeout(() => {
        errorMessage.textContent = '';
      }, 2000);
    }

    const formData = {
      email,
      message,
    };
    props.inviteRecommender(formData, history);
  };
    return(
        <ScrollIntoView>
            <Navbar />
                <div className={['container-md  container-fluid', styles.Recommendations].join(' ')}>
                    <div className="mt-5 mb-5 px-3 px-md-0">
                        <Breadcrumb className={styles.breadCrumbStyle}>{breadcrumbLinks}</Breadcrumb>
                

                        <div className="mb-5">
                            <h1 className={styles.mainTitColor}> Invite a Recommender</h1>
                            <h1 className={styles.mobMainTitColor}> Request form</h1>
                            <p className={styles.mainSubColor}> Adding recommenders will enhance your campaign’s credibility </p>

                            <div className="row">
                                <hr className={[styles.hrStyle].join(' ')}/>
                                <hr className={[styles.hrStyle].join(' ')}/>
                                <hr className={[styles.hrStyle1].join(' ')}/>
                            </div>

                            <div className={styles.centerForm}>
                                <form 
                                    method="POST" 
                                    className={[styles.formStyle].join(' ')}
                                    onSubmit={onSubmit}>

                                <div className="mt-2 mb-5">
                                    <h3 className={styles.inviteTitle}> Invite Recommender </h3>
                                    <p className={ styles.inviteSubTitle}> Fill in details for a recommender you want to invite. </p>
                                </div>
                                    <div className="row mt-4 mb-4">
                                        <div className="col-md-6">
                                            <label htmlFor="" className={styles.Size}> Full Name </label>
                                            <input 
                                            type="text"
                                            className={styles.inputControl}
                                            placeholder=" Input Fullname"
                                            name="name"
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label htmlFor="" className={styles.Size}> Email Address </label>
                                            <input 
                                            type="text"
                                            id="errorEmail"
                                            className={styles.inputControl}
                                            placeholder=" Input email address"
                                            name="email"
                                            onChange={onChange}
                                            value={email}
                                            />
                                            <p
                                            id="errorEmail"
                                            className="text-danger text-center text-sm-left"
                                            ></p>
                                        </div>
                                    </div>
                                    <div className="mt-4 mb-4"> 
                                        <label htmlFor="" className={styles.Size}> Message </label>
                                        <textarea 
                                        name="message" 
                                        id="errorMessage" 
                                        cols="90" 
                                        rows="10"
                                        className={styles.inputControl}
                                        onChange={onChange}
                                        value={message}
                                        ></textarea>
                                    </div>

                                    <div className="d-flex justify-content-end">
                                        <button className={["btn btn-outline-fml-secondary mr-md-5 mr-lg-5 mr-3", styles.btnStyle].join(' ')}> <i className={["fa fa-chevron-left", styles.faSize].join(' ')}/> Back </button>
                                        <button className={["btn btn-fml-secondary", styles.inStyle].join(' ')}> Send Invite </button>
                                    </div>
                                    
                                </form>
                            </div>

                            
                        </div>
                    </div>
                </div>

            <Footer />
        </ScrollIntoView>
    )
};

const mapStateToProps = (state) => ({
  user: state.user,
  ui: state.ui
});
const mapActionsToProps = {
  Invite,
};


export default connect(mapStateToProps, mapActionsToProps)(withRouter(Invite));