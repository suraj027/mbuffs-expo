# mbuffs – Master Build Plan

A cross-platform (iOS + Android) movie & TV show tracking app built with Expo.
The app focuses on native feel, performance, and social discovery.

This document defines **what we are building**, **how we are building it**, and **the order of execution**.
It is intended to be followed by both humans and AI IDEs (Antigravity).

---

## 1. Product Overview

**mbuffs** allows users to:
- Discover movies and TV shows
- View release dates, ratings, trailers, and metadata
- Add items to a personal watchlist
- Track watched content
- Receive and send recommendations to friends (future phase)

The app must feel:
- SwiftUI-native on iOS (Liquid Glass style)
- Material You–native on Android
- Fast, light, and minimal

---

## 2. Platforms & Tech Stack

### Platforms
- iOS (Targeting iOS 26+ only - strict requirement)
- Android

### Core Stack
- Expo (managed workflow)
- Expo Router (file-based navigation)
- TypeScript (strict)
- React Native Reanimated
- React Native Gesture Handler

### UI & Visuals
- `expo-blur` for iOS glass effects (targeting iOS 26 Liquid Glass style)
- Platform-aware styling (blur on iOS, elevation on Android)
- No third-party UI kits

### Data & State
- TanStack Query for server data
- Zustand for UI-only state
- All content fetched from a custom backend (TMDB is not called directly)

---

## 3. App Navigation Structure

### Bottom Tabs (Fixed)
- Movies
- Shows
- Library
- Movies
- Shows
- Library
- Search (Floating Action Button)

Each tab has:
- Its own navigation stack
- Independent data fetching
- No shared screen-level state

---

## 4. Screen Definitions

### 4.1 Movies Screen

Purpose: Browse and discover movies.

Sections:
- Theatrical Releases
- Currently Streaming
- Coming Soon
- Explore (editorial or curated)
- Networks
- Genres

Layout:
- Vertical scroll
- Horizontal carousels
- Glass header with large title + Shuffle & Menu actions
- Floating glass tab bar with detached Search button

---

### 4.2 TV Shows Screen

Purpose: Discover and track TV shows.

Sections:
- Currently Streaming
- Airing Today
- Popular Shows
- Coming Soon
- Networks
- Genres

Layout mirrors Movies screen for consistency.

---

### 4.3 Library Screen

Purpose: User’s personal collection.

Sections:
- Watchlist
- Watched
- Favorites
- Recommended by Friends (future)

This screen is data-driven and personalized.

---

### 4.4 Search Screen

Purpose: Universal search across content.

Features:
- Search movies and TV shows
- Recent searches
- Genre & filter support (future)
- Fast, keyboard-first UX

---

## 5. Detail Screens

### Movie Detail
- Hero poster + backdrop
- Title, rating, release date
- Overview
- Trailer (YouTube)
- Cast & crew
- Similar / recommended movies
- Actions:
  - Add to Watchlist
  - Mark as Watched
  - Rate
  - Recommend to friend (future)

### TV Show Detail
- Similar structure with:
  - Seasons
  - Episodes
  - Airing status

Detail screens must feel comparable to Apple TV / Netflix native apps.


## 6. UI System & Design Rules

### Global Rules
- Rounded corners only (no sharp edges)
- No hard borders
- Subtle shadows only
- Motion > decoration

### iOS
- Blur + vibrancy
- Stretchy scroll headers
- Large titles

### Android
- Material You colors
- Tonal surfaces
- Elevation instead of blur

---

## 6. Reusable Components

### Core Components
- PosterCard
- HeroPosterCard
- MiniPosterCard
- HorizontalCarousel
- GenrePill (with specific color variants per genre)
- GlassHeader (Title + Actions)
- GlassTabBar (floating, with separate Search button)

All components must:
- Be memoized
- Accept size variants
- Be platform-aware

---

## 7. State Management Rules

### TanStack Query
- All remote data
- Caching, pagination, prefetching

### Zustand
- UI state only:
  - Theme
  - Filters
  - View preferences

Never:
- Store server responses in Zustand
- Duplicate cache logic

---

## 8. Performance Constraints (Non-Negotiable)

- FlatList for all lists and carousels
- Proper image sizing (no oversized posters)
- No inline anonymous render functions
- Native driver animations only
- Lazy rendering of off-screen content

---

## 9. Development Phases

### Phase 1 – MVP
- Movies tab
- Shows tab
- Library (watchlist only)
- Search
- Detail screens
- TMDB backend integration

### Phase 2 – Social
- User profiles
- Friend system
- Recommendations
- Activity feed

### Phase 3 – Delight
- Smart suggestions
- Mood-based discovery
- AI summaries (optional)

---

## 10. Antigravity / AI IDE Rules

When using Antigravity (or Cursor):
- Work on one screen at a time
- Do not scaffold future features early
- Always explain architectural decisions
- Never introduce libraries without justification
- Prefer Expo APIs over custom native code

---

## 11. Definition of Done

The app is considered successful when:
- It feels native on both platforms
- Navigation is fluid and predictable
- UI remains light and uncluttered
- Codebase is understandable after 6+ months
- Features can scale without rewrites

---

End of Plan.

