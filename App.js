import React, {useState, useCallback} from 'react';
import {
    StyleSheet, Text, View, ImageBackground, TextInput, ActivityIndicator
} from 'react-native';

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },

    image: {
        flex: 1,
        flexDirection: 'column',
    },
})

const App = () => {
    const [input, setInput] = useState("");

    return (
        <View style = {styles.root}>
            <ImageBackground source = {require('./assets/IMG_2949.jpeg')}
                resizeMode = 'cover'
                style = {styles.image}>
            </ImageBackground>
        </View>
    );
}

export default App;