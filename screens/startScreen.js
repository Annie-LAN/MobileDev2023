import { StyleSheet, Button, View, Dimensions } from "react-native";
import { StatusBar } from 'expo-status-bar';
import Svg, { Image } from "react-native-svg";
import { useEffect, useState } from "react";

export default function StartScreen({ navigation }) {

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'flex-end'
        
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
            <Svg>
                <Image
                    href={require("./logo_transparent.png")}
                    width = {width}
                    height = {height}
                    preserveAspectRatio = "xMidYMid slice" 
                    />
            </Svg>
            <View style={StyleSheet.absoluteFill}>
                <Svg height = {height} width = {width}>
                    <Image
                        href={require("./start.jpg")}
                        width = {width}
                        height = {height}
                        preserveAspectRatio = "xMidYMid slice"/>
                </Svg>
            </View>
            <View>
                <Button style={styles.button}
                    title="Let's Swirl!"
                    onPress={() => navigation.navigate("Filter")}/>
            </View>
        </View>
    );
}