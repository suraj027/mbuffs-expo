import { Ionicons } from '@expo/vector-icons';
import { GlassView } from 'expo-glass-effect';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default function GlassBackButton() {
    const router = useRouter();

    return (
        <TouchableOpacity
            onPress={() => router.back()}
            style={styles.container}
            activeOpacity={0.8}
        >
            <GlassView style={styles.glass}>
                <Ionicons name="chevron-back" size={24} color="#000" style={{ marginRight: 2 }} />
            </GlassView>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 44,
        height: 44,
        borderRadius: 22,
        overflow: 'hidden',
    },
    glass: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.2)', // Optional tint
    },
});
