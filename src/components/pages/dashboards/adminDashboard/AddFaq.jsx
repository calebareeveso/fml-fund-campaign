import React, { Component } from 'react'
import AdminDashboard from './adminDashboard'
import { connect } from 'react-redux';
import { addFaqs } from '../../../../actions/actions';

class AddFaq extends Component {
    constructor(props) {
        super(props)

        this.state = {
            question: "",
            answer: ""
        }

        this.onHandleChange = this.onHandleChange.bind(this)
        this.onHandleSubmit = this.onHandleSubmit.bind(this)
    }

    onHandleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onHandleSubmit(e) {
        const { question, answer } = this.state
        const data = {
            question: `${question}?`,
            answer
        }
        this.props.addFaqs(data)
        this.setState({ question: "", answer: ""})
        e.preventDefault()
    }

    render() {
        const { question, answer } = this.state
        
        return (
            <AdminDashboard>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-xl-6 mt-5">
                            <h2 className="text-center">FAQ Creation Page</h2>
                            <form className="mt-4" onSubmit={this.onHandleSubmit}>
                                <div className="form-group">
                                    <label className="ml-4 ml-md-0 ml-lg-3 font-weight-bold" htmlFor="question">Question:</label>
                                    <input 
                                        type="text" 
                                        name="question" 
                                        id="question" 
                                        className="form-control"
                                        value={question}
                                        onChange={this.onHandleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="ml-4 ml-md-0 ml-lg-3 font-weight-bold" htmlFor="answer">Answer:</label>
                                    <textarea 
                                        name="answer" 
                                        id="answer" 
                                        cols="30" 
                                        rows="10" 
                                        className="form-control"
                                        value={answer}
                                        onChange={this.onHandleChange}
                                    ></textarea>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-success py-3 px-5 font-weight-bold ml-4 ml-md-0 ml-lg-3">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </AdminDashboard>
        )
    }
}

const mapStateToProps = (state) => ({
    faqs: state.data.faqs,
});
  
const mapDispatchToProps = dispatch => {
    return {
        addFaqs: (data) => dispatch(addFaqs(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFaq);
