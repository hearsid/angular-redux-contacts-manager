import { APP_CONSTANTS } from "../../shared/app.constants";
import { fromJS } from 'immutable';
import { IReducer } from "../../models/IReducer.model";
import { IAction } from "../../models/IAction.model";

const contactListInitialState = fromJS({
    contacts: [],
});

export const contactListReducer: IReducer<any> =  ( state: any = contactListInitialState, action: IAction) =>  {
    switch(action.type) {
        case APP_CONSTANTS.LOAD_CONTACT_LIST:
            return state.merge(fromJS({
                contacts: action.payload
            })
        );

        default:
            return state;
    }
};