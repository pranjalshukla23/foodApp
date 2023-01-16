import {createStackNavigator} from "react-navigation-stack";
import {HomeScreen}           from "./src/screens/HomeScreen";
import {createAppContainer}   from "react-navigation";
import {RestaurantScreen}     from "./src/screens/RestaurantScreen";


//define all the screens
const navigator = createStackNavigator({
	Home: HomeScreen,
	Restaurant: RestaurantScreen
}, {
	initialRouteName: "Home",
	defaultNavigationOptions: {
		title: "Business Search"
	}
})

export default createAppContainer(navigator)