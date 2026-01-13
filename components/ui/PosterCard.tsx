import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

interface PosterCardProps {
    title: string;
    subtitle?: string;
    imageUrl: string;
    onPress?: () => void;
    width?: number;
    aspectRatio?: number;
    style?: ViewStyle;
}

export default function PosterCard({
    title,
    subtitle,
    imageUrl,
    onPress,
    width = 160,
    aspectRatio = 2 / 3,
    style,
}: PosterCardProps) {
    const height = width / aspectRatio;

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={[styles.container, { width }, style]}
        >
            <View style={[styles.imageContainer, { height }]}>
                <Image
                    source={{ uri: imageUrl }}
                    style={styles.image}
                    contentFit="cover"
                    transition={200}
                />
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.title} numberOfLines={1}>{title}</Text>
                {subtitle && (
                    <Text style={styles.subtitle} numberOfLines={2}>{subtitle}</Text>
                )}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    imageContainer: {
        width: '100%',
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: '#E5E5EA', // Placeholder color
        // Subtle shadow for depth
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 5,
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    textContainer: {
        marginTop: 8,
        paddingHorizontal: 4,
    },
    title: {
        fontSize: 15,
        fontWeight: '600',
        color: '#000',
        marginBottom: 2,
    },
    subtitle: {
        fontSize: 13,
        color: '#8E8E93',
        lineHeight: 18,
    },
});
