import React from 'react';
import { Text ,View,StyleSheet} from 'react-native';
import Color from '../Constants/Color';

const Header= props =>{
    return(
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
}



const styles = StyleSheet.create({

    header:{
        width: '100%',
        height: 90,
        marginTop: 36,
        backgroundColor: Color.primary,
        justifyContent: 'center',
        alignItems: 'center'

    },
    headerTitle:{
        color: 'black',
        fontSize: 18,
    }

});
export default Header;