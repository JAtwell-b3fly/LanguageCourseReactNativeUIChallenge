import react from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet} from "react-native";

const Exercises = () => {
    return(
        <View>
            
            
             <View style={styles.heading}>
                <View style={styles.image_container}>
                <Image
                    style={styles.image}
                    source={require("../assets/deskgirl.jpg")}
                    resizeMode = "cover"
                />

                <View style={styles.overlay}></View>
                <View style={styles.menu_btn_div}>
                    <TouchableOpacity>
                        <Image
                            style={styles.menu_btn}
                            source={require("../assets/left-chevron.png")}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.english_div}>
                    <Text style={styles.english}>English</Text>
                </View>

                <View style={styles.profile_div}>
                    <TouchableOpacity style={styles.profile}>
                    </TouchableOpacity>
                </View>

                <View style={styles.title_div}>
                    <Text style={styles.title}>Exercises</Text>
                    <Text style={styles.english2}>UNIT 2</Text>
                </View>
                </View>
            </View>

            <View style={styles.content}>
                <Text style={styles.heading_label}>CHAPTER 1</Text>
                <Text style={styles.sublabel}>Please select the correct meaning</Text>
                <Text style={styles.phrase}>Hola, Buenos dias</Text>

                <TouchableOpacity style={styles.btn_white}>
                    <Text style={styles.btn_text_red}>Hello, Good Night</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn_white}>
                    <Text style={styles.btn_text_red}>Hello, Good Evening</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn_red}>
                    <Text style={styles.btn_text_white}>Hello, Good Morning</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.next_btn}>
                    <Text style={styles.next_btn_text}>NEXT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles= StyleSheet.create({
    overlay : {
        ...StyleSheet.absoluteFillObject, 
        backgroundColor: "rgba(194, 108, 122, 0.4)", 
    },
    heading: {
        flex: 1,
    },
    image: {
        width: 430,
        height: 260,
    },
    menu_btn_div: {
        position: 'absolute',
        top: 40, 
        left: 40, 
        zIndex: 1, 
        //backgroundColor: "#e5e0db",
        borderRadius: 15,
    },
    menu_btn: {
        width: 45,
        height: 45,
    },
    profile_div: {
        position: "absolute",
        zIndex: 1,
        top: 40,
        right: 50,
        left: 330,
    },
    profile: {
        borderRadius: 35,
        padding: 15,
        width: 50,
        height: 50,
        backgroundColor: "#e5e0db"
    },
    english_div: {
        position: "absolute",
        left:165,
        zIndex: 1,
        top: 40,
        right: 50,
    },
    english: {
        color: "white",
        fontSize: 25,
        fontWeight: "normal",
    },
    english2: {
        color: "white",
        fontSize: 25,
        fontWeight: "normal",
        left: 70,
    },
    title_div: {
        position: "absolute",
        left:100,
        top: 130,
        zIndex: 1,
    },
    title: {
        color: "white",
        fontSize: 35,
        fontWeight: "bold",
        left: 40,
        bottom: 15,
    },
    next_btn: {
        backgroundColor:"#f5b2ac",
        padding: 15,
        borderRadius: 15,
        marginBottom: 25,
        width: 300,
        marginLeft: 25,
        marginTop: 50,
    },
    next_btn_text: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },
    content: {
        flex: 1,
        marginLeft: 25,
        marginBottom: 250,
        marginTop: 30,
    },
    heading_label: {
        color: "#b04052",
        fontSize: 19,
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 25,
    },
    sublabel: {
        color: "gray",
        fontSize: 17,
        marginBottom: 10,
        marginTop: 5,
        marginLeft: 25,
        width: 210,
    },
    phrase: {
        color: "black",
        fontSize: 19,
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 5,
        marginLeft: 25,
    },
    btn_text_red: {
        color: "#ed2c59",
        fontSize: 19,
        textAlign: "center",
    },
    btn_text_white: {
        color: "#fdfefe",
        fontSize: 19,
        textAlign: "center",
    },
    btn_white: {
        backgroundColor: "#fdfefe",
        marginBottom: 20,
        marginTop: 10,
        marginLeft: 25,
        borderColor: "#ed2c59",
        borderStyle: "solid",
        borderWidth: 2,
        padding: 10,
        width: 320,
        borderRadius: 15,
    },
    btn_red: {
        backgroundColor: "#ed2c59",
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 25,
        borderColor: "#ed2c59",
        borderStyle: "solid",
        borderWidth: 2,
        padding: 10,
        width: 320,
        borderRadius: 15,
    }
})
export default Exercises;
