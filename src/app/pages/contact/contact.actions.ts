import { Injectable } from "@angular/core";
import { IAction } from "../../models/IAction.model";
import { APP_CONSTANTS } from "../../shared/app.constants";



@Injectable()
export class ContactActions {


    setContact(data: any): IAction {
        return {
         type: APP_CONSTANTS.ADD_NEW_CONTACT,
         payload: data
        };

    }
    
}
