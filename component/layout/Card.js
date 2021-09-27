import React,{useState, useEffect} from 'react'

export  function Card(props) {
  const[title, setTitle]= useState('')
  const[description, setDescription]= useState('')
  const[imgUrl, setImgUrl]= useState('')
  const[imgSize, setImgSize]= useState('')

  useEffect(()=>{
    if(props.data !==undefined){
      setTitle(props.data.getMetaData.title)
      setDescription(props.data.getMetaData.description)
      setImgUrl(props.data.getMetaData.largest_img_src)
      setImgSize(props.data.getMetaData.largest_img_dimension)
    }
  })
 
    return (
        <div className="card">
        <div className="card-header">
        <h4 className="card-title">{title?title:'title will de displayed when a site is crawled'}</h4>
        </div>
      
        <div className="card-body">
         
          <h5 className="card-text">{description ?description:'Description will change when a site is crawled'}</h5>
          <a href={imgUrl?imgUrl:"#"} target={imgUrl && "_blank"} className="btn btn-primary">Click to show Image when the size is loaded in numbers     <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          Image Size : {imgSize} KB</span> </a>
        </div>
      </div>
    )
}
