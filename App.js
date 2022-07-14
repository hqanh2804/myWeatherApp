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
        marginVertical: 100,
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

    tempText: {
        color: '#fff',
        fontSize: 45,
        marginVertical: 10,
    },

    minMaxText: {
        color: '#fff',
        fontSize: 20,
        marginVertical: 10,
        fontWeight: '500',
    },

    weatherText: {
        fontSize: 40,
        color: '#fff',
        marginVertical: 10,
        fontWeight: '500',
    }
    
});

const App = () => {
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const api = {
        key: '486a7dceff36934a00e8daaa99a9630e',
        baseUrl: 'http://api.openweathermap.org/data/2.5/',
    };

    const fetchDataHandler = useCallback(() => {
        setLoading(true);
        setInput("");
        axios({
            method: 'GET',
            url: `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${api.key}`,
        }).then(res => {
            console.log(res.data);
            setData(res.data);
        }).catch(e => console.dir(e)).finally(() => setLoading(false));
    }, [api.key, input]);

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
                            style = {styles.textInput}
                            onSubmitEditing = {fetchDataHandler}
                            />
                    </View>
                    {loading && (<View>
                            <ActivityIndicator size = {'large'} color = '#000' />
                        </View>
                    )}

                    {data && (
                        <View style = {styles.infoView}>
                            <Text style = {styles.cityCountryText}>
                                {`${data?.name}, ${data?.sys?.country}`}
                            </Text>

                            <Text style = {styles.dataText}>
                                {new Date().toLocaleString()}
                            </Text>

                            <Text style = {styles.tempText}>
                                {`${Math.round(data?.main?.temp)} °C`}
                            </Text>

                            <Text style = {styles.minMaxText}>
                                {`Min ${Math.round(data?.main?.temp_min)} °C / Max ${Math.round(data?.main?.temp_max)} °C`}
                            </Text>

                            <Text style = {styles.weatherText}>
                                {`Weather: ${data?.weather[0].main} `}
                            </Text>
                        </View>
                    )}
            </ImageBackground>
        </View>
    );
}

export default App;