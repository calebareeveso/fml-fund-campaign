import React from 'react';
import PaymentCss from './payment.module.css';
import { connect } from 'react-redux';
import { makePayment } from '../../../../actions/actions';


const INITIAL_STATE = {
    amount: "",
    holder: "",
    number: "",
    date: "",
    cvv: ""
}
class Payment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {...INITIAL_STATE}

        this.onHandleChange = this.onHandleChange.bind(this)
        this.onHandleSubmit = this.onHandleSubmit.bind(this)
    }

    componentDidMount () {
        document.title = "Payment"
    }

    onHandleChange(e) {
        this.setState({[e.target.id]: e.target.value})
    }

    onHandleSubmit(e) {
        const { amount, number, date, cvv } = this.state
        const newDate = date.split('/')
        const data = {
            card_number: number,
            cvv,
            amount,
            expiry_year: newDate[1],
            expiry_month: newDate[0],
            fundee: this.props.user.credentials.data.email
        }
        this.props.makePayment(data)
        this.setState({ INITIAL_STATE })
        e.preventDefault()
    }

    render() {

        const { amount, holder, number, date, cvv } = this.state

        return (
            <div className="container-fluid py-0 bg-light">
                <div className="row vh-100 justify-content-center align-items-center px-4 px-md-0">
                    <div className={["col-md-8 col-lg-6 shadow-sm px-0 px-lg-0 px-xl-5 py-5 bg-white", PaymentCss.box_shadow, PaymentCss.payment_card].join(' ')}>
                        <h2 className="text-center">Fund this Campaign</h2>
                        <form className="px-5 mt-4" onSubmit={this.onHandleSubmit}>
                            <div className="form-group">
                                <label htmlFor="amount">How much do you plan to donate to this campaign</label>
                                <input 
                                    type="text" 
                                    className={[PaymentCss.form_control, "d-block w-100 py-3 px-3"].join(' ')} 
                                    id="amount"
                                    value={amount}
                                    onChange={this.onHandleChange}
                                    placeholder="Enter amount here in Naira" 
                                />
                            </div>
                            <div className="form-group row">
                                <div className="col">
                                    <label htmlFor="holder">Card Holder Name</label>
                                    <input 
                                        type="text" 
                                        className={[PaymentCss.form_control, "d-block w-100 py-3 px-3"].join(' ')} 
                                        id="holder"
                                        value={holder}
                                        onChange={this.onHandleChange}
                                        placeholder="Card Holder Name" 
                                    />
                                </div>
                                <div className="col">
                                    <label htmlFor="number">Card Number</label>
                                    <input 
                                        type="number" 
                                        className={[PaymentCss.form_control, "d-block w-100 py-3 px-3"].join(' ')} 
                                        id="number" 
                                        value={number}
                                        onChange={this.onHandleChange}
                                        placeholder="Card Number" 
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col">
                                    <label htmlFor="date">Card Expiry date</label>
                                    <input 
                                        type="text" 
                                        className={[PaymentCss.form_control, "d-block w-100 py-3 px-3 "].join(' ')} 
                                        id="date"
                                        value={date}
                                        onChange={this.onHandleChange}
                                        placeholder="Expiry date" 
                                    />
                                </div>
                                <div className="col">
                                    <label htmlFor="cvv">CVV</label>
                                    <input 
                                        type="number" 
                                        className={[PaymentCss.form_control, "d-block w-100 py-3 px-3"].join(' ')} 
                                        id="cvv"
                                        value={cvv}
                                        onChange={this.onHandleChange}
                                        placeholder="CVV" 
                                    />
                                </div>
                            </div>
                            <div className="form-group row justify-content-center mt-4">
                                <div className="col-6 col-lg-5">
                                    <button className="btn btn-danger btn-block py-3 font-weight-bold" type="submit">FUND NOW</button>
                                    <p className="small text-muted mt-2 text-center">An OTP will be sent to your mail</p>
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
});
  
const mapDispatchToProps = dispatch => {
    return {
        makePayment: (data) => dispatch(makePayment(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
