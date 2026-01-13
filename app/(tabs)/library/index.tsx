import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import PosterCard from '../../../components/ui/PosterCard';

// Dummy Data
const WATCHLIST = [
    { id: '1', title: 'Severance', subtitle: 'Season 2 Coming Soon', imageUrl: 'https://via.placeholder.com/300x450' },
    { id: '2', title: 'Inception', imageUrl: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg' },
    { id: '3', title: 'Interstellar', imageUrl: 'https://image.tmdb.org/t/p/w500/gEU2QniL6E8ahMcafCUYA4fdOwm.jpg' }
];

const HISTORY = [
    { id: 'w1', title: 'The Matrix', imageUrl: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpQUk5H.jpg' },
    { id: 'w2', title: 'The Dark Knight', imageUrl: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg' },
];

const FAVORITES = [
    { id: 'f1', title: 'Pulp Fiction', imageUrl: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg' },
    { id: 'f2', title: 'Fight Club', imageUrl: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg' },
];

const POSTER_WIDTH = 100; // Smaller for library grid/list? Or standard? Let's use standard for horizontal, smaller for grid?
// Library usually implies a grid. Let's do horizontal sections for now to match other screens, or a vertical grid for "All".
// Let's stick to Sections for "Watchlist", "History" etc.

export default function LibraryScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={[styles.scrollContent, { paddingBottom: 100 }]}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.section}>
                    <TouchableOpacitySectionHeader title="Watchlist" subtitle="Movies and shows you want to watch" />
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalList}>
                        {WATCHLIST.map((item) => (
                            <PosterCard
                                key={item.id}
                                title={item.title}
                                subtitle={item.subtitle}
                                imageUrl={item.imageUrl}
                                style={{ marginRight: 16 }}
                                width={140}
                                onPress={() => router.push(`/movie/${item.id}`)}
                            />
                        ))}
                    </ScrollView>
                </View>

                <View style={styles.section}>
                    <TouchableOpacitySectionHeader title="Favorites" subtitle="Your all-time bests" />
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalList}>
                        {FAVORITES.map((item) => (
                            <PosterCard
                                key={item.id}
                                title={item.title}
                                imageUrl={item.imageUrl}
                                style={{ marginRight: 16 }}
                                width={140}
                                onPress={() => router.push(`/movie/${item.id}`)}
                            />
                        ))}
                    </ScrollView>
                </View>

                <View style={styles.section}>
                    <TouchableOpacitySectionHeader title="History" subtitle="Recently watched" />
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalList}>
                        {HISTORY.map((item) => (
                            <PosterCard
                                key={item.id}
                                title={item.title}
                                imageUrl={item.imageUrl}
                                style={{ marginRight: 16 }}
                                width={140}
                                onPress={() => router.push(`/movie/${item.id}`)}
                            />
                        ))}
                    </ScrollView>
                </View>

            </ScrollView>
        </View>
    );
}

const TouchableOpacitySectionHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
    <View style={styles.sectionHeader}>
        <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <Text style={styles.chevron}> ›</Text>
        </View>
        {subtitle && <Text style={styles.sectionSubtitle}>{subtitle}</Text>}
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        paddingTop: 0,
    },
    section: {
        marginBottom: 24,
    },
    sectionHeader: {
        paddingHorizontal: 16,
        marginBottom: 12,
    },
    sectionHeaderRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#000',
    },
    chevron: {
        fontSize: 20,
        fontWeight: '600',
        color: '#8E8E93',
        marginTop: 2,
    },
    sectionSubtitle: {
        fontSize: 14,
        color: '#8E8E93',
        marginTop: 2,
    },
    horizontalList: {
        paddingHorizontal: 16,
    },
});
