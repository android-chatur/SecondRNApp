import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native'


const generaterandomBetween = (mim, max, exclude) =>{
    mim=Math.ceil(mim);
    max=Math.floor(max);
    const rndNum=Math.floor(Math.random() * (max - mim)) + mim;

    if(rndNum === exclude){
        return generaterandomBetween(mim,max,exclude);
    }else{
       return rndNum;
    }
}
const GameScreen = props => {
   const [currentGuess, setCureentGuess] = useState(
      generaterandomBetween(1, 100, props.usechoice)
   );

   return(
       <Text></Text>
   )
}


const styles = StyleSheet.create({

})
export default GameScreen;