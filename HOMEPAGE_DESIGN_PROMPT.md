# Homepage Design Prompt for QFA (Quran For All)

## Executive Summary

**Project:** QFA (Quran For All) - Homepage Redesign  
**Objective:** Create an exceptional homepage (`/page.tsx`) that effectively communicates the product value proposition to users who log in, while maintaining the existing PrayerTime functionality.

**Target Audience:** Users who have logged into the platform seeking Islamic education, guidance, and spiritual growth.

---

## 1. Project Context & Brand Identity

### Organization Mission
Quran For All is an educational platform with the following core objectives:
- Spread the message of the Quran to everyone
- Emphasize that the Quran is for all mankind, not just Muslims
- Encourage people to read and understand the Quran to follow the right path

### Brand Identity
- **Primary Color:** `#214e45` (Deep Teal/Green - represents spirituality, growth, and Islamic heritage)
- **Secondary Color:** `#a89462` (Gold/Tan - represents wisdom, enlightenment, and tradition)
- **Font Family:** Inter (for UI) / Amiri (for Arabic text)
- **Background:** `#fff` (Clean white background)
- **Design Philosophy:** Modern, clean, accessible, spiritually inspiring

### Technical Stack
- **Framework:** Next.js 15 (React Server Components + Client Components)
- **Styling:** Tailwind CSS with shadcn/ui components
- **Deployment:** AWS Amplify
- **Database:** Amazon DynamoDB (NoSQL)
- **Storage:** Cloudflare R2

---

## 2. Current Homepage Analysis

### Existing Implementation (`/src/app/page.tsx`)
- Currently a basic welcome page with minimal content
- Simple card layout with navigation buttons
- No product explanation or feature showcase
- Missing PrayerTime section (which exists in `/home`)

### Reference Implementation (`/src/app/home/Home.tsx`)
- Contains a sophisticated PrayerTime widget with:
  - Location-based prayer times (Fajr, Dhuhr, Asr, Maghrib, Isha)
  - Islamic date display
  - Current prayer highlighting
  - Time until next prayer
  - Beautiful card-based UI with mosque imagery
  - Responsive design (mobile-first, desktop optimized)

---

## 3. Product Features & Value Propositions

### Core Features to Highlight on Homepage

#### A. **Courses and Lessons**
Educational content covering:
- **Quran - A Global Message:** Understanding the universal message
- **Tawheed:** Oneness of Allah
- **Salah Course:** Complete prayer education
  - Understanding what you're saying in Salah
  - Translation of Surah Fatiah with Tafseer
  - Translation of last 10 Surahs with Tafsir
  - Translation of readings in Salah
  - Translation of 17 Azkar after Salah
- **History Course on Revelation:**
  - Revelations from God
  - Other books claiming to be from God
  - History of books and their corruption
  - Revealing of Quran in 23 years
  - Compilation of Parchments by Khulafah
  - Maintained Preservation of Quran
- **Scientific Miracles** mentioned in Quran
- **Individual Morals and Ethics** as per Quran
- **One Solution from Quran** for:
  - Corruption in government
  - Failing marriages
  - Obesity
  - Declining moral values

#### B. **Guide My Friend**
- Personalized PDF generation to guide someone to believe in Tawheed
- Inputs: Gender, Age, Profession, Interested Topics
- **Value:** Help others discover the truth of Islam

#### C. **Calendar**
- Important Islamic dates
- 2-day advance reminders
- Advice on what Prophet (PBUH) did on specific days
- Prayer times integration
- **Value:** Stay connected to Islamic calendar and traditions

#### D. **Prayer Times** (MUST INCLUDE)
- Azaan timing
- Jamath timing
- Sunrise and sunset timing
- Advice based on Azkaar and Nafl Prayers based on current time
- Location-based calculation
- **Value:** Never miss a prayer, stay spiritually connected

#### E. **My Hifz**
- Personalized Hafiz journey planning
- Based on: Age, Gender, Profession, Daily Routine, Available Free Time
- **Value:** Structured path to becoming a Hafiz

#### F. **Daily Status**
- Rotating daily inspiration (video/image)
- Admin-curated content related to Quran
- **Value:** Daily motivation and reflection

#### G. **Donate**
Multiple charity options:
- Zakah
- Donate a Quran
- Donate One Plate
- Donate Old Clothes
- Donate Old Books
- **Value:** Fulfill religious obligations and help others

#### H. **Request for Help (Anonymous)**
- Anonymous charity requests
- For books, clothes, food, etc.
- **Value:** Community support and compassion

#### I. **Events Announcement**
- Dental camps, health camps, Fun Quizzes
- Google Form links for participation
- WhatsApp group links
- **Value:** Community engagement and activities

#### J. **Forum**
- Community discussion platform
- **Value:** Learn from others, share knowledge

---

## 4. Design Requirements

### 4.1 Layout Structure

The homepage should follow a logical information hierarchy:

```
┌─────────────────────────────────────────┐
│  Hero Section                           │
│  - Welcome message                      │
│  - Value proposition                    │
│  - Primary CTA                          │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  Prayer Time Section (PROMINENT)        │
│  - Same design as /home                 │
│  - Location-based times                 │
│  - Current prayer highlight             │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  Feature Showcase Grid                   │
│  - Courses                              │
│  - Guide My Friend                      │
│  - My Hifz                              │
│  - Calendar                             │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  Community & Charity Section             │
│  - Donate                               │
│  - Request Help                         │
│  - Events                               │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  Daily Status / Inspiration             │
│  - Rotating content                     │
└─────────────────────────────────────────┘
```

### 4.2 Visual Design Principles

1. **Spiritual Aesthetic:**
   - Use Islamic geometric patterns subtly
   - Incorporate calligraphy-inspired typography for headings
   - Balance modern minimalism with traditional Islamic design elements
   - Use the primary color (#214e45) for CTAs and important elements
   - Use secondary color (#a89462) for accents and highlights

2. **Typography Hierarchy:**
   - **Hero Heading:** Large, bold, inspiring (Inter font)
   - **Section Headings:** Clear, readable (Inter font)
   - **Arabic Text:** Amiri font for any Arabic content
   - **Body Text:** Comfortable reading size, good line height

3. **Component Design:**
   - Use shadcn/ui components (Card, Button, Badge, etc.)
   - Consistent spacing and padding
   - Rounded corners for modern feel
   - Subtle shadows for depth
   - Hover states for interactivity

4. **Color Usage:**
   - **Primary (#214e45):** Buttons, links, important highlights
   - **Secondary (#a89462):** Accents, icons, decorative elements
   - **White (#fff):** Background, card backgrounds
   - **Gray Scale:** Text hierarchy, borders, subtle backgrounds

### 4.3 Responsive Design

- **Mobile First:** Design for mobile, enhance for desktop
- **Breakpoints:** Follow Tailwind defaults (sm, md, lg, xl)
- **Touch Targets:** Minimum 44x44px for interactive elements
- **Readability:** Appropriate font sizes for each breakpoint
- **Grid Layouts:** Responsive columns (1 col mobile → 2-3 cols desktop)

### 4.4 PrayerTime Section Specifications

**MUST replicate the PrayerTime section from `/home` with:**
- Location detection and display
- Islamic date (month and day)
- Gregorian date (full format)
- Next prayer prominently displayed with time
- Time until next prayer badge
- All 5 prayers (Fajr, Dhuhr, Asr, Maghrib, Isha) in grid
- Current prayer highlighted with colored icon filter
- Mosque image decoration
- Loading states
- Error handling with retry option
- Responsive design matching `/home` implementation

**Technical Implementation:**
- Use `"use client"` directive for PrayerTime component
- Import from `@/utils/prayerTimes`
- Use same state management and effects as `/home/Home.tsx`
- Maintain same visual styling and layout

---

## 5. Content Strategy

### 5.1 Hero Section Content

**Headline Options:**
- "Welcome to Quran For All"
- "Your Journey to Understanding the Quran Begins Here"
- "Discover the Universal Message of the Quran"

**Subheadline:**
- "A comprehensive platform for Islamic education, spiritual growth, and community connection"
- "Learn, grow, and connect with the timeless wisdom of the Quran"

**Primary CTA:**
- "Explore Courses" or "Start Learning" → Links to `/courses`
- "Go to Dashboard" → Links to `/home`

### 5.2 Feature Cards Content

Each feature should have:
- **Icon:** Relevant Lucide icon
- **Title:** Clear, benefit-focused
- **Description:** 1-2 sentences explaining value
- **CTA:** "Learn More" or "Get Started" button
- **Visual:** Optional illustration or image

**Example Feature Card:**
```
┌─────────────────────────────┐
│ [Icon]                      │
│                             │
│ Courses & Lessons           │
│                             │
│ Comprehensive Islamic       │
│ education covering Quran,   │
│ Tawheed, Salah, History,    │
│ and more.                   │
│                             │
│ [Explore Courses →]        │
└─────────────────────────────┘
```

### 5.3 Social Proof & Trust Elements

- User testimonials (if available)
- Statistics (e.g., "Join 10,000+ learners")
- Security/privacy badges
- Community highlights

---

## 6. User Experience Flow

### 6.1 First-Time Visitor Journey

1. **Land on Homepage** → See hero, understand value prop
2. **View Prayer Times** → Immediate utility, builds trust
3. **Explore Features** → Understand what's available
4. **Click CTA** → Navigate to specific feature or dashboard

### 6.2 Returning User Journey

1. **Land on Homepage** → Quick access to Prayer Times
2. **Quick Navigation** → Jump to frequently used features
3. **Daily Status** → Get daily inspiration
4. **Announcements** → Stay updated on events

### 6.3 Accessibility Considerations

- **Keyboard Navigation:** All interactive elements accessible via keyboard
- **Screen Readers:** Proper ARIA labels and semantic HTML
- **Color Contrast:** WCAG AA compliance
- **Focus States:** Clear focus indicators
- **Alt Text:** All images have descriptive alt text

---

## 7. Technical Specifications

### 7.1 Component Architecture

```
page.tsx (Server Component)
├── Hero Section (Server Component)
├── PrayerTimeSection (Client Component - "use client")
│   ├── Location detection
│   ├── Prayer times calculation
│   ├── Islamic date
│   └── Current prayer logic
├── FeatureShowcase (Server Component)
│   ├── FeatureCard (Server Component) × N
│   └── Links to respective pages
├── CommunitySection (Server Component)
│   ├── Donate card
│   ├── Request Help card
│   └── Events card
└── DailyStatus (Server Component)
    └── Rotating content display
```

### 7.2 Required Imports & Dependencies

**For PrayerTime Section:**
```typescript
"use client"
import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Clock, MapPin } from "lucide-react"
import Image from "next/image"
import {
  getUserLocation,
  calculatePrayerTimes,
  getCurrentPrayerInfo,
  getIslamicDate,
  timeToMinutes,
  PrayerTimes,
  LocationData,
  CurrentPrayerInfo,
} from "@/utils/prayerTimes"
```

**For Other Sections:**
```typescript
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { [Icons] } from "lucide-react"
```

### 7.3 State Management

- **PrayerTime:** Client-side state (useState, useEffect)
- **Other Sections:** Server-side rendering (no state needed)
- **Loading States:** Show skeletons or spinners during data fetch

### 7.4 Performance Considerations

- **Image Optimization:** Use Next.js Image component
- **Code Splitting:** Lazy load PrayerTime component if needed
- **Caching:** Cache prayer times calculation (5-minute cache)
- **Bundle Size:** Minimize client-side JavaScript

---

## 8. Design Deliverables

### 8.1 Required Deliverables

1. **Visual Design Mockups:**
   - Mobile view (375px width)
   - Tablet view (768px width)
   - Desktop view (1440px width)

2. **Component Specifications:**
   - Exact spacing, padding, margins
   - Typography scales
   - Color usage guide
   - Icon sizes and styles

3. **Interaction States:**
   - Hover states
   - Active states
   - Focus states
   - Loading states
   - Error states

4. **Design System:**
   - Button variants
   - Card styles
   - Badge styles
   - Color palette with usage guidelines

### 8.2 Design Tools Recommendations

- **Figma:** For collaborative design
- **Adobe XD:** Alternative option
- **Design Tokens:** Export as JSON for consistency

---

## 9. Success Metrics

### 9.1 Design Success Criteria

- **Clarity:** Users understand product value within 5 seconds
- **Engagement:** Users interact with PrayerTime section
- **Navigation:** Users can easily find desired features
- **Aesthetics:** Design reflects Islamic values and modern UX
- **Accessibility:** WCAG AA compliance

### 9.2 User Testing Scenarios

1. **First Impression Test:** Can users understand what QFA offers?
2. **Feature Discovery:** Can users find specific features?
3. **PrayerTime Usage:** Do users interact with prayer times?
4. **Navigation Flow:** Can users navigate to desired pages?
5. **Mobile Experience:** Is the mobile experience smooth?

---

## 10. Implementation Guidelines

### 10.1 Code Style

- Follow existing codebase patterns
- Use TypeScript for type safety
- Use Tailwind CSS utility classes
- Follow Next.js 15 best practices
- Use shadcn/ui components consistently

### 10.2 File Structure

```
src/app/page.tsx (Main homepage)
src/components/homepage/
  ├── HeroSection.tsx
  ├── PrayerTimeSection.tsx (Client Component)
  ├── FeatureShowcase.tsx
  ├── FeatureCard.tsx
  ├── CommunitySection.tsx
  └── DailyStatus.tsx
```

### 10.3 Testing Requirements

- **Unit Tests:** Test PrayerTime calculations
- **Integration Tests:** Test navigation flows
- **E2E Tests:** Test complete user journeys
- **Accessibility Tests:** Automated a11y testing

---

## 11. Reference Materials

### 11.1 Existing Code References

- **PrayerTime Implementation:** `/src/app/home/Home.tsx` (lines 339-538)
- **PrayerTime Utilities:** `/src/utils/prayerTimes.ts`
- **Component Library:** `/src/components/ui/`
- **Styling:** Tailwind CSS + shadcn/ui

### 11.2 Design Inspiration

- Modern Islamic educational platforms
- Clean, minimal dashboard designs
- Spiritual/meditation app interfaces
- Educational platform homepages

### 11.3 Brand Assets

- Logo (if available)
- Color palette (#214e45, #a89462, #fff)
- Typography (Inter, Amiri)
- Icons (Lucide React icons)

---

## 12. Timeline & Milestones

### Phase 1: Design
- [ ] Wireframes (mobile, tablet, desktop)
- [ ] Visual mockups
- [ ] Component specifications
- [ ] Design system documentation

### Phase 2: Implementation
- [ ] Hero section
- [ ] PrayerTime section (replicate from /home)
- [ ] Feature showcase
- [ ] Community section
- [ ] Daily status section
- [ ] Responsive optimization

### Phase 3: Testing & Refinement
- [ ] Cross-browser testing
- [ ] Mobile device testing
- [ ] Accessibility audit
- [ ] Performance optimization
- [ ] User feedback integration

---

## 13. Questions for Designer

1. How can we make the homepage feel welcoming and spiritually inspiring?
2. What visual metaphors best represent "Quran for All" (universal message)?
3. How can we balance information density with visual clarity?
4. What animation/motion design would enhance the experience?
5. How can we make the PrayerTime section feel integrated, not just added?
6. What visual hierarchy best guides users to key actions?
7. How can we incorporate Islamic design elements without cluttering?
8. What micro-interactions would delight users?

---

## 14. Final Notes

This homepage is the **first impression** users get after logging in. It should:
- **Inspire** them to engage with Islamic learning
- **Inform** them about available features
- **Guide** them to their next action
- **Connect** them with their spiritual practice (PrayerTime)

The design should feel **modern yet respectful**, **informative yet inspiring**, and **functional yet beautiful**.

Remember: The Quran is for **all mankind**. The design should reflect inclusivity, accessibility, and universal appeal while maintaining Islamic authenticity.

---

**Document Version:** 1.0  
**Last Updated:** February 1, 2026  
**Prepared For:** UI/UX Designer & AI Design Assistant  
**Project:** QFA Homepage Redesign
