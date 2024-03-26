import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '@/screens/Home'

const Tab = createNativeStackNavigator()

const StackRoutes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={Home}
      />
    </Tab.Navigator>
  )
}

export default StackRoutes
