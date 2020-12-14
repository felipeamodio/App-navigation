import Login from './components/Login';
import Home from './components/Home';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator({
    Login: Login,
    Home: Home
});

export default Stack;
