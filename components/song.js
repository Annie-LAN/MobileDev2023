import { Text, View, StyleSheet } from 'react-native'

let Song = ({song, artist}) => {

    return (
        <View style={styles.body}>
            <Text>{song}</Text>
            <Text>{artist}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'lightgray',
        marginBottom: 20
    }
})

export default Song