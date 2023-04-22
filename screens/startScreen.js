import { StyleSheet, ImageBackground, Button, View, Dimensions, Image } from "react-native";
import { StatusBar } from 'expo-status-bar';
import Svg, { Image as SvgImage } from "react-native-svg";
import { useEffect, useState } from "react";

export default function StartScreen({ navigation }) {

    const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
        background: {
            flex: 1,
            justifyContent: 'center'
        },
        button: {
            backgroundColor: 'white',
            height: 55,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 35,
            marginHorizontal: 20,
            marginVertical: 10,
            borderWidth: 1,
            borderColor: 'yellow'
        },
        buttonText: {
            fontSize: 20,
            fontWeight: '600',
            color: 'black',
            letterSpacing: 0.5, 
            fontFamily: "Optima",
        },
        buttonContainer: {
            justifyContent: 'center',
            height: height / 3,
            
        }
    });

    const { height, width } = Dimensions.get("window");

    return (
        <View style={styles.container}>
            <ImageBackground source={require("./start.jpg")} resizeMode="cover" style={styles.background}>
                <View style={{alignItems: 'center'}}>
                    <Image source={require("./logo_transparent.png")} style={{height: 200, aspectRatio: 1, marginBottom: 175}} />
                    <Button style={styles.button}
                        title="Let's Swirl!"
                        onPress={() => navigation.navigate("Filter")}/>
                </View>
            </ImageBackground>
        </View>
    );
}