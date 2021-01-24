import { combineReducers } from 'redux';
import cartContent from './cartContent';

export default combineReducers({
    items: cartContent
});