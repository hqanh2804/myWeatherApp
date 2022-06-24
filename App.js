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

    textInput: {
        borderBottomWidth: 3,
        textAlign: 'center',
        padding: 5,
        paddingVertical: 20,
        marginVertical: 150,
        marginHorizontal: 10,
        backgroundColor: '#fff',
        fontSize: 19,
        borderRadius: 16,
        borderBottomColor: '#df8e00',
    },

    infoView: {
        alignItems: 'center',
    },

    cityCountryText: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
    },

    dataText: {
        color: '#fff',
        fontSize: 22,
        marginVertical: 10,
    },

})

const App = () => {
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    return (
        <View style = {styles.root}>
            <ImageBackground source = {require('./assets/IMG_2949.jpeg')}
                resizeMode = 'cover'
                style = {styles.image}>
                    <View>
                        <TextInput placeholder = 'Enter city name and press enter...'
                            onChangeText = {text => setInput(text)}
                            value = {input}
                            placeholderTextColor = {'#800'}
                            style = {styles.textInput}/>
                    </View>
                    {loading && (<View>
                            <ActivityIndicator size = {'large'} color = '#000' />
                        </View>)}

                    {data && (
                        <View style = {styles.infoView}>
                            <Text style = {styles.cityCountryText}>
                                {`City, Country`}
                            </Text>

                            <Text style = {styles.dataText}>
                                {new Date().toLocaleString()}
                            </Text>
                        </View>
                    )}

            </ImageBackground>
        </View>
    );
}

export default App;