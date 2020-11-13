import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import GetStarted from './screens/GetStarted'
import Login from './screens/Login'


const AppNavigator = createStackNavigator({
    GetStarted:{screen:GetStarted},
    Login:{screen:Login},
},{headerMode:"none",
    initialRouteName:'GetStarted'
})

  
  export default createAppContainer(AppNavigator);