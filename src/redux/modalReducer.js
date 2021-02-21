const initialState = {CustomModal: {open:false},}

const modalReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'MODAL_CLOSE':
            return {
                ...state,
                CustomModal: {open:false}
            }
        case 'MODAL_OPEN':
            return {
                ...state,
                CustomModal: {open:true, ...action.payload}
            }
        default:
            return state;
    }
}
export default modalReducer;
