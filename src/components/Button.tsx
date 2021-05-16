import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

interface ButtonProps {
    label: string;
    variant: "default" | "primary";
    onPress: () => void;
}

const Button = ({ label, variant, onPress } : ButtonProps) => {
    const backgroundColor = variant === "primary" ? "#2CB9B0" : "rgba(12, 13, 52, 0.15)";
    const color = variant === "primary" ? "white" : "#0C0D34"
    return (
        <RectButton style={[styles.container, {backgroundColor}]} {... { onPress }}>
            <Text style={[styles.label, {color}]}>{label}</Text>
        </RectButton>
    )
}

export default Button;

const styles = StyleSheet.create({
    container: {
        height: 50,
        borderRadius: 30,
        width: 245,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'SFProText-Regular',
    }
})

