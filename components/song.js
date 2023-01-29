import { Text, View, StyleSheet } from 'react-native'

let Song = ({song, artist}) => {

    return (
        <View style={styles.body}>
            <Text style={styles.title}>{song}</Text>
            <Text style={styles.artist}>{artist}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#999041",

        //marginBottom: 20  
    },
    // song: {
    //     // fontSize: "1rem",
    //     // fontWeight: 1.5,
    //     // lineHeight: 1.5,
    //     color: "#2723DF"
    // }, 
    title: {
        marginTop: 30,
        marginLeft: 30,
        padding: 30,
        fontSize: 30,
        color: "#384AEC",
        lineHeight: 30,
    },
    artist: {
        marginTop: 3,
        marginLeft: 30,
        padding: 20,
        fontSize: 20,
        color: "#000000",
        lineHeight: 20,
    }
})

export default Song