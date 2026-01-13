import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PosterCard from '../../../components/ui/PosterCard';
import ScreenHeader from '../../../components/ui/ScreenHeader';

// Dummy Data
const THEATRICAL_RELEASES = [
    { id: '1', title: 'The Housemaid', subtitle: 'Trying to escape her past...', imageUrl: 'https://image.tmdb.org/t/p/w500/57wbZjw299bZc33R2n36p132A3.jpg' }, // Placeholder
    { id: '2', title: 'Anaconda', subtitle: 'A group of friends...', imageUrl: 'https://image.tmdb.org/t/p/w500/8xfdC9e39zY724F267A3146433.jpg' }, // Placeholder
    { id: '3', title: 'Dune: Part Two', imageUrl: 'https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2GB17y2f.jpg' }
];

import GenrePill from '../../../components/ui/GenrePill';
import NetworkCard from '../../../components/ui/NetworkCard';

const CURRENTLY_STREAMING = [
    { id: '1', title: 'Five Nights at Freddy\'s', imageUrl: 'https://image.tmdb.org/t/p/w500/A4j8S6moJS2zNtRR8oWF08gRnL5.jpg' },
    { id: '2', title: 'Wake Up Dead Man', imageUrl: 'https://image.tmdb.org/t/p/w500/v9qaf4Q4p4L4z4v4Q4p4L4z4v4Q.jpg' },
    { id: '3', title: 'Wicked', imageUrl: 'https://image.tmdb.org/t/p/w500/c5Tqxeo1UpBvnAc3csUr7Pf3LEI.jpg' }
];

const COMING_SOON = [
    { id: '1', title: 'The Bone Temple', imageUrl: 'https://via.placeholder.com/300x450' },
    { id: '2', title: 'A Private Life', imageUrl: 'https://via.placeholder.com/300x450' },
    { id: '3', title: 'Night Patrol', imageUrl: 'https://via.placeholder.com/300x450' },
];

const EXPLORE_DATA = [
    { id: '1', title: 'The Shawshank Redemption', imageUrl: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg' },
    { id: '2', title: 'The Godfather', imageUrl: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg' },
    { id: '3', title: 'The Godfather Part II', imageUrl: 'https://image.tmdb.org/t/p/w500/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg' },
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
    { id: 'g2', name: 'Adventure', color: { backgroundColor: '#DCFCE7', textColor: '#16A34A' } },
    { id: 'g3', name: 'Animation', color: { backgroundColor: '#F3E8FF', textColor: '#9333EA' } },
    { id: 'g4', name: 'Comedy', color: { backgroundColor: '#FFEDD5', textColor: '#EA580C' } },
    { id: 'g5', name: 'Crime', color: { backgroundColor: '#FAE8FF', textColor: '#D946EF' } },
    { id: 'g6', name: 'Documentary', color: { backgroundColor: '#F5F5F4', textColor: '#57534E' } },
    { id: 'g7', name: 'Drama', color: { backgroundColor: '#FFE4E6', textColor: '#E11D48' } },
    { id: 'g8', name: 'Family', color: { backgroundColor: '#ECFEFF', textColor: '#0891B2' } },
];

const SCREEN_WIDTH = Dimensions.get('window').width;
const POSTER_WIDTH = 160;

export default function MoviesScreen() {
    const insets = useSafeAreaInsets();
    const router = useRouter();

    return (
        <View style={styles.container}>
            {/* 
        Sticky Header Logic:
        For simple implementation, we put GlassHeader absolutely on top 
        OR we rely on ScrollView contentContainerStyle. 
        However, the requirement is "GlassHeader with large title". 
        If it mimics iOS Large Title, it scrolls. 
        The "Sticky" part usually refers to the small title bar that appears on scroll.
        For this simplified version, we'll put the GlassHeader at the top of the View (static) 
        OR inside ScrollView.
        Screenshots show "Movies" at the top. 
        Let's put it at the very top of ScrollView so it scrolls away?
        Actually, standard iOS Large Title scrolls away, and a small title fades in.
        My GlassHeader is a static component. 
        I will place it as a static header for now (always visible) or scrollable.
        Re-reading designs: "Glass header with large title" in Plan.md.
        Let's make it the first item in ScrollView for the Large Title look.
        (Note: Real iOS Large Title collapses. Implementing that manually is complex.
         For this MVP, valid to have it scrollable).
      */}

            <ScrollView
                contentContainerStyle={[styles.scrollContent, { paddingBottom: 100 }]} // Padding for TabBar
                showsVerticalScrollIndicator={false}
            >
                <ScreenHeader title="Movies" />


                <View style={styles.section}>
                    <TouchableOpacitySectionHeader title="Theatrical Releases" subtitle="Discover the latest theatrical releases" />
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalList}>
                        {THEATRICAL_RELEASES.map((movie) => (
                            <PosterCard
                                key={movie.id}
                                title={movie.title}
                                subtitle={movie.subtitle} // Subtitle often omitted in grid, but shown here
                                imageUrl={movie.imageUrl || 'https://via.placeholder.com/300x450'}
                                style={{ marginRight: 16 }}
                                width={POSTER_WIDTH}
                                onPress={() => router.push(`/movie/${movie.id}`)}
                            />
                        ))}
                    </ScrollView>
                </View>

                <View style={styles.section}>
                    <TouchableOpacitySectionHeader title="Currently Streaming" subtitle="Discover the latest home releases" />
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalList}>
                        {CURRENTLY_STREAMING.map((movie) => (
                            <PosterCard
                                key={movie.id}
                                title={movie.title}
                                imageUrl={movie.imageUrl}
                                style={{ marginRight: 16 }}
                                width={POSTER_WIDTH}
                                onPress={() => router.push(`/movie/${movie.id}`)}
                            />
                        ))}
                    </ScrollView>
                </View>

                <View style={styles.section}>
                    <TouchableOpacitySectionHeader title="Coming Soon" subtitle="Anticipated movies" />
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalList}>
                        {COMING_SOON.map((movie) => (
                            <PosterCard
                                key={movie.id}
                                title={movie.title}
                                imageUrl={movie.imageUrl}
                                style={{ marginRight: 16 }}
                                width={POSTER_WIDTH}
                                onPress={() => router.push(`/movie/${movie.id}`)}
                            />
                        ))}
                    </ScrollView>
                </View>

                <View style={styles.section}>
                    <TouchableOpacitySectionHeader title="Explore" subtitle="Your next watch" />
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalList}>
                        {EXPLORE_DATA.map((movie) => (
                            <PosterCard
                                key={movie.id}
                                title={movie.title}
                                imageUrl={movie.imageUrl}
                                style={{ marginRight: 16 }}
                                width={POSTER_WIDTH}
                                onPress={() => router.push(`/movie/${movie.id}`)}
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
                    <TouchableOpacitySectionHeader title="Genres" subtitle="Movies by genre" />
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

            {/* 
        Note: TabBar is handled by _layout.tsx and is absolute positioned.
        We added paddingBottom to ScrollView to avoid overlap.
      */}
        </View>
    );
}

// Helper for Section Header (Title + Chevron/Subtitle)
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
        backgroundColor: '#fff', // Or system background
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
