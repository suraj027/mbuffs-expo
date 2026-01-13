import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
    return (
        <NativeTabs>
            {/* movies directory with index.tsx */}
            <NativeTabs.Trigger
                name="movies/index"
                options={{ title: 'Movies' }}
            >
                <Icon sfSymbol="film" />
                <Label>Movies</Label>
            </NativeTabs.Trigger>

            {/* shows directory with index.tsx */}
            <NativeTabs.Trigger
                name="shows/index"
                options={{ title: 'Shows' }}
            >
                <Icon sfSymbol="tv" />
                <Label>Shows</Label>
            </NativeTabs.Trigger>

            {/* library directory with index.tsx */}
            <NativeTabs.Trigger
                name="library/index"
                options={{ title: 'Library' }}
            >
                <Icon sfSymbol="books.vertical" />
                <Label>Library</Label>
            </NativeTabs.Trigger>

            {/* search.tsx direct file */}
            <NativeTabs.Trigger
                name="search"
                options={{ title: 'Search' }}
            >
                <Icon sfSymbol="magnifyingglass" />
                <Label>Search</Label>
            </NativeTabs.Trigger>
        </NativeTabs>
    );
}
