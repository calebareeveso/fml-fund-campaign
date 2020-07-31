import moneyGrowth  from  './images/money-growth1.svg'
import bomb  from  './images/bomb.svg'
import creditCard  from  './images/credit-card.svg'
import saveMoney  from  './images/save-money.svg'
import scale  from  './images/scale.svg'
import volume  from  './images/volume.svg'

export const overviewData = [
    {
      id:1, 
      img: moneyGrowth ,  
      title:"₦0.00",
      desc: "Invested amount",
      style:{
        background: 'rgba(251, 63, 92, 0.1)',
        boxShadow: '1px 2px 2px rgba(240, 235, 235, 0.2)',
      },   
    },
    {   id:2,
        img: creditCard ,  
        title:"₦0.00",
        desc: "Repaid amount",
        style:{
            background: '#EEF9FF',
            boxShadow: '1px 2px 2px rgba(240, 235, 235, 0.2)',
        },   
      },
        {
        id:3,
        img: bomb ,  
        title:"₦0.00",
        desc: "Remaining amount",
        style:{
            background: ' rgba(153, 158, 163, 0.22)',
            boxShadow: '1px 2px 2px rgba(240, 235, 235, 0.2)',
        },   
        
      },
      { id:4,
        img: volume ,  
        title:"₦0.00",
        desc: "Average investment ",
        style:{
            background: ' rgba(255, 184, 0, 0.16)',
            boxShadow: '1px 2px 2px rgba(240, 235, 235, 0.2)',
        }, 
      },
      { id:5,
        img: saveMoney ,  
        title:"0.0%",
        desc: "Average investment ",
        style:{
            background: '#F2EBFB',
            boxShadow: '1px 2px 2px rgba(240, 235, 235, 0.2)',
        }, 
      },
      { id:6,
        img: scale ,  
        title:"0",
        desc: "Investments",
        style:{
            background: '#FEF3EF',
            boxShadow: '1px 2px 2px rgba(240, 235, 235, 0.2)',
        }, 
      },
  ];