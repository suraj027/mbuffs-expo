import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#007AFF',
                tabBarInactiveTintColor: '#8E8E93',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#fff',
                },
                headerShadowVisible: false,
                headerTintColor: '#000',
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    borderTopWidth: 0,
                },
            }}
        >
            <Tabs.Screen
                name="movies/index"
                options={{
                    title: 'Movies',
                    headerTitle: 'Movies',
                    tabBarLabel: 'Movies',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? 'film' : 'film-outline'}
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="shows/index"
                options={{
                    title: 'Shows',
                    headerTitle: 'Shows',
                    tabBarLabel: 'Shows',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? 'tv' : 'tv-outline'}
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="library/index"
                options={{
                    title: 'Library',
                    headerTitle: 'Library',
                    tabBarLabel: 'Library',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? 'library' : 'library-outline'}
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="search/index"
                options={{
                    title: 'Search',
                    headerTitle: 'Search',
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name="search"
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
