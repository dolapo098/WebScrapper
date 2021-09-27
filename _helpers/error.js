import { ApolloError } from 'apollo-server-errors';


export class AddressInfoError extends ApolloError {
    constructor(message) {
      message = message || 'Network unable to locate the address info check your connection and try again'
      super(message)
      this.name = 'AddressInfoError'
    }
  }
  
 export function HandleErrors(error){
     let msg;
     const addressNotFound='ENOTFOUND'
     if( error.code===addressNotFound){
         msg=`Network unable to  locate ${error.hostname}`
         throw new AddressInfoError(msg)
     }
 }
