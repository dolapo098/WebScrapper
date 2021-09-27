import React,{useState} from 'react'
import {GET_META_DATA} from '../_helpers'
import { useMutation} from '@apollo/react-hooks'
import {NavBar,Spinner,Card, Toaster} from  './layout'

export  function MetaData() {
  const [url, setUrl]=useState('')
  const[urlVal, setUrlVal]=useState(false)
  const[showToaster, setShowToaster]=useState(false)

  
  const [ getMetaData ,{loading, error, data}] = useMutation(GET_META_DATA,{
    update(cache, { data: { getMetaData } }){
      cache.modify({
        fields:{
          metaDatas(existingNetaDatas = []){
            const newMetaDataRef = cache.writeFragment({
              data: getMetaData,
              fragment: gql`
                fragment NewTodo on Todo {
                  title
                  description
                  largest_img_dimension
                  largest_img_src
                } 
                `
               });
            return [...existingNetaDatas,newMetaDataRef];
          }
        }
      })
    }
  });

  if(error){
    console.log(error)
  }

 const onSubmit=async(e)=>{
    e.preventDefault();
    if(urlVal===true && url){
      getMetaData({ variables: { name: url} });
    }
  }

  const onChange=(e)=>{
    setUrl(e.target.value)
    setUrlVal( validURL(url))
    if(urlVal== false)setShowToaster(true)
    if(urlVal===true)setShowToaster(false)
  }

  function validURL(url) {
    var re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
    return re.test(url)
  }
    return (
    <React.Fragment>
     <NavBar/>
       {showToaster && <Toaster/>}
      <div className='container' style={{marginTop:"80px"}}>
      
      <form className="row g-3" onSubmit={onSubmit}>
        <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Specify url format in  https://www.yahoo.com" value={url} onChange={onChange} />
        <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Submit</button>
        </div>
        </form>
        {loading && <Spinner/>}
        <Card data={data}/>
      </div>
    </React.Fragment>
    )
}
