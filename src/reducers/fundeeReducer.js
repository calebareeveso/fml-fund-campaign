import { FETCH_FUNDEE_DASHBOARD_INFOS } from './types';
  
const initialState = {
       fundee:{
        allrefunds:[],
        amountPermonth: '0',
        interestPerMonth: '0',
        interestRate: '0',
        loanedAmount: '0',
        paidAmount: '0',
        pendingAmount: '0',
        totalTerm: '0',
       },
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_FUNDEE_DASHBOARD_INFOS:
            return {
                ...state,
                fundee: action.payload
            }
         default:
        return state;
    }
}

