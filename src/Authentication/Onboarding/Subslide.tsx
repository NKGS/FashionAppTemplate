import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';

import {Button} from '../../components';

interface SubslideProps {
  description: string;
  subtitle: string;
  last?: boolean;
  x: Animated.Node<number>;
  onPress: () => void;
}

const Subslide = ({onPress, subtitle, description, last}: SubslideProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        {...{onPress}}
        label={last ? "Lets Get Started" : "Next"}
        variant={last ? "primary" : "default"}
      />
    </View>
  );
};

export default Subslide;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  subtitle: {
    fontFamily: 'SFProText-Semibold',
    fontSize: 24,
    lineHeight: 30,
    color: "#0C0D34",
  },
  description: {
    fontFamily: 'SFProText-Regular',
    fontSize: 14,
    lineHeight: 24,
    color: '#0C0D34',
    marginBottom: 25,
  },
});
