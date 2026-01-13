import { Ionicons } from '@expo/vector-icons';
import { GlassView } from 'expo-glass-effect';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface GlassHeaderProps {
    title: string;
    onShufflePress?: () => void;
    onMenuPress?: () => void;
    showShuffle?: boolean;
    showMenu?: boolean;
}

export default function GlassHeader({
    title,
    onShufflePress,
    onMenuPress,
    showShuffle = true,
    showMenu = true
}: GlassHeaderProps) {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <View style={styles.contentRow}>
                <Text style={styles.title}>{title}</Text>

                <View style={styles.actionsContainer}>
                    {showShuffle && (
                        <TouchableOpacity onPress={onShufflePress} style={styles.actionButton}>
                            <GlassView style={styles.actionGlass}>
                                <Ionicons name="shuffle" size={20} color="#000" />
                            </GlassView>
                        </TouchableOpacity>
                    )}

                    {showMenu && (
                        <TouchableOpacity onPress={onMenuPress} style={styles.actionButton}>
                            <GlassView style={styles.actionGlass}>
                                <Ionicons name="ellipsis-horizontal" size={20} color="#000" />
                            </GlassView>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingBottom: 12,
        // We might want the header itself to be glass, or just the buttons?
        // Based on "Glass Header", the whole things might be glass.
        // However, usually Large Titles are on the background, and the bar becomes glass when scrolled.
        // For simplicity/MVP as per screenshots which often show the background content blurring *under* a sticky header:
        // We will leave the container transparent for now but the buttons are glass, 
        // OR we make the whole header a GlassView. 
        // "GlassHeader" implies the header bar is glass.
        // Let's wrap the content in a GlassView or background if requested.
        // But currently, the design "Movies" big text usually sits simply on the background.
        // The buttons ARE glass circles in the screenshot description.
        // Let's stick to transparent container + glass buttons for the "Default" stat functionality, 
        // assuming the page background handles the gradients.
        // Wait, if it's a "Sticky Header", it needs a background.
        // Let's default to transparent for the large title state, 
        // but the task says "Implement GlassHeader". 
        // I'll stick to: Title + Glass Action Buttons. 
        // Configurable later.
    },
    contentRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60, // Arbitrary height for the header row
    },
    title: {
        fontSize: 34,
        fontWeight: '800', // Heavy weight for iOS Large Title feel
        color: '#000',
        letterSpacing: 0.35,
    },
    actionsContainer: {
        flexDirection: 'row',
        gap: 12,
    },
    actionButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        overflow: 'hidden',
    },
    actionGlass: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    }
});
