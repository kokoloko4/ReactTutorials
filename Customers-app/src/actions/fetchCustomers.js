import { FETH_CUSTOMERS } from './../constants';
import { createAction } from 'redux-actions';
import { apiGet } from '../api';
import { urlCustomers } from '../api/urls';

export const fetchCustomers = createAction(FETH_CUSTOMERS, apiGet(urlCustomers));