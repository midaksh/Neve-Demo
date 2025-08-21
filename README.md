# Linecheck 2025 Festival Website
# NEVE - Jr Frontend Developer (Trial)

# Features

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Smooth Animations**: Framer Motion-powered transitions and micro-interactions
- **Performance Optimized**: Next.js Image optimization, code splitting, and lazy loading
- **TypeScript**: Full type safety and better developer experience
- **Custom Design System**: Consistent spacing, typography, and color palette
- **Interactive Navigation**: Animated overlay menu with expandable sections
- **Loading Experience**: Elegant loading screen with blur transitions

## 🛠️ Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript 
- **Styling**: Tailwind CSS 
- **Animations**: Framer Motion
- **Fonts**: Custom fonts (Arial Narrow, Da Vinci)
- **Build Tool**: Turbopack (development)

## 📁 Project Structure

```
neve-copy/
├── src/
│   ├── app/
│   │   ├── Components/
│   │   │   ├── Header/          # Navigation and menu
│   │   │   ├── Hero/            # Hero section with background
│   │   │   ├── Welcome/         # Introduction and gallery
│   │   │   ├── Crosslinks/      # Feature links
│   │   │   ├── Newshighlights/  # News carousel
│   │   │   ├── Manifesto/       # Festival manifesto
│   │   │   ├── Tickets/         # Ticket purchasing
│   │   │   ├── Footer/          # Site footer
│   │   │   ├── LoadingScreen/   # Loading animation
│   │   │   └── AnimatedSvg.tsx  # Logo component
│   │   ├── globals.css          # Global styles and design system
│   │   ├── fonts.ts             # Font configuration
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Home page
│   └── data/
│       └── payload.json         # Content data
├── public/
│   ├── fonts/                   # Custom font files
│   └── Arrow-serif.svg          # Navigation arrow
└── package.json
```

### Installation

1. **Clone the repository**

2. **Install dependencies**
   ```bash
   npm install
   ```
   
3. **Run development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Desktop**: ≥ 768px

## Resources 
- Original Website
- [Figma File](https://www.figma.com/design/Zob7BtHBAlcsyo4Z9gfRXG/Neve---Application-Assignment?node-id=2-23&t=xsQvUJzuUlzhXNkk-1)
- Fonts zip file for (**Arial Narrow** and **Da Vinci**)
- [package.json](./package.json) file.

## Browser QA Testing
- Arc (Chromium-based)
- Chrome
- Safari
- Firefox

## 💡 Recommendations & Insights

### API Structure & Data Management

#### Current State
The project currently uses a static `payload.json` file for all content. While this works for a static site, here are recommendations for scaling:

#### Recommended API Structure
```typescript
// API Endpoints Structure
interface APIEndpoints {
  // Content Management
  '/api/content/hero': HeroData
  '/api/content/news': NewsData[]
  '/api/content/tickets': TicketData[]
  '/api/content/manifesto': ManifestoData
  
  // Dynamic Content
  '/api/events': EventData[]
  '/api/artists': ArtistData[]
  '/api/venues': VenueData[]
  
  // User Management
  '/api/auth': AuthEndpoints
  '/api/user/profile': UserProfile
  '/api/user/tickets': UserTickets[]
  
  // E-commerce
  '/api/tickets/available': AvailableTickets
  '/api/tickets/purchase': PurchaseEndpoint
  '/api/payment/process': PaymentProcessing
}
```

#### Content Management System (CMS) Integration
```typescript
// Recommended CMS Structure
interface CMSIntegration {
  // Headless CMS (Strapi, Contentful, Sanity)
  contentTypes: {
    hero: HeroContentType
    news: NewsContentType
    tickets: TicketContentType
    artists: ArtistContentType
    venues: VenueContentType
  }
  
  // Real-time updates
  webhooks: {
    contentUpdate: WebhookEndpoint
    ticketStatus: WebhookEndpoint
  }
}
```

### Technical Constraints & Optimizations

#### Performance Optimizations
```typescript
// Image Optimization Strategy
interface ImageStrategy {
  formats: ['webp', 'avif', 'jpg']
  sizes: {
    mobile: '768px'
    tablet: '1024px'
    desktop: '1920px'
  }
  lazyLoading: boolean
  preload: 'hero' | 'critical'
}
```

#### Authentication & Authorization
```typescript
// Auth Strategy for Future Features
interface AuthStrategy {
  // JWT-based authentication
  jwt: {
    secret: string
    expiresIn: '24h'
    refreshToken: boolean
  }
  
  // OAuth providers
  oauth: {
    google: OAuthConfig
    facebook: OAuthConfig
    apple: OAuthConfig
  }
  
  // Role-based access
  roles: {
    user: UserPermissions
    admin: AdminPermissions
    organizer: OrganizerPermissions
  }
}
```

#### Microservices Architecture
```typescript
// Recommended Service Structure
interface Microservices {
  'content-service': {
    port: 3001
    responsibilities: ['content-management', 'cms-integration']
  },
  'ticket-service': {
    port: 3002
    responsibilities: ['ticket-management', 'pricing', 'availability']
  },
  'user-service': {
    port: 3003
    responsibilities: ['authentication', 'user-profiles', 'preferences']
  },
  'payment-service': {
    port: 3004
    responsibilities: ['payment-processing', 'refunds', 'invoicing']
  }
}
```
These recommendations provide a roadmap for scaling the current static site into a full-featured festival platform with robust security, performance, and user experience considerations.

---
  
# Production Site
### Deploy on Vercel
Live Website Link: https://neve-midaksh-pandita.vercel.app

## 🙏 Acknowledgments

- Design by Neve
- Code by [Midaksh Pandita][https://www.linkedin.com/in/midakshpandita]
- Festival organized by Linecheck Team
