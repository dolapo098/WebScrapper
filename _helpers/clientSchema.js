import { gql } from '@apollo/client';

   export  const  GET_META_DATA = gql`
          mutation GetMetaData($name: String!) {
            getMetaData(name: $name) {
                title
                description
                largest_img_dimension
                largest_img_src
              }
          }
        `
  
  