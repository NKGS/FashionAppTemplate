import React, { useRef } from 'react';
import { Dimensions, View, Text, ScrollView, StyleSheet } from 'react-native';
import Animated, { multiply } from 'react-native-reanimated';
import { useValue } from 'react-native-redash/src/v1/Hooks';
import { interpolateColor } from 'react-native-redash/src/v1/Colors';
import { onScrollEvent } from 'react-native-redash/src/v1/Gesture';

import Slide, { SLIDE_HEIGHT } from './Slide';
import Subslide from './Subslide';

const { width, height } = Dimensions.get("window");

const BORDER_RADIUS = 75

interface OnboardingProps { }

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: "#fff"
    },
    slider: {
        height: SLIDE_HEIGHT,
        borderBottomRightRadius: BORDER_RADIUS
    },
    footer: {
        flex: 1
    },
    footerContent: {
        flexDirection: 'row',
        backgroundColor: "white",
        borderTopLeftRadius: BORDER_RADIUS

    }
});


const Onboarding = () => {
    const scroll = useRef<Animated.ScrollView>(null)
    const x = useValue(0)

    const onScroll = onScrollEvent({ x })

    const slides = [
        { label: "Amazed", subtitle: "How to purchase best clothes?", description: "Come select most used brands", color: "#aeaede" },
        { label: "Excited", subtitle: "Excited to buy best brands?", description: "Search and select from all fabrics", color: "#bcbcbc" },
        { label: "Joyous", subtitle: "Joyous to find so many options? ", description: "Filter, apply", color: "#aeaeca" },
        { label: "Ecstatic", subtitle: "Ecstatic to get good oofers", description: "Apply coupon codes", color: "#adadad" }
    ]

    const backgroundColor = interpolateColor(x, {
        inputRange: slides.map((_, i) => i * width),
        outputRange: slides.map(slide => slide.color)
    })

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, { backgroundColor }]}>
                <Animated.ScrollView
                    ref={scroll}
                    horizontal={true}
                    snapToInterval={width}
                    decelerationRate="fast"
                    bounces={false}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={1}
                    {... { onScroll }}
                >
                    {
                        slides.map(({ label }, index) =>
                            <Slide {...{ label }} right={!!(index % 2)} key={index} />
                        )
                    }
                </Animated.ScrollView>
            </Animated.View>

            <View style={styles.footer}>
                {/* <Animated.View style={{ ...StyleSheet.absoluteFillObject},{ backgroundColor }} /> */}
                <Animated.View style={{ ...StyleSheet.absoluteFillObject, backgroundColor }} />
                <Animated.View style={[styles.footerContent, { width: width * slides.length, flex: 1, transform: [{ translateX: multiply(x, -1) }] }]}>
                    {
                        slides.map(({ description, subtitle }, index) =>
                            <Subslide 
                                onPress = {() => {
                                    if(scroll.current) {
                                        scroll.current.getNode().scrollTo({ x: width*(index+1), animated: true})
                                    }
                                }}
                            {...{ description, subtitle, x }} last={!!(index == slides.length - 1)} key={index} />
                        )
                    }
                </Animated.View>
            </View>
        </View>
    )
}

export default Onboarding
