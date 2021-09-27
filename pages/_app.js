import 'bootstrap/dist/css/bootstrap.css'
import {ApolloProvider } from "@apollo/client";
import {client} from '../_helpers'

function MyApp({ Component, pageProps }) {
  return <ApolloProvider client={client}>
    <Component {...pageProps} /> 
    </ApolloProvider> 
}

export default MyApp
