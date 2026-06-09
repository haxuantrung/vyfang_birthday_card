# 07-technical-architecture.md

# TECHNICAL ARCHITECTURE

## TECHNOLOGY STACK

### Frontend

* NextJS 15 (App Router)
* TypeScript
* TailwindCSS
* Shadcn UI

### Animation

* Framer Motion
* GSAP
* React Spring (optional)

### 3D

* ThreeJS
* React Three Fiber
* Drei

### Backend

* Supabase Database
* Supabase Storage
* Supabase Auth

### Deployment

* Vercel

---

# ARCHITECTURE PRINCIPLES

## Principle 1

Mobile First

Mọi component phải được thiết kế từ mobile trước.

---

## Principle 2

Performance First

Không hy sinh performance để lấy animation.

---

## Principle 3

Content Driven

Toàn bộ nội dung lấy từ Supabase.

Không hardcode text.

---

## Principle 4

Reusable Components

Mỗi section là một component độc lập.

---

# FOLDER STRUCTURE

```text
src/

├── app
│
├── (public)
│   ├── page.tsx
│   ├── layout.tsx
│
├── admin
│   ├── page.tsx
│
├── api
│
├── components
│
├── features
│
├── hooks
│
├── lib
│
├── services
│
├── store
│
├── types
│
├── utils
│
└── styles
```

---

# COMPONENT STRUCTURE

```text
components/

├── ui
│
├── shared
│
├── galaxy
│
├── countdown
│
├── memories
│
├── gallery
│
├── audio
│
├── letter
│
└── easter-eggs
```

---

# GALAXY MODULE

```text
components/galaxy

├── GalaxyCanvas.tsx
├── StarField.tsx
├── AuroraLayer.tsx
├── ConstellationMap.tsx
├── StarNode.tsx
├── NebulaLayer.tsx
└── PortalTransition.tsx
```

---

# MEMORY MODULE

```text
components/memories

├── MissedEachOther.tsx
├── FirstHug.tsx
├── TriAnTrip.tsx
├── FutureStars.tsx
└── MemoryCard.tsx
```

---

# PHOTO MODULE

```text
components/gallery

├── FloatingGallery.tsx
├── PolaroidCard.tsx
├── Lightbox.tsx
└── FeaturedPhoto.tsx
```

---

# LETTER MODULE

```text
components/letter

├── FinalLetter.tsx
├── HandwritingAnimation.tsx
├── Signature.tsx
└── LetterBackground.tsx
```

---

# AUDIO MODULE

```text
components/audio

├── MusicPlayer.tsx
├── VoicePlayer.tsx
├── Waveform.tsx
└── AudioControl.tsx
```

---

# PAGE STRUCTURE

```text
HomePage

↓

CountdownGate

↓

PasswordGate

↓

OpeningScene

↓

GalaxyMap

↓

MemoryScenes

↓

PhotoUniverse

↓

FutureStars

↓

FinalLetter

↓

VoiceMessage
```

---

# STATE MANAGEMENT

Use Zustand

---

Store

```typescript
siteStore

countdownUnlocked

passwordVerified

openedStars

currentScene

audioEnabled

musicEnabled
```

---

# TYPES

```typescript
MemoryStory
GalleryImage
TwentyReason
EasterEgg
AudioAsset
SiteSetting
```

---

# SERVICES

```text
services/

settings.service.ts

memory.service.ts

gallery.service.ts

audio.service.ts

reasons.service.ts

easterEgg.service.ts
```

---

# DATA FETCHING

Server Components

Whenever possible.

---

Client Components

Only when interaction required.

---

# IMAGE RULES

Use

next/image

---

Formats

webp

avif

---

Max Width

1920px

---

# AUDIO RULES

Lazy Load

Only after entering universe.

---

Background Music

Autoplay attempt

Fallback Manual Play

---

# THREEJS ARCHITECTURE

Canvas

↓

Galaxy Scene

↓

Star Layer

↓

Nebula Layer

↓

Constellation Layer

↓

Particle Layer

↓

Camera Controller

---

# PERFORMANCE OPTIMIZATION

Stars

Use Instanced Mesh

---

Images

Lazy Load

---

Audio

On Demand

---

Animations

GPU Accelerated

---

# RESPONSIVE SPECIFICATION

## Mobile

390x844

Primary

---

## Large Mobile

430x932

Primary

---

## Tablet

768+

Supported

---

## Desktop

1280+

Supported

---

# ADMIN SYSTEM

Route

/admin

---

Features

Edit Memories

Edit Letter

Upload Images

Upload Voice

Upload Music

Manage Settings

---

# SEO

Minimal

No SEO priority

---

# SECURITY

Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL

NEXT_PUBLIC_SUPABASE_ANON_KEY

SUPABASE_SERVICE_ROLE_KEY
```

---

# DEPLOYMENT FLOW

GitHub

↓

Vercel

↓

Production

---

Supabase

↓

Database

Storage

Auth

---

# TARGET PERFORMANCE

Lighthouse

Performance > 90

Accessibility > 90

Best Practices > 95

SEO > 80
