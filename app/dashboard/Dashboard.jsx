import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useFonts } from "expo-font";


export default function Dashboard() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
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
										<Ionicons name="chevron-down" size={30} color="maroon" />
										<Text style={styles.leftGroupText}>a21-13810</Text>
									</View>

									<View style={styles.rightGroup}>
										<Ionicons name="notifications" size={32} color="white" />
										<Image source={require('../../assets/pic.png')} style={styles.mypic}/>	
									</View>
								</View>

								<View style={styles.roundedView}>

									<View style={styles.dateContainer}>
										<Text style={styles.date}>Today, Sept 4</Text>
									</View>

									<Text style={[styles.textOverlay, {color:'white'}]}>
										<Text>Hi,</Text>
                     
                    <Text style={{fontFamily: "Poppins-SemiBold"}}> Nicole</Text>
                    {/* {"\n"}
                    <Text style={{fontSize:15}}>This is your total hours as of today.</Text> */}

                	</Text>

									<View style={styles.dashbox}>

										<View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingBottom:10, borderBottomColor:'#d3d3d3ff', borderBottomWidth:1}}>
											<Text style={{fontSize:15, color:'black', fontFamily: 'Poppins-Regular'}}>8:15 AM</Text>
											<Text style={{fontSize:15, color:'black', fontWeight:'600', fontFamily: 'Poppins-SemiBold'}}>Not logged in yet</Text>
										</View>

										<View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', padding:10}}>
											<View style={{flexDirection:'column'}}>
												<Text style={styles.hours}>16 
													<Text style={{fontSize:15}}> hours</Text> 
												</Text>
												<Text style={styles.month}>September 2025</Text>
											</View>

											<View style={{flexDirection:'column'}}>
												<View style={{flexDirection:'row', alignItems:'left', gap:10}}>
													
													<Ionicons name="checkmark-done" color="#09ab00ff" size={30} />
													<Ionicons name="checkmark-done" color="#4b3d43ff" size={30} />
													<Ionicons name="checkmark-done" color="#4b3d43ff" size={30} />
													<Ionicons name="checkmark-done" color="#4b3d43ff" size={30} />

												</View>
											</View>
										</View>
										
									</View>

									<View style={styles.dashbox}>
										<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
											<View style={{flexDirection:'row', gap:10, alignContent :'center', alignItems:'center'}}>
												<MaterialIcons name="circle" size={15} color="red" />
												<Text style={{color: 'black', fontFamily: 'Poppins-Regular', fontSize:15}}>This Week:</Text>
											</View>
											<Text style={{color: 'red', fontFamily: 'Poppins-SemiBold', fontWeight:'500', fontSize:15}}>16/20 HOURS</Text>
										</View>
									</View>

									


								</View>

								
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
        width: '100%', 
				backgroundColor: '#f5f5f5ff'
    },
    backgroundImage: {
        flex: 0, 
        width: '100%',     
        height: 300,
        resizeMode: 'cover', 
        alignItems: 'flex-start', 
        justifyContent: 'flex-start', 
        paddingLeft: 0, 
        paddingTop: 0,
        marginLeft: 0, 
    },
		roundedView: {
			padding:20,
			width: '100%',
  	},
    textOverlay: {
        color: '#ffff',
        fontSize: 24,
        textAlign: 'left',
				width: '100%',
				paddingHorizontal: 20, 
				color: 'black',
				fontFamily: 'Poppins-Regular',
    },
    image: {
        resizeMode: "cover", 
    },
    upperMenu:{
        flexDirection: 'row', 
        justifyContent: 'space-between',
        width: '100%',
        padding: 20,
    },
    leftGroup: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6, 
    },
		leftGroupText: {
			fontSize: 15,
			color: 'maroon',
			fontFamily: 'Poppins-Regular',
		},

    rightGroup: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    mypic:{
        height:40,
        width:40,
        borderRadius: 50,
				borderColor: 'gray',
				borderWidth: .3,
    },
		dashbox:{
			marginTop: 20,
			padding:20,
			backgroundColor:"white",
			width: '100%',
			borderRadius:30,
			shadowColor: "#00000053",
			shadowOffset: { width: 5, height: 5 },
			shadowOpacity: 0.5,
			shadowRadius: 5,
			elevation: 10,
		},
		date:{
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			fontSize: 15,
			color: 'maroon',
			fontFamily: 'Poppins-Regular',
			textAlign: 'right',
			paddingHorizontal: 5,
		},
		dateContainer:{
			alignSelf: 'flex-end',
			backgroundColor: '#ffffff6e',
			padding: 10,
			borderRadius: 20,
		},
		hours:{
			fontSize: 65,
			fontWeight: 'bold',
			color: 'black',
			fontFamily: 'Poppins-Bold',
			textAlign: 'left',
			color: '#b30f0fff',
		},
		month:{
			color:'#4b3d43ff',
			fontSize: 15,
			textAlign: 'left',
			fontFamily: 'Poppins-SemiBold',
		}


})