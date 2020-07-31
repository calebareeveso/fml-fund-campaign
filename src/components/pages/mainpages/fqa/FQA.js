import React from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/core";
import FQACss from './FQA.module.css'
import search from './search.svg'
import { Navbar,Footer } from '../../navigation/navigation';
import ScrollIntoView from '../../../router/scrollintoview/ScrollIntoView'
import { connect } from 'react-redux';
import { fetchFaqs, fetchSearchFaqs } from '../../../../actions/actions';

class FQA extends React.Component {

    constructor (props) {
        super (props);
        this.state = {
            value: ""
        }

        this.onHandleChange = this.onHandleChange.bind(this)
        this.onHandleSubmit = this.onHandleSubmit.bind(this)
    }

    componentDidMount () {
        document.title = "FAQ"
        this.props.fetchFaqs()
    }

    onHandleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onHandleSubmit(e) {
        const { value } = this.state
        this.props.fetchSearchFaqs(value)
        this.setState({ value: ""})
        e.preventDefault()
    }

    render () {
        const { value } = this.state
        const { faqs } = this.props

        const override = css`
			display: block;
			margin: 40px auto;
			text-align: center;
			border-color: #55efc4;
			color: #04172A;
			max-width: 100%;
        `;
        
        return (
            <ScrollIntoView>
                <Navbar/>
                    <section className={[FQACss.custom__py_main, FQACss.bg_light, "container-fluid"].join(' ')}>
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-9 col-xl-6">
                                <h2 className={["text-center", FQACss.h2].join(' ')}>How can we help you?</h2>
                                <form className="position-relative my-4 px-2 px-md-5 px-lg-5 px-xl-0 d-flex justify-content-center" onSubmit={this.onHandleSubmit}>
                                    <input 
                                        type="text" 
                                        className="form-control w-100"
                                        name="value"
                                        value={value}
                                        onChange={this.onHandleChange}
                                    />
                                    <button type="submit"className={[FQACss.search_icon, "img-fluid"].join(' ')}>
                                        <img src={search} className="img-fluid" alt="search" />
                                    </button>
                                </form>
                                <h3 className={[FQACss.text_light, FQACss.h3, "text-center mb-0 mt-0"].join(' ')}>You can also browse the topics below to find what you’re looking for</h3>
                            </div>
                        </div>
                    </section>
                    <div className="bg-white">
                        <section className="container py-md-4 px-3 px-md-0">
                            <div className="row">
                                <div className="col-12 col-md-3">
                                    <h6 className={FQACss.h6}>Getting Started</h6>
                                    <div className="d-flex flex-column">
                                        <h6 className="py-0 my-3"><a className={[FQACss.links, FQACss.h6].join(' ')} href="/faq">Funding </a></h6>
                                        <h6 className="py-0 my-3"><a className={[FQACss.links, FQACss.h6].join(' ')} href="/faq">Menu III </a></h6>
                                        <h6 className="py-0 my-3"><a className={[FQACss.links, FQACss.h6].join(' ')} href="/faq">Menu IV </a></h6>
                                        <h6 className="py-0 my-3"><a className={[FQACss.links, FQACss.h6].join(' ')} href="/faq">Menu V </a></h6>
                                    </div>
                                </div>
                                <div className="col-12 col-md-9">
                                    <h2 className={["mb-4 mt-4 mt-lg-3", FQACss.h2].join(' ')}>Getting Started</h2>
                                    <div id="accordion">
                                        {!faqs ? (
                                            <BeatLoader css={override} size={40} color={"#04172A"} />
                                            ) : (
                                            faqs.map((data, idx) => (
                                                <div className="card mb-4" key={data._id}>
                                                    <div className={[FQACss.accordion_header, "card-header text-center"].join(' ')} id={`heading${idx}`}>
                                                        <h5 className={["mb-0", FQACss.h5].join(' ')}>
                                                            <button className={["pt-md-2", FQACss.no_border].join(' ')} data-toggle="collapse" data-target={`#collapse${idx}`} aria-expanded="true" aria-controls={`collapse${idx}`}>
                                                                <h5 className={["text-white", FQACss.h5].join(' ')}>{data.question}</h5>
                                                            </button>
                                                        </h5>
                                                    </div>
                                                    <div id={`collapse${idx}`} className="collapse show" aria-labelledby={`heading${idx}`} data-parent="#accordion">
                                                        <div className="card-body">
                                                            {!data.answer ? 
                                                                <span className="d-block text-center text-muted">Answer Unavailable, check back some other time</span> : 
                                                                data.answer
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                <Footer/>
            </ScrollIntoView>
        )
    }
}

const mapStateToProps = (state) => ({
    faqs: state.data.faqs,
});
  
const mapDispatchToProps = dispatch => {
    return {
        fetchFaqs: () => dispatch(fetchFaqs()),
        fetchSearchFaqs: (val) => dispatch(fetchSearchFaqs(val)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FQA);
