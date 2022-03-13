import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

//Amplify 

import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure({
  ...config,
  Analytics:{
    disabled: true // Error solver => [Unhandled promise rejection: Error: No credentials, applicationId or region] 
  }
});

import { withAuthenticator } from 'aws-amplify-react-native';

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

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