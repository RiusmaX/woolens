import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProductsNavigator from './ProductsNavigator'
import ProfileNavigator from './ProfileNavigator'
import CameraNavigator from './CameraNavigator'
import MyTabBar from './Tabbar'
import { useState } from 'react'
import AuthNavigator from './AuthNavigator'

const Tabs = createBottomTabNavigator()

function MainNavigator () {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  if (!isLoggedIn) {
    return <AuthNavigator />
  }
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false
      }}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tabs.Screen name='Products' component={ProductsNavigator} />
      <Tabs.Screen name='Camera' component={CameraNavigator} />
      <Tabs.Screen name='Profile' component={ProfileNavigator} />
    </Tabs.Navigator>
  )
}

export default MainNavigator
