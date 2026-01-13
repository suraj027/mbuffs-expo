import { Ionicons } from '@expo/vector-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Icon mapping for routes
const getIconName = (routeName: string, isFocused: boolean): keyof typeof Ionicons.glyphMap => {
    // Clean up route name (remove /index suffix if present)
    const cleanName = routeName.replace('/index', '').replace('index', '');

    switch (cleanName) {
        case 'movies':
            return isFocused ? 'film' : 'film-outline';
        case 'shows':
            return isFocused ? 'tv' : 'tv-outline';
        case 'library':
            return isFocused ? 'library' : 'library-outline';
        case 'search':
            return 'search';
        default:
            return 'help-circle-outline';
    }
};

// Get display label for route
const getLabel = (routeName: string, options: any): string => {
    if (options.tabBarLabel && typeof options.tabBarLabel === 'string') {
        return options.tabBarLabel;
    }
    if (options.title) {
        return options.title;
    }
    // Clean up and capitalize
    const cleanName = routeName.replace('/index', '').replace('index', '');
    return cleanName.charAt(0).toUpperCase() + cleanName.slice(1);
};

export default function GlassTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
    const insets = useSafeAreaInsets();

    // Routes to show in the main pill (exclude search)
    const mainRoutes = state.routes.filter(route => !route.name.includes('search'));
    // The search route
    const searchRoute = state.routes.find(route => route.name.includes('search'));

    return (
        <View style={[styles.container, { paddingBottom: insets.bottom || 20 }]}>
            {/* Main Navigation Pill - iOS 26 Liquid Glass Style */}
            <View style={styles.pillContainer}>
                <BlurView
                    intensity={100}
                    tint="light"
                    style={styles.glassPill}
                >
                    <View style={styles.tabItemsContainer}>
                        {mainRoutes.map((route) => {
                            const { options } = descriptors[route.key];
                            const isFocused = state.routes[state.index].key === route.key;
                            const iconName = getIconName(route.name, isFocused);
                            const label = getLabel(route.name, options);

                            const onPress = () => {
                                const event = navigation.emit({
                                    type: 'tabPress',
                                    target: route.key,
                                    canPreventDefault: true,
                                });

                                if (!isFocused && !event.defaultPrevented) {
                                    navigation.navigate(route.name, route.params);
                                }
                            };

                            return (
                                <TouchableOpacity
                                    key={route.key}
                                    accessibilityRole="button"
                                    accessibilityState={isFocused ? { selected: true } : {}}
                                    accessibilityLabel={options.tabBarAccessibilityLabel}
                                    onPress={onPress}
                                    style={styles.tabItem}
                                >
                                    <Ionicons
                                        name={iconName}
                                        size={24}
                                        color={isFocused ? '#007AFF' : '#8E8E93'}
                                    />
                                    <Text
                                        style={[
                                            styles.label,
                                            { color: isFocused ? '#007AFF' : '#8E8E93' }
                                        ]}
                                    >
                                        {label}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </BlurView>
            </View>

            {/* Detached Search Button - iOS 26 Liquid Glass Style */}
            {searchRoute && (
                <TouchableOpacity
                    style={styles.searchButtonContainer}
                    activeOpacity={0.8}
                    onPress={() => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: searchRoute.key,
                            canPreventDefault: true,
                        });
                        if (state.routes[state.index].key !== searchRoute.key && !event.defaultPrevented) {
                            navigation.navigate(searchRoute.name, searchRoute.params);
                        }
                    }}
                >
                    <BlurView
                        intensity={100}
                        tint="light"
                        style={styles.searchGlass}
                    >
                        <Ionicons name="search" size={28} color="#007AFF" />
                    </BlurView>
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    pillContainer: {
        flex: 1,
        marginRight: 12,
        height: 64,
        borderRadius: 32,
        overflow: 'hidden',
        // iOS 26 Liquid Glass shadow
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.15,
                shadowRadius: 24,
            },
            android: {
                elevation: 8,
            },
        }),
    },
    glassPill: {
        flex: 1,
        borderRadius: 32,
        // iOS 26 Liquid Glass styling
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.6)',
        overflow: 'hidden',
    },
    tabItemsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    tabItem: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    label: {
        fontSize: 10,
        marginTop: 4,
        fontWeight: '600',
    },
    searchButtonContainer: {
        width: 64,
        height: 64,
        borderRadius: 32,
        overflow: 'hidden',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.15,
                shadowRadius: 24,
            },
            android: {
                elevation: 8,
            },
        }),
    },
    searchGlass: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 32,
        // iOS 26 Liquid Glass styling
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.6)',
        overflow: 'hidden',
    },
});
