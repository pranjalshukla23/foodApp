import {ActivityIndicator, FlatList, Image, Text, View, Dimensions} from "react-native";
import useRestaurant                                    from "../hooks/useRestaurant";
import {useEffect}   from "react";

export const RestaurantScreen = ({navigation}) => {

	const [{data, loading, error}, searchRestaurant] = useRestaurant()

	//get id from params
	const id = navigation.getParam("id")

	//get dimensions of screen
	const dimensions = Dimensions.get("window")

	const imageWidth = dimensions.width
	const imageHeight = Math.round(dimensions.width * 9) / 16;

	useEffect(() => {
		searchRestaurant(id)
	},[])


	if(loading) {
		return <ActivityIndicator size="large" marginVertical={30} />;
	}

	if(error) {
		return <Text>Error</Text>
	}

	return (
		<View>
			<FlatList
				data={data.images}
				keyExtractor={(item) => item.id}
				renderItem={({item}) => {
					return (<Image source={{uri: item.url}}
					       style={{height: imageHeight, width: imageWidth}}/>
					)
				}}
				 />

		</View>
	)
}