import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ScreenHeaderProps {
    title: string;
}

export default function ScreenHeader({ title }: ScreenHeaderProps) {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, { paddingTop: insets.top + 8 }]}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingBottom: 8,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 34,
        fontWeight: '700',
        color: '#000',
        letterSpacing: 0.4,
    },
});
