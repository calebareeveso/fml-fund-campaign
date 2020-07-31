import { 
    CREATE_REQUEST, 
    SET_ERRORS, 
    LOADING_USER, 
    CLEAR_ERRORS, 
    FETCH_FAQS, 
    FETCH_SEARCH_FAQS, 
    ADD_FAQS, 
    MAKE_PAYMENT, 
    MAKE_PAYMENT_OTP
} from './types';
  
const initialState = {
    createdRequest: false,
    loading: false,
    errors: null,
    faqs: null,
    payment: null,
    data: {},
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CREATE_REQUEST:
        return {
            ...state,
            createdRequest: true,
            data: action.payload
        };
        case LOADING_USER:
        return {
            ...state,
            loading: true,
        };
        case SET_ERRORS:
            return {
                ...state,
                errors: action.payload,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                errors: null,
            };
        case FETCH_FAQS:
            return {
                ...state, 
                faqs: action.payload
            }
        case FETCH_SEARCH_FAQS:
            return {
                ...state, 
                faqs: action.payload
            }
        case ADD_FAQS:
            return {...state}
        case MAKE_PAYMENT:
            return {
                ...state,
                payment: action.payload
            }
        case MAKE_PAYMENT_OTP:
            return {
                ...state
            }
        default:
        return state;
    }
}

export const getFaqs = state => state.data.faqs
