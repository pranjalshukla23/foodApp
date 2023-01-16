import {View, StyleSheet}        from "react-native";
import Header        from "../components/Header";
import Search        from "../components/Search";
import {Categories}  from "../components/Categories";
import {Restaurants} from "../components/Restaurants";
import {StatusBar}   from "expo-status-bar";
import {useState}    from "react";

export const HomeScreen = () => {
	const [term, setTerm] = useState("burger")

	const categories = [
		{
			name: 'burger',
			imageUrl: require('../assets/images/burger.png')
		},
		{
			name: 'pizza',
			imageUrl: require('../assets/images/pizza.png')
		},
		{
			name: 'dessert',
			imageUrl: require('../assets/images/cake.png')
		},
		{
			name: 'drinks',
			imageUrl: require('../assets/images/smoothies.png')
		},
		{
			name: 'steak',
			imageUrl: require('../assets/images/steak.png')
		},
		{
			name: 'pasta',
			imageUrl: require('../assets/images/pasta.png')
		}
	]
	return (
		<View style={styles.container}>
			<Header />
			<Search setTerm={setTerm}/>
			<Categories commonCategories={categories} setTerm={setTerm}
			            term={term}/>
			<Restaurants term={term}/>
			<StatusBar />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "rgb(253,253,253)",
		flex: 1
	}

                                 })