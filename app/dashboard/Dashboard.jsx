import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import * as Font from "expo-font";
import { useFonts } from "expo-font";


export default function Dashboard() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null; // or <AppLoading />
  }

    return (
        <View style={styles.container}>
            <ImageBackground 
                source={require('../../assets/dtr.jpg')} 
                style={styles.backgroundImage} 
                imageStyle={styles.image}
            >
								<View style={styles.upperMenu}>
									<View style={styles.leftGroup}>
										<Ionicons name="chevron-down" size={40} color="white" />
										<Text>a21-13810</Text>
									</View>

									<View style={styles.rightGroup}>
										<Ionicons name="notifications" size={40} color="white" />
										<Image source={require('../../assets/pic.png')} style={styles.mypic}/>	
									</View>
									
									
								</View>
                <Text style={styles.textOverlay}>
                    Hi, 
                    <Text style={{fontWeight:'500'}}> Nicole</Text>
                    {"\n"}
                    <Text style={{fontSize:15}}>This is your total hours as of today.</Text>
                </Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        marginTop: 30,
        padding: 0, 
        marginLeft: 0, 
        marginRight: 0,
        width: '100%', // ensure full width
        fontFamily: 'Poppins-Regular',
    },
    backgroundImage: {
        flex: 0, 
        width: '100%',     
        height: 350,
        resizeMode: 'cover', 
        alignItems: 'flex-start', 
        justifyContent: 'flex-start', 
        paddingLeft: 0, 
        paddingTop: 0,
        marginLeft: 0, // remove left margin
    },
    textOverlay: {
        color: 'black',
        fontSize: 24,
        textAlign: 'left',
        paddingLeft: 10, // slight padding for aesthetics
        paddingTop: 10,
    },
    image: {
        resizeMode: "cover", 
    },
		upperMenu:{
			flexDirection: 'row', 
			justifyContent: 'space-between',
			width: '100%',
			padding: 10,
		},
		leftGroup: {
			flexDirection: "row",
			alignItems: "center",
			gap: 6, // works in RN 0.71+, otherwise use marginRight
		},

		rightGroup: {
			flexDirection: "row",
			alignItems: "center",
			gap: 10,
		},
		mypic:{
			height:40,
			width:40,
            borderRadius: 50
		}
})