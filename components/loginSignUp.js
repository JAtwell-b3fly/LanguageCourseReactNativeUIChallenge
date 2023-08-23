import react from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet} from "react-native";

const LoginSignUp = () => {
    return(
        <View>
            <View style={styles.header}>
                <View style={styles.image_container}>
                <Image
                    style={styles.two_people_image}
                    source={require("../assets/two_people1.jpeg")}
                    resizeMode="cover"
                />

                <View style={styles.overlay}></View>

                <View style={styles.menu_div}>
                    <TouchableOpacity>
                        <Image
                            style={styles.menu_btn}
                            source={require("../assets/menu.png")}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.profile_div}>
                    <TouchableOpacity style={styles.profile}>

                    </TouchableOpacity>
                </View>
                
                <View style={styles.slogan_div}>
                    <Text style={styles.slogan}>Easy and quick Learn English online!</Text>
                </View>
            </View>
            </View>

            <View style={styles.btn_div}>
                <TouchableOpacity style={styles.start_btn}>
                    <Text style={styles.start_btn_text}>START</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.signup_btn}>
                    <Text style={styles.signup_btn_text}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        flex: 1,
    },
    image_container: {
        position: "relative",
    },
    overlay : {
        ...StyleSheet.absoluteFillObject, 
        backgroundColor: "rgba(194, 108, 122, 0.4)", 
    },
    two_people_image: {
        width: 430,
        height: 600,
        //backgroundColor: "rgba(206,113,132,255, 0.3)",
    },
    menu_div: {
        position: 'absolute',
        top: 60, 
        left: 50, 
        zIndex: 1, 
        backgroundColor: "#e5e0db",
        borderRadius: 15,
    },
    menu_btn: {
        width: 50,
        height: 50,
    },
    slogan_div: {
        position: "absolute",
        left:60,
        top: 290,
        zIndex: 1,
    },
    slogan: {
        color: "white",
        fontSize: 40,
        fontWeight: "bold",
        width: 180,
    },
    btn_div: {
        marginTop: 15,
        marginBottom: 45,
    },
    start_btn : {
        backgroundColor:"#f5b2ac",
        padding: 15,
        borderRadius: 15,
        marginBottom: 25,
        width: 350,
        marginLeft: 50,
    },
    start_btn_text: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },
    signup_btn: {
        backgroundColor: "#f3305c",
        padding: 15,
        borderRadius: 15,
        marginBottom: 25,
        width: 350,
        marginLeft: 50,
        marginBottom: 15,
    },
    signup_btn_text: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
    profile_div: {
        position: "absolute",
        zIndex: 1,
        top: 60,
        right: 50,
        left: 330,
    },
    profile: {
        borderRadius: 35,
        padding: 15,
        width: 60,
        height: 60,
        backgroundColor: "#e5e0db"
    }
})

export default LoginSignUp;