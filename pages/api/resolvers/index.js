import axios from 'axios'
import {handleCheerioData, HandleErrors} from '../../../_helpers'

export const resolvers={
Mutation:{
        getMetaData:async(parent,args,context)=>{
            try{
                const url= args.name
                const res = await axios.get(url);
                const html = res.data;
               return  handleCheerioData(html)

            }catch(err){
             throw HandleErrors(err);
            }
        }
    }
}