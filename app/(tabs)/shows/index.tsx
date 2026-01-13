import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import GenrePill from '../../../components/ui/GenrePill';
import NetworkCard from '../../../components/ui/NetworkCard';
import PosterCard from '../../../components/ui/PosterCard';

// Dummy Data for TV Shows
const CURRENTLY_STREAMING = [
    { id: '1', title: 'The Rookie', subtitle: 'Starting over isn\'t easy...', imageUrl: 'https://via.placeholder.com/300x450' }, // Placeholder
    { id: '2', title: 'Chicago Fire', subtitle: 'A riveting look...', imageUrl: 'https://via.placeholder.com/300x450' },
    { id: '3', title: 'Stranger Things', imageUrl: 'https://via.placeholder.com/300x450' }
];

const AIRING_TODAY = [
    { id: '1', title: 'The Loud House', imageUrl: 'https://via.placeholder.com/300x450' },
    { id: '2', title: 'Father Brown', imageUrl: 'https://via.placeholder.com/300x450' },
    { id: '3', title: 'RuPaul\'s Drag Race', imageUrl: 'https://via.placeholder.com/300x450' },
];

const POPULAR_SHOWS = [
    { id: '1', title: 'Stranger Things', imageUrl: 'https://via.placeholder.com/300x450' },
    { id: '2', title: 'Watch What Happens Live', imageUrl: 'https://via.placeholder.com/300x450' },
    { id: '3', title: 'Return of Superman', imageUrl: 'https://via.placeholder.com/300x450' },
];

const COMING_SOON = [
    { id: '1', title: 'Maxxed Out', imageUrl: 'https://via.placeholder.com/300x450' },
    { id: '2', title: 'Fear Factor', imageUrl: 'https://via.placeholder.com/300x450' },
    { id: '3', title: 'New Series', imageUrl: 'https://via.placeholder.com/300x450' },
];

const NETWORKS = [
    { id: 'n1', name: 'Netflix', logo: 'https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png' },
    { id: 'n2', name: 'Prime Video', logo: 'https://image.tmdb.org/t/p/original/ifHb2CJeBOvl5gjpbDEm2xsLwY3.jpg' },
    { id: 'n3', name: 'Apple TV', logo: 'https://image.tmdb.org/t/p/original/4KAy34EHvRM25Ih8wb82AuGU7zJ.png' },
    { id: 'n4', name: 'Crunchyroll', logo: 'https://image.tmdb.org/t/p/original/mXeC4TrcgdU6ltE9bCBCEORwSQR.png' },
    { id: 'n5', name: 'Disney+', logo: 'https://image.tmdb.org/t/p/original/7rwgEs15tFwyR9NPQ5vpzxTj19Q.png' },
];

const GENRES = [
    { id: 'g1', name: 'Action', color: { backgroundColor: '#E0F2FE', textColor: '#0284C7' } },
    { id: 'g2', name: 'Animation', color: { backgroundColor: '#F3E8FF', textColor: '#9333EA' } },
    { id: 'g3', name: 'Comedy', color: { backgroundColor: '#FFEDD5', textColor: '#EA580C' } },
    { id: 'g4', name: 'Crime', color: { backgroundColor: '#FAE8FF', textColor: '#D946EF' } },
    { id: 'g5', name: 'Documentary', color: { backgroundColor: '#F5F5F4', textColor: '#57534E' } },
    { id: 'g6', name: 'Drama', color: { backgroundColor: '#FFE4E6', textColor: '#E11D48' } },
    { id: 'g7', name: 'Family', color: { backgroundColor: '#ECFEFF', textColor: '#0891B2' } },
    { id: 'g8', name: 'Kids', color: { backgroundColor: '#FEF3C7', textColor: '#D97706' } },
    { id: 'g9', name: 'Mystery', color: { backgroundColor: '#E0F7FA', textColor: '#006064' } },
    { id: 'g10', name: 'News', color: { backgroundColor: '#FFEDD5', textColor: '#C2410C' } },
];

const POSTER_WIDTH = 160;

export default function ShowsScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={[styles.scrollContent, { paddingBottom: 100 }]}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.section}>
                    <TouchableOpacitySectionHeader title="Currently Streaming" subtitle="Discover your next watch" />
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalList}>
                        {CURRENTLY_STREAMING.map((show) => (
                            <PosterCard
                                key={show.id}
                                title={show.title}
                                subtitle={show.subtitle}
                                imageUrl={show.imageUrl}
                                style={{ marginRight: 16 }}
                                width={POSTER_WIDTH}
                                onPress={() => router.push(`/tv/${show.id}`)}
                            />
                        ))}
                    </ScrollView>
                </View>

                <View style={styles.section}>
                    <TouchableOpacitySectionHeader title="Airing Today" subtitle="Stay up to date" />
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalList}>
                        {AIRING_TODAY.map((show) => (
                            <PosterCard
                                key={show.id}
                                title={show.title}
                                imageUrl={show.imageUrl}
                                style={{ marginRight: 16 }}
                                width={POSTER_WIDTH}
                                onPress={() => router.push(`/tv/${show.id}`)}
                            />
                        ))}
                    </ScrollView>
                </View>

                <View style={styles.section}>
                    <TouchableOpacitySectionHeader title="Popular Shows" subtitle="Popular and trending shows" />
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalList}>
                        {POPULAR_SHOWS.map((show) => (
                            <PosterCard
                                key={show.id}
                                title={show.title}
                                imageUrl={show.imageUrl}
                                style={{ marginRight: 16 }}
                                width={POSTER_WIDTH}
                                aspectRatio={16 / 9} // Shows sometimes use landscape? But standard is poster. Let's stick to default 2/3 for now or match movie screen. Design shows vertical posters.
                                onPress={() => router.push(`/tv/${show.id}`)}
                            />
                        ))}
                    </ScrollView>
                </View>

                <View style={styles.section}>
                    <TouchableOpacitySectionHeader title="Coming Soon" subtitle="New and upcoming shows" />
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalList}>
                        {COMING_SOON.map((show) => (
                            <PosterCard
                                key={show.id}
                                title={show.title}
                                imageUrl={show.imageUrl}
                                style={{ marginRight: 16 }}
                                width={POSTER_WIDTH}
                                onPress={() => router.push(`/tv/${show.id}`)}
                            />
                        ))}
                    </ScrollView>
                </View>

                <View style={styles.section}>
                    <TouchableOpacitySectionHeader title="Networks" subtitle="Available watch providers" />
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalList}>
                        {NETWORKS.map((network) => (
                            <NetworkCard
                                key={network.id}
                                name={network.name}
                                logoUrl={network.logo}
                            />
                        ))}
                    </ScrollView>
                </View>

                <View style={styles.section}>
                    <TouchableOpacitySectionHeader title="Genres" subtitle="Shows by genre" />
                    <View style={styles.gridList}>
                        {GENRES.map((genre) => (
                            <GenrePill
                                key={genre.id}
                                name={genre.name}
                                colorVariant={genre.color}
                                style={styles.genrePill}
                            />
                        ))}
                    </View>
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
    gridList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 16,
        gap: 12,
    },
    genrePill: {
        marginBottom: 0,
        flexGrow: 1,
    },
});
