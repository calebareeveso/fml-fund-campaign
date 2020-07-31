import React from 'react';
import PaymentCss from './payment.module.css';
import { Link } from 'react-router-dom';
import pageurl from '../../../router/url/pageurl';

class PaymentSuccess extends React.Component {
    render() {

        return (
            <div className="container-fluid py-0 bg-light payment-card">
                <div className="row vh-100 justify-content-center align-items-center px-4 px-md-0">
                    <div className={["col-sm-8 col-md-6 col-lg-5 shadow-sm px-0 px-lg-0 px-xl-5 py-5 bg-white", PaymentCss.box_shadow, PaymentCss.payment_card].join(' ')}>
                        <div className="d-flex justify-content-center">
                            <i className="fas fa-check-circle fa-8x fa-lg-10x text-success"></i>
                        </div>
                        <p className="text-center mt-3 font-weight-bold">Payment Successful</p>
                        <div className="form-group row justify-content-center mt-4">
                            <div className="col-xl-6 col-lg-7 col-md-8 col-9">
                                <Link className="btn btn-outline-success btn-block py-3 font-weight-bolder" to={pageurl.INVESTOR_DASHBOARD}>
                                    RETURN TO DASHBOARD
                                </Link>
                            </div>
                        </div>
                        <p className="text-center mt-4">Secured by Flutterwave</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default PaymentSuccess;
