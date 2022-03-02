import react from 'react';
import { Text, StyleSheet } from 'react-native';

const BodyText = props = 
<Text style ={styles.boddy}>{props.children}</Text>

const styles =StyleSheet.create({
    boddy:{

        fontFamily: 'open-sans-bold'
    }
});

export default BodyText;

