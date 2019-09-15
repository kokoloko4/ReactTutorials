import { combineReducers } from 'redux';
import { customers } from './customers';
import { reducer as reduxForm} from 'redux-form';
import { CUSTOMER_LIST, CUSTOMER_VIEW } from '../constants/permissions';

const user = (state, action) => ({
    permissions: []
});

export default combineReducers({
    customers,
    form: reduxForm,
    user,
});