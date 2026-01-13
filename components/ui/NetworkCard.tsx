import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface NetworkCardProps {
    name: string;
    logoUrl: string;
    onPress?: () => void;
}

export default function NetworkCard({ name, logoUrl, onPress }: NetworkCardProps) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={{ uri: logoUrl }}
                    style={styles.logo}
                    contentFit="contain"
                    transition={200}
                />
            </View>
            <Text style={styles.name} numberOfLines={1}>{name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: 80,
        marginRight: 16,
    },
    logoContainer: {
        width: 64,
        height: 64,
        borderRadius: 20, // Squircle-ish
        backgroundColor: '#fff', // Logos usually look best on white or specific bg
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
        // Shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
        padding: 10,
    },
    logo: {
        width: '100%',
        height: '100%',
    },
    name: {
        fontSize: 12,
        fontWeight: '500',
        color: '#000',
        textAlign: 'center',
    },
});
