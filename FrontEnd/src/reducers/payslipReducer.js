import { UploadSuccess } from '../actions/actionTypes';

const initialState = {
    payslipTableData: []
};
const payslipReducer = (state = initialState, action) => {
    switch (action.type) {
        case UploadSuccess:
            return {
                ...state,
                payslipTableData: action.payload,
            };
        default:
            return state;
    }
};

export default payslipReducer;
