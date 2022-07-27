import './App.css';
import {Authenticator } from '@aws-amplify/ui-react'
import API, { graphqlOperation } from '@aws-amplify/api';
import { Button } from '@material-ui/core';
import {getArAddress} from './graphql/queries'
import '@aws-amplify/ui-react/styles.css';
function App() {


  const ArCustomer = ()=>{
   let data =  API.graphqlOperation(getArAddress,{Agency_id:'Az000000001',id: "A000000001"});
  }

  return (
    <div className="App">
 <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <p>
            Hey {user.username}, welcome to my channel, with auth!
          </p>
          <button onClick={signOut}>Sign out</button>
          <Button variant="contained" onClick={ArCustomer} >测试请求</Button>
        </div>
      )}
    </Authenticator>
    </div>
  );
}

export default App;
