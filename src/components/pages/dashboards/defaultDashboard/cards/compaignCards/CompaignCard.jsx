import React from 'react'
import { Col } from 'react-bootstrap'
import './CompaignCard.css'

const CompaignCard =({data:{img, name,job,progress, funded , left ,loan }})=>{
    return (
        <Col md={3} className='my-2'>
          <div className="compaign-card">
              {/* Card header */}
            <div className='compaign-card__header d-flex'>
                <div className="compaign-card__img">
                    <img src={img} alt=''/>
                </div>
                <div className=' ml-2 compaign-card__info'>
                     <h5 className='compaign-card__name'>{name}</h5>
                     <span className='compaign-card__job'>{job}</span>
                </div>
            </div>
              {/* Card Body   */}
            <div className="compaign-card__body">
            <p className='my-3 compaign-card__body-desc'>Loan Amount: <span>{loan}</span></p>
                <div className="progress" style={{height: '15px' }}>
                    <div className="progress-bar " 
                        role="progressbar" 
                        style={ {width: progress ,
                        backgroundColor: '#FB3F5C',
                        borderRadius: '3px 0px 0px 3px',
                        } }
                        aria-valuenow="100" aria-valuemin="0" 
                        aria-valuemax="100">
                            
                    </div>
                </div>    
                <div className='d-flex justify-content-between mt-3 mb-2'>
                    <span className='compaign-card__progress-info'>{funded} Funded</span>
                     <span className='compaign-card__progress-info'>{left} Left</span>

                </div>
             </div>
            <button className='compaign-card__btn'>View profile</button>             
        </div>
       </Col>
        
    )
}
export default CompaignCard