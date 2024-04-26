import React, { useRef } from 'react';
import { Animated, View, Text, Button } from 'react-native';

const TranslateAnimation = () => {
  const translateAnim = useRef(new Animated.Value(0)).current;

  const translateRight = () => {
    Animated.timing(translateAnim, {
      toValue: 100, // Translate 100 units to the right
      duration: 1000, // Adjust the duration as needed
      useNativeDriver: true,
    }).start();
  };

  const translateLeft = () => {
    Animated.timing(translateAnim, {
      toValue: 0, // Return to the original position
      duration: 1000, // Adjust the duration as needed
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.View
        style={{
          transform: [{ translateX: translateAnim }], // Bind translation to animated value
        }}>
        <Text style={{ fontSize: 24, marginVertical: 20 }}>Hello, React Native!</Text>
      </Animated.View>
      <View>
      <Button title="Translate Right" onPress={translateRight} />
      <Text style={{ fontSize: 24, marginVertical: 5 }}> </Text>
      <Button title="Translate Left" onPress={translateLeft} />
    </View>
    </View>
    
  );
};

export default TranslateAnimation;
