import React from 'react'
import { Col } from 'react-bootstrap'
import './OverviewCard.css'

const OverviewCard =({data:{img ,title , desc , style}})=>{
    return (
        
        <Col sm={6} lg={4} >
        <div className="my-2 overview-card d-flex align-items-center ">
            <div className='ml-3 mr-2 overview-card__img ' style={style}>
                <img src={img}alt=''/>

            </div>
            <div className='overview-card__info'>
                <h4 className='mb-2 overview-card__title'>{title}</h4>
                <span className='overview-card__desc'>{desc}</span>
            </div>    
        </div>
      </Col>
    )
}
export default OverviewCard