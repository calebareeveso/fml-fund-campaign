import React from 'react';
import PaymentCss from './payment.module.css';
import { connect } from 'react-redux';
import { makePaymentOtp } from '../../../../actions/actions';

class PaymentOtp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            otp: ""
        }

        this.onHandleChange = this.onHandleChange.bind(this)
        this.onHandleSubmit = this.onHandleSubmit.bind(this)
    }

    componentDidMount () {
        document.title = "Payment"
    }

    onHandleChange(e) {
        this.setState({otp: e.target.value})
    }

    onHandleSubmit(e) {
        const { otp } = this.state
        const data = {
            flw_ref: this.props.payment.flw_ref,
            otp,
        }
        this.props.makePaymentOtp(data)
        this.setState({ otp: "" })
        e.preventDefault()
    }

    render() {

        const { otp } = this.state

        return (
            <div className="container-fluid py-0 bg-light payment-card">
                <div className="row vh-100 justify-content-center align-items-center px-4 px-md-0">
                    <div className={["col-sm-8 col-md-6 col-lg-5 shadow-sm px-0 px-lg-0 px-xl-5 py-5 bg-white", PaymentCss.box_shadow, PaymentCss.payment_card].join(' ')}>
                        <h2 className="text-center">Enter your OTP</h2>
                        <form className="px-5 mt-4" onSubmit={this.onHandleSubmit}>
                            <div className="form-group">
                                <input 
                                    type="number" 
                                    className={[PaymentCss.form_control, PaymentCss.number_field, "d-block w-100 py-3 px-3 text-center font-weight-bold"].join(' ')} 
                                    id="otp"
                                    value={otp}
                                    onChange={this.onHandleChange}
                                    placeholder="--    --    --    --    --" 
                                    required
                                />
                            </div>
                            <div className="form-group row justify-content-center mt-4">
                                <div className="col-xl-9 col-lg-8">
                                    <button className="btn btn-success btn-block py-3 font-weight-bold" type="submit">COMPLETE PAYMENT</button>
                                </div>
                            </div>
                            <p className="text-center mt-4">Secured by Flutterwave</p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    payment: state.data.payment,
});
  
const mapDispatchToProps = dispatch => {
    return {
        makePaymentOtp: (data) => dispatch(makePaymentOtp(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentOtp);
