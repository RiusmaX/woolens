import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthScreen from '../screens/AuthScreen'
import WCAuth from '../screens/WCAuthScreen'
import WCWebView from '../screens/Auth/WCWebView'
import WCAuthReturn from '../screens/Auth/WCAuthReturn'
import WCAuthCallback from '../screens/Auth/WCAuthCallback'

const Stack = createNativeStackNavigator()

function AuthNavigator () {
  return (
    <Stack.Navigator
      initialRouteName='Auth'
    >
      <Stack.Screen options={{ headerShown: false }} name='Auth' component={AuthScreen} />
      <Stack.Screen name='WCAuth' options={{ title: 'Login with WooCommerce' }} component={WCAuth} />
      <Stack.Screen name='WCWebView' options={{ title: 'WooCommerce WebView' }} component={WCWebView} />
      <Stack.Screen name='WCAuthReturn' options={{ title: 'WooCommerce Auth Return' }} component={WCAuthReturn} />
      <Stack.Screen name='WCAuthCallback' options={{ title: 'WooCommerce Auth Callback' }} component={WCAuthCallback} />
    </Stack.Navigator>
  )
}

export default AuthNavigator
