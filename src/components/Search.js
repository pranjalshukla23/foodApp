import {StyleSheet, TextInput, View} from 'react-native';
import {FontAwesome}                 from '@expo/vector-icons'
import {elevation}                   from '../common/styles'
import {useState}                    from 'react'

export default function Search ({setTerm}) {

	const [input, setInput] = useState ("")

	const handleEndEditing = () => {
		if (!input) return;

		setTerm (input)
		setInput ("")
	}

	return (
		<View style={[styles.container, styles.elevation]}>
			<FontAwesome name="search"
			             size={20}/>
			<TextInput style={styles.input}
			           value={input}
			           placeholder="Restaurants, food"
			           onChangeText={(text) => setInput (text)}
			           onEndEditing={handleEndEditing}/>
		</View>
	)
}

const styles = StyleSheet.create ({
	                                  container: {
		                                  flexDirection   : 'row',
		                                  marginTop       : 5,
		                                  marginHorizontal: 25,
		                                  backgroundColor : 'white',
		                                  padding         : 10,
		                                  borderRadius    : 40
	                                  },
	                                  elevation,
	                                  input    : {
		                                  fontSize  : 20,
		                                  marginLeft: 10
	                                  }
                                  })