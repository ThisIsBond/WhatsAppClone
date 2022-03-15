import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

//Amplify 

import Amplify, { API, Auth, graphqlOperation } from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true // Error solver => [Unhandled promise rejection: Error: No credentials, applicationId or region] 
  }
});

//GraphQL Autogenerated queries 
import { getUser } from './src/graphql/queries';
import { createUser } from './src/graphql/mutations';


import { withAuthenticator } from 'aws-amplify-react-native';
import { useEffect } from 'react';

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  // (useEffect hook)Runs this snippet only when App is first mounted(Started)
  useEffect(() => {
    /*
     Problem => By default amplify does not connect a user of Amazon Cognito user pool so we need to find the way to connect 
     our Amazon cognito user with our database(AWS AppSync > Whatsappclone-dev )
  
     Solution => We need to manually link each user with database.
  
     Every time when we will register in our application we will take the id of the user that is Sign In from 
     Auth Service(Amazon Cognito) & we will do a query with that id to aur database(backend) and we will see,if there is no
     user with that id then we will register the user(This will happen only once since next time when we open the app there is 
      already a user in the database )
     */

    const fetchUser = async () => {
      //get Authenticated user from Auth
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true })


      if (userInfo) {    // if userInfo is not null. 

        //get the user from backend with the user SUB from Auth
        const userData = await API.graphql(
          graphqlOperation(
            getUser,
            { id: userInfo.attributes.sub }
          )
        )

        if (userData.data.getUser) {
          console.log("User is already registered in database");

          return;
        }

        //if there is no user in DB with the id, then create one
        const newUser = {
          id: userInfo.attributes.sub,
          name: userInfo.username,
          imageUri: 'https://source.unsplash.com/random/300×300',
          status: 'Hay, I am using WhatsUp'
        }
        console.log(newUser);
        
        //sending our newUser object to graphQL api
        await API.graphql(
          graphqlOperation(
            createUser,
            { input: newUser }
          )
        )
      }
    }
    /* Because of the limitation of useEffect we cannot directly create async function directly( like useEffect( async() => {} ), 
       useEffect just allows anonymous function (like useEffect( () => {} ) ) ,So there is a trick in which we create a async 
       function inside hook and then calling that same function right after.
    */
    fetchUser();

  }, []) // deps : [] is kept in the end of the useEffect hook in order to tell when the hook executes(in our case it should only execute once)


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
export default withAuthenticator(App) // Automatically add the default login screen and wrap the whole app with compulsory login.