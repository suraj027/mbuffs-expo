import { Ionicons } from '@expo/vector-icons';
import { GlassView } from 'expo-glass-effect';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import GenrePill from '../../components/ui/GenrePill';
import GlassBackButton from '../../components/ui/GlassBackButton';
import PosterCard from '../../components/ui/PosterCard';

const { width, height } = Dimensions.get('window');

// Mock Data for Detail
const MOVIE_DETAIL = {
    id: '1',
    title: 'Dune: Part Two',
    tagline: 'Long live the fighters.',
    overview: 'Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.',
    rating: 8.4,
    runtime: '2h 46m',
    year: '2024',
    posterUrl: 'https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2GB17y2f.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg', // High res backdrop
    genres: ['Science Fiction', 'Adventure'],
    cast: [
        { id: 'c1', name: 'Timothée Chalamet', role: 'Paul Atreides', image: 'https://image.tmdb.org/t/p/w200/BE2sdjpgEHr2rjJfCaPPOe7UUd.jpg' },
        { id: 'c2', name: 'Zendaya', role: 'Chani', image: 'https://image.tmdb.org/t/p/w200/cbCibOA1yCQ8p9tBAFYnWqwVq4F.jpg' },
        { id: 'c3', name: 'Rebecca Ferguson', role: 'Lady Jessica', image: 'https://image.tmdb.org/t/p/w200/lJloTOheuQSirSLXNA3cBZs3VPp.jpg' },
    ]
};

export default function MovieDetailScreen() {
    const { id } = useLocalSearchParams();
    const insets = useSafeAreaInsets();
    const movie = MOVIE_DETAIL; // ignoring ID for MVP demo

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
                {/* Hero Image Section */}
                <View style={styles.heroContainer}>
                    <Image
                        source={{ uri: movie.backdropUrl }}
                        style={styles.heroImage}
                        contentFit="cover"
                    />
                    <LinearGradient
                        colors={['transparent', 'rgba(0,0,0,0.8)', '#000']}
                        style={styles.gradient}
                    />

                    {/* Top Bar Actions (Absolute) */}
                    <View style={[styles.topBar, { paddingTop: insets.top }]}>
                        <GlassBackButton />
                        {/* Optional Right Actions like Share/Heart */}
                        <View style={styles.rightActions}>
                            <TouchableOpacity style={styles.iconButton}>
                                <GlassView style={styles.iconGlass}>
                                    <Ionicons name="heart-outline" size={24} color="#fff" />
                                </GlassView>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Title Info overlay on bottom of hero */}
                    <View style={styles.heroContent}>
                        <Text style={styles.title}>{movie.title}</Text>

                        <View style={styles.metaRow}>
                            <Text style={styles.metaText}>{movie.year}</Text>
                            <Text style={styles.dot}>•</Text>
                            <Text style={styles.metaText}>{movie.runtime}</Text>
                            <Text style={styles.dot}>•</Text>
                            <View style={styles.ratingBadge}>
                                <Ionicons name="star" size={12} color="#FFD700" />
                                <Text style={styles.ratingText}>{movie.rating}</Text>
                            </View>
                        </View>

                        {/* Genres */}
                        <View style={styles.genreRow}>
                            {movie.genres.map((g, i) => (
                                <GenrePill
                                    key={i}
                                    name={g}
                                    style={styles.genrePill}
                                    colorVariant={{ backgroundColor: 'rgba(255,255,255,0.2)', textColor: '#fff' }}
                                />
                            ))}
                        </View>

                        {/* Actions */}
                        <View style={styles.actionRow}>
                            <TouchableOpacity style={styles.playButton} activeOpacity={0.8}>
                                <Ionicons name="play" size={24} color="#000" />
                                <Text style={styles.playText}>Play</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.addButton} activeOpacity={0.8}>
                                <Ionicons name="add" size={24} color="#fff" />
                                <Text style={styles.addText}>My List</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* Overview Section */}
                <View style={styles.contentSection}>
                    <Text style={styles.sectionTitle}>Overview</Text>
                    <Text style={styles.overviewText}>{movie.overview}</Text>
                </View>

                {/* Cast Section */}
                <View style={styles.contentSection}>
                    <Text style={styles.sectionTitle}>Top Cast</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.castList}>
                        {movie.cast.map((actor) => (
                            <View key={actor.id} style={styles.castCard}>
                                <Image source={{ uri: actor.image }} style={styles.castImage} />
                                <Text style={styles.castName} numberOfLines={1}>{actor.name}</Text>
                                <Text style={styles.castRole} numberOfLines={1}>{actor.role}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                {/* Similar Movies Placeholder */}
                <View style={styles.contentSection}>
                    <Text style={styles.sectionTitle}>You Might Also Like</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginHorizontal: -16 }}>
                        <View style={{ paddingLeft: 16, flexDirection: 'row' }}>
                            <PosterCard
                                title="Dune"
                                imageUrl="https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg"
                                width={120}
                                style={{ marginRight: 12 }}
                            />
                            <PosterCard
                                title="Blade Runner 2049"
                                imageUrl="https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg"
                                width={120}
                                style={{ marginRight: 12 }}
                            />
                        </View>
                    </ScrollView>
                </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000', // Dark background for rich media feel
    },
    heroContainer: {
        width: width,
        height: height * 0.65, // Tall hero
        position: 'relative',
        justifyContent: 'flex-end',
    },
    heroImage: {
        ...StyleSheet.absoluteFillObject,
    },
    gradient: {
        ...StyleSheet.absoluteFillObject,
        // Gradient from transparent to black bottom
    },
    topBar: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        zIndex: 10,
    },
    rightActions: {
        flexDirection: 'row',
    },
    iconButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        overflow: 'hidden',
    },
    iconGlass: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    heroContent: {
        padding: 20,
        paddingBottom: 24,
    },
    title: {
        fontSize: 32,
        fontWeight: '800',
        color: '#fff',
        marginBottom: 8,
        textShadowColor: 'rgba(0,0,0,0.5)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4,
    },
    metaRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    metaText: {
        color: '#dedede',
        fontSize: 14,
        fontWeight: '600',
    },
    dot: {
        color: '#dedede',
        marginHorizontal: 8,
    },
    ratingBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255,215,0, 0.2)',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
    },
    ratingText: {
        color: '#FFD700',
        fontWeight: 'bold',
        fontSize: 12,
        marginLeft: 4,
    },
    genreRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: 20,
    },
    genrePill: {
        minWidth: 0,
        paddingVertical: 6,
        paddingHorizontal: 12,
    },
    actionRow: {
        flexDirection: 'row',
        gap: 12,
    },
    playButton: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
    },
    playText: {
        color: '#000',
        fontWeight: '700',
        fontSize: 16,
    },
    addButton: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.2)',
        height: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.3)',
    },
    addText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
    contentSection: {
        paddingHorizontal: 20,
        marginTop: 24,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#fff',
        marginBottom: 12,
    },
    overviewText: {
        color: '#ccc',
        fontSize: 15,
        lineHeight: 24,
    },
    castList: {
        gap: 16,
    },
    castCard: {
        width: 100,
        alignItems: 'center',
    },
    castImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 8,
        backgroundColor: '#333',
    },
    castName: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '600',
        textAlign: 'center',
    },
    castRole: {
        color: '#aaa',
        fontSize: 11,
        textAlign: 'center',
    },
});
