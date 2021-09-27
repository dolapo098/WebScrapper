import  { gql}  from  "apollo-server-micro"; 


export  const  typeDefs  =  gql`
  type  metaData {
        title: String
        description: String
        largest_img_dimension: String
        largest_img_src: String
    }
    type Mutation {
        getMetaData (name: String!): metaData!
      }

      type Query {
        title: String
        description: String
        largest_img_dimension: String
        largest_img_src: String
      } 
    `;
    
