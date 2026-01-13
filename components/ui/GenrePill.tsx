import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';

interface GenrePillProps {
    name: string;
    onPress?: () => void;
    /**
     * Optional manual color override.
     * If not provided, we could auto-hash or defaults.
     * For MVP, we pass it in or default to gray.
     */
    colorVariant?: {
        backgroundColor: string;
        textColor: string;
    };
    style?: ViewStyle;
}

export default function GenrePill({ name, onPress, colorVariant, style }: GenrePillProps) {
    const backgroundColor = colorVariant?.backgroundColor || '#F2F2F7';
    const color = colorVariant?.textColor || '#000';

    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor }, style]}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <Text style={[styles.text, { color }]}>{name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 100, // Ensure decent touch target
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: -0.3,
    },
});
