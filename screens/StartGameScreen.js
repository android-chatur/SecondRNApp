import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import Color from '../Constants/Color';

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.titile}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
               <Input style={styles.input}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Reset' onPress={() => { }} color={Color.accent} />
                    </View>
                    <View style={styles.button}>
                        <Button title='Confirm' onPress={() => { }} color={Color.primary} />
                    </View>
                </View>
            </Card>
        </View>



    )
};

const styles = StyleSheet.create({

    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    titile: {
        fontSize: 20,
        marginVertical: 10,

    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        padding: 20,
        borderRadius: 10

    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,

    },
    button: {
        width: 90
    },
    input:{
        width: 50,
    }

});

export default StartGameScreen;