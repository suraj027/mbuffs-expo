import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import PosterCard from '../../components/ui/PosterCard';
import ScreenHeader from '../../components/ui/ScreenHeader';

// Dummy Data
const TOP_RESULTS = [
    { id: '1', title: 'Oppenheimer', imageUrl: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg' },
    { id: '2', title: 'Barbie', imageUrl: 'https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xf8gc95RBxcDC2o.jpg' },
    { id: '3', title: 'Mission: Impossible', imageUrl: 'https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg' },
    { id: '4', title: 'Spider-Man', imageUrl: 'https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg' },
    { id: '5', title: 'The Batman', imageUrl: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50x9TfdlnJR.jpg' },
    { id: '6', title: 'Top Gun: Maverick', imageUrl: 'https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DXDAoLu.jpg' },
];

const COLUMN_COUNT = 3; // 3 columns for search grid often looks better on larger screens, but 2 is safe for generic mobile. Let's try 2 for posters.
// Actually, layout usually is 3 posters wide on iOS.
// 2 columns = 160px ~ 320+spacing. Screen is ~390.
// Let's use 2 columns.

const SPACING = 16;
const CARD_WIDTH = (Dimensions.get('window').width - (SPACING * (COLUMN_COUNT + 1))) / COLUMN_COUNT;

export default function SearchScreen() {
    const [query, setQuery] = useState('');
    const router = useRouter();

    return (
        <View style={styles.container}>
            <ScreenHeader title="Search" />


            {/* Search Input Area */}
            <View style={styles.searchBarContainer}>
                <View style={styles.searchBar}>
                    <Ionicons name="search" size={20} color="#8E8E93" style={{ marginRight: 8 }} />
                    <TextInput
                        placeholder="Movies, shows, people..."
                        placeholderTextColor="#8E8E93"
                        style={styles.input}
                        value={query}
                        onChangeText={setQuery}
                    />
                    {query.length > 0 && (
                        <TouchableOpacity onPress={() => setQuery('')}>
                            <Ionicons name="close-circle" size={20} color="#8E8E93" />
                        </TouchableOpacity>
                    )}
                </View>
            </View>

            <ScrollView
                contentContainerStyle={[styles.scrollContent, { paddingBottom: 100 }]}
                showsVerticalScrollIndicator={false}
                keyboardDismissMode="on-drag"
            >
                <Text style={styles.sectionTitle}>Top Results</Text>

                <View style={styles.grid}>
                    {TOP_RESULTS.map((item) => (
                        <PosterCard
                            key={item.id}
                            title={item.title}
                            imageUrl={item.imageUrl}
                            width={CARD_WIDTH}
                            style={{ marginBottom: 16 }}
                            onPress={() => router.push(`/movie/${item.id}`)}
                        />
                    ))}
                </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    searchBarContainer: {
        paddingHorizontal: 16,
        paddingBottom: 12,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F2F2F7', // iOS System Gray 6
        borderRadius: 12,
        paddingHorizontal: 12,
        height: 44,
    },
    input: {
        flex: 1,
        fontSize: 17,
        color: '#000',
        height: '100%',
    },
    scrollContent: {
        paddingTop: 12,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#000',
        marginLeft: 16,
        marginBottom: 16,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 16,
        gap: 16,
        justifyContent: 'space-between', // Basic grid alignment
    },
});
