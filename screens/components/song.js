import { Text, View, StyleSheet } from 'react-native'

let Song = ({index, song, artist}) => {

    return (
        <View style={styles.body}>
            <Text style={styles.index}> {index+1}</Text>
            <View>
                <Text style={styles.title}>{song}</Text>
                <Text style={styles.artist}>{artist}</Text>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#FFD4A9",
        padding: 20,
        flexDirection: "row",
        alignItems: "center", 
        fontFamily: "Optima",
    },
    title: {
        marginLeft: 30,
        fontSize: 30,
        color: "#80D1C8",
        lineHeight: 30,
        fontFamily: "Optima",

    },
    artist: {
        marginTop: 3,
        marginLeft: 30,
        fontSize: 20,
        color: "#000010",
        lineHeight: 20,
        fontFamily: "Optima",

    },
    index: {
        fontSize: 50,
        // lineHeight:50,
    }
})

export default Song