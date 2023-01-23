import { Text, View, StyleSheet } from 'react-native'

let Song = ({song, artist}) => {

    return (
        <View style={styles.body}>
            <Text style={styles.song}>{song}</Text>
            <Text>{artist}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'lightgray',
        marginBottom: 20  
    },
    song: {
        // fontSize: "1rem",
        // fontWeight: 1.5,
        // lineHeight: 1.5,
        color: "#2723DF"
    }
})

export default Song