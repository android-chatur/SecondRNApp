import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import NumberCointainer from '../components/NumberCointainer';
import Color from '../Constants/Color';

const StartGameScreen = props => {

    const [enteredValue, setEnterdValue] = useState('');

    const [confired, setconfired] = useState(false);

    const [selectednumber, setselectednumber] = useState();
    const numberInputHandler = inputText => {
        setEnterdValue(inputText.replace(/[^0-9]/g, ''));

    };

    const resetInputHandler = () => {

        setEnterdValue('')
        setconfired(false)
    }

    const ConfirmnputHandler = () => {

        const Choosenuber = parseInt(enteredValue);
        if (isNaN(Choosenuber) || Choosenuber <= 0 || Choosenuber > 99) {
            Alert.alert("Invalid Number !", 'Number hash to be a number between 1 and 99. ',
                [{ text: 'Okey', style: 'destructive', onPress: resetInputHandler }])
            return;
        }
        setconfired(true)
        setselectednumber(Choosenuber)
        setEnterdValue('')
        Keyboard.dismiss();
    }

    let confortOutput;

    if (confired) {
        confortOutput = (
            <Card style={styles.summaryContainer}>
              <Text>You Selected </Text>
              <NumberCointainer>{selectednumber}</NumberCointainer>
                <Button title='START GAME' />

            </Card>
        )

    }


    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <Text style={styles.titile}>Start a New Game!</Text>

                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input style={styles.input}
                        bluronSubmit autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType="number-pad"
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title='Reset'
                                onPress={resetInputHandler}
                                color={Color.accent}
                            />
                        </View>
                        <View style={styles.button}>
                            <Button
                                title='Confirm'
                                onPress={ConfirmnputHandler}
                                color={Color.primary}
                            />
                        </View>
                    </View>
                </Card>

                {confortOutput}
            </View>

        </TouchableWithoutFeedback>

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
    input: {
        width: 50,
        textAlign: 'center'
    },
    summaryContainer: {
        marginTop: 20,
       
        alignItems: 'center'


    }

});

export default StartGameScreen;