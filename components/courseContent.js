import react from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView} from "react-native";

const CourseContent = () => {
    return(
        <View>
            <View style={styles.heading}>
                <View style={styles.image_container}>
                <Image
                    style={styles.image}
                    source={require("../assets/course_content.jpeg")}
                    resizeMode = "cover"
                />

                <View style={styles.overlay}></View>

                <View style={styles.menu_btn_div}>
                    <TouchableOpacity>
                        <Image
                            style={styles.menu_btn}
                            source={require("../assets/menu.png")}
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
                    <Text style={styles.title}>Course content</Text>
                </View>
                </View>
            </View>

            <View style={styles.content}>
                <Text style={styles.heading_label}>Main units</Text>

                <View style={styles.lesson}>
                    <Image
                        style={styles.youtube_image}
                        source={require("../assets/youtube_red_bold.png")}
                    />
                    <View style={styles. youtube_content}>
                        <Text style={styles.unit_title}>UNIT 1</Text>
                        <Text style={styles.unit_subheading}>Introduction</Text>
                        <View style={styles.main_progress_bar}>
                            <View style={styles.progress_bar1}>

                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.lesson}>
                    <Image
                        style={styles.youtube_image}
                        source={require("../assets/youtube_red_faded.png")}
                    />
                    <View style={styles. youtube_content}>
                        <Text style={styles.unit_title}>UNIT 2</Text>
                        <Text style={styles.unit_subheading}>Food and drinks</Text>
                        <View style={styles.main_progress_bar}>
                            <View style={styles.progress_bar2}>

                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.lesson}>
                    <Image
                        style={styles.youtube_image}
                        source={require("../assets/youtube_red_bold.png")}
                    />
                    <View style={styles.youtube_content}>
                        <Text style={styles.unit_title}>UNIT 3</Text>
                        <Text style={styles.unit_subheading}>Lifestyle</Text>
                        <View style={styles.main_progress_bar}>
                            <View style={styles.progress_bar3}>

                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.lesson}>
                    <Image
                        style={styles.youtube_image}
                        source={require("../assets/youtube_red_faded.png")}
                    />
                    <View style={styles. youtube_content}>
                        <Text style={styles.unit_title}>UNIT 4</Text>
                        <Text style={styles.unit_subheading}>School and Jobs</Text>
                        <View style={styles.main_progress_bar}>
                            <View style={styles.progress_bar4}>

                            </View>
                        </View>
                    </View>
                </View>

                <Text style={styles.heading_label}>General Exercises</Text>

                <View style={styles.footer_btns}>
                    <ScrollView
                    style={styles.scroll}
                    horizontal>
                    <View style={styles.btns_div}>
                        <TouchableOpacity style={styles.footer_btn1}>
                            <Image
                                style={styles.btn_image}
                                source={require("../assets/mobile.png")}
                            />
                            <Text style={styles.footer_btn_text}>Exercises</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.btns_div}>
                        <TouchableOpacity style={styles.footer_btn2}>
                            <Image
                                style={styles.btn_image}
                                source={require("../assets/speaker.png")}
                            />
                            <Text style={styles.footer_btn_text}>Listening</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.btns_div}>
                        <TouchableOpacity style={styles.footer_btn1}>
                            <Image
                                style={styles.btn_image}
                                source={require("../assets/mobile.png")}
                            />
                            <Text style={styles.footer_btn_text}>Grammar & Concord</Text>
                        </TouchableOpacity>
                    </View>

                    </ScrollView>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    heading: {
        flex: 1,
    },
    image_container: {
        position: "relative",
    },
    overlay : {
        ...StyleSheet.absoluteFillObject, 
        backgroundColor: "rgba(194, 108, 122, 0.4)", 
    },
    image: {
        width: 430,
        height: 250,
    },
    menu_btn_div: {
        position: 'absolute',
        top: 40, 
        left: 40, 
        zIndex: 1, 
        backgroundColor: "#e5e0db",
        borderRadius: 15,
    },
    menu_btn: {
        width: 50,
        height: 50,
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
    title_div: {
        position: "absolute",
        left:80,
        top: 155,
        zIndex: 1,
    },
    title: {
        color: "white",
        fontSize: 35,
        fontWeight: "bold",
    },
    content: {
        marginTop: 20,
        marginBottom: 20,
    },
    lesson: {
        flexDirection: "row",
    },
    youtube_image: {
        width: 80,
        height: 100,
        marginLeft: 25,
        borderRadius: 50,
    },
    progress_bar: {
        width: 300,
        height: 20,
    },
    main_progress_bar: {
        width: 230,
        height: 13,
        backgroundColor: "#f8e3eb",
        marginRight: 10,
        borderRadius: 25,
        marginTop: 5,
        position: "relative",
        zIndex: 1,
    },
    progress_bar1: {
        width: 200,
        height: 13,
        backgroundColor: "#d86079",
        marginRight: 10,
        borderRadius: 25,
    },
    progress_bar2: {
        width: 170,
        height: 13,
        backgroundColor: "#d991a6",
        marginRight: 10,
        borderRadius: 25,
    },
    progress_bar3: {
        width: 130,
        height: 13,
        backgroundColor: "#d86079",
        marginRight: 10,
        borderRadius: 25,
    },
    progress_bar4: {
        width: 40,
        height: 13,
        backgroundColor: "#d991a6",
        marginRight: 10,
        borderRadius: 25,
    },
    unit_title: {
        fontWeight: "bold",
        fontSize: 17,
    },
    unit_subheading: {
        fontWeight: "normal",
        fontSize: 16,
    },
    youtube_content: {
        marginLeft: 20,
    },
    heading_label: {
        color: "#b04052",
        fontSize: 19,
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 25,
    },
    content: {
        marginLeft: 25,
        marginTop: 20,
        marginBottom: 20,
    },
    footer_btns: {
        flexDirection: "row",
        marginTop: 10,
        marginLeft: 25,
        marginBottom: 10,
    },
    footer_btn1: {
        backgroundColor:"#f5b2ac",
        padding: 15,
        borderRadius: 15,
        width: "100%",
        flexDirection: "row",
    },
    btns_div: {
        //marginLeft: 10,
        marginRight: 10,
    },
    footer_btn2: {
        backgroundColor: "#f3305c",
        padding: 15,
        borderRadius: 15,
        width: "100%",
        flexDirection: "row",
    },
    footer_btn_text: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },
    scroll: {
        width: "100%",
        height: 60,
    },
    btn_image: {
        width: 30,
        height: 30,
        padding: 5,
        //backgroundColor: "#f8d2d0",
        borderRadius: 10,
    }
})

export default CourseContent;