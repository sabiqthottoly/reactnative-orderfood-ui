import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import GetStarted from './screens/GetStarted'
import Login from './screens/Login'
import Home from './screens/Home'


const HomeStack = createStackNavigator({
    Home:{screen:Home,navigationOptions:{headerStyle:{backgroundColor:'#eefbfb'}}},
},{
    initialRouteName:'Home'
})

const AppNavigator = createStackNavigator({
    GetStarted:{screen:GetStarted},
    Login:{screen:Login},
    HomeStack:{screen:HomeStack},
},{headerMode:"none",
    initialRouteName:'GetStarted'
})

  
  export default createAppContainer(AppNavigator);