import React from 'react';
import { Dimensions , View, Text, ScrollView, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { useValue } from 'react-native-redash/src/v1/Hooks';
import { interpolateColor } from 'react-native-redash/src/v1/Colors';
import { onScrollEvent } from 'react-native-redash/src/v1/Gesture';

import Slide, { SLIDE_HEIGHT } from './Slide';

const { width, height } = Dimensions.get("window");

interface OnboardingProps {}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: "#fff"
    },
    slider: {
        height: SLIDE_HEIGHT,
        borderBottomRightRadius: 75
    },
    footer: {
        flex: 1
    },
    footerD: {
        flex:1, 
        backgroundColor: "white",
        borderTopLeftRadius: 75

    }
});

const slide = [
    { label: "React Native", color: "#aeaede" },
    { label: "Ionic", color: "#bcbcbc" },
    { label: "Flutter", color: "#aeaeca" },
    { label: "Native", color: "#adadad" }
]
const Onboarding = () => {
    const x = useValue(0)

    const onScroll = onScrollEvent({ x })

    const backgroundColor = interpolateColor(x, {
        inputRange: [0, width, width *2, width * 3],
        outputRange: ["#aeaede", "#bcbcbc", "#aeaeca", "#adadad"]
    })

    return (
        <View style={styles.container}>
           <Animated.View style={[styles.slider, {backgroundColor}]}>
               <Animated.ScrollView
                    horizontal={true}
                    snapToInterval={width}
                    decelerationRate="fast"
                    bounces={false}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle = {1}
                    {... { onScroll }}
                    >
                   <Slide label="React Native" />
                   <Slide label="Ionic" right />
                   <Slide label="Flutter"  />
                   <Slide label="Native" right />
                </Animated.ScrollView>
            </Animated.View>

            <View style={styles.footer}>
                <Animated.View style={{ ... StyleSheet.absoluteFillObject, backgroundColor }} />
                <View style={styles.footerD}>

                </View>
            </View>
        </View>
    )
}

export default Onboarding
