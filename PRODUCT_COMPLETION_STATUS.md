# Quran For All - Product Completion Status & Integration Plan

**Last Updated:** February 1, 2026  
**Project:** Quran For All (QFA)  
**Framework:** NextJS 15  
**Database:** Amazon DynamoDB (No-SQL) - Currently using PostgreSQL in development

---

## Executive Summary

**Overall Completion:** ~45% Complete

### Status Breakdown:

- ✅ **Fully Implemented:** 6 features
- 🟡 **Partially Implemented:** 5 features
- ❌ **Not Implemented:** 4 features

---

## 1. Feature Completion Status

### ✅ FULLY IMPLEMENTED FEATURES

#### 1.1 Prayer Times

**Status:** ✅ Complete  
**Location:** `/src/app/home/Home.tsx`, `/src/components/homepage/PrayerTimeSection.tsx`

**Implemented:**

- ✅ Location-based prayer times calculation (Fajr, Dhuhr, Asr, Maghrib, Isha)
- ✅ Islamic date display
- ✅ Current prayer highlighting
- ✅ Time until next prayer
- ✅ Sunrise and sunset timing
- ✅ Beautiful responsive UI with mosque imagery
- ✅ Location detection with fallback to Mecca

**Missing:**

- ❌ Jamath timing (congregation prayer times)
- ❌ Advice based on Azkaar and Nafl Prayers based on current time
- ❌ Azaan timing display (currently shows prayer times, not azaan)

**Files:**

- `/src/utils/prayerTimes.ts`
- `/src/utils/praytime.js`

---

#### 1.2 My Hifz (Hafiz Journey Planner)

**Status:** ✅ Complete  
**Location:** `/src/app/hifz-planner/`

**Implemented:**

- ✅ Personalized Hafiz journey planning
- ✅ Input collection: Age, Gender, Profession, Daily Routine, Available Free Time
- ✅ Memory rating assessment
- ✅ Current Hifz status tracking
- ✅ Schedule input forms for different professions (Student, Employee, Housewife, Retired, Unemployed)
- ✅ Plan generation with timeline calculation
- ✅ PDF generation and download
- ✅ Shareable plan links
- ✅ Progress tracking integration (`/hifz-tracking`)

**Files:**

- `/src/app/hifz-planner/components/HifzPlannerClient.tsx`
- `/src/app/hifz-planner/utils/generatePlan.ts`
- `/src/app/hifz-planner/utils/pdfGenerator.ts`
- `/src/app/hifz-tracking/` (Progress tracking)

---

#### 1.3 Courses and Lessons

**Status:** 🟡 Partially Complete (40% of required courses)

**Implemented Courses:**

- ✅ **Salah Course** - 6 lessons complete
  - Preparation for Prayer
  - Prayer Steps (Part 1 & 2)
  - Post-Prayer Adhkar
  - Achieving Khushu
  - Common Mistakes to Avoid
- ✅ **Imaan/Faith Course** - 8 lessons + 1 task complete
  - Understanding God's Existence
  - Philosophical Understanding
  - Understanding God's Oneness
  - Why We Need Divine Guidance
  - Journey of Comparative Religions
  - Messenger to deliver Divine Guidance
  - Why the Quran is Divine Revelation
  - Science and the Quran
- ✅ **Miracles Course** - 12 lessons complete
  - Astronomy, Biology, Chemistry, Cosmology, Embryology, Geology, History, Mathematics, Meteorology, Physics, Physiology, Zoology

**Missing Courses:**

- ❌ **Quran - A Global Message** (Not implemented)
- ❌ **Tawheed Course** (Not implemented)
- ❌ **History Course on Revelation** (Structure exists, no content)
  - ❌ Revelations from God
  - ❌ Other books claiming to be from God
  - ❌ History of books and their corruption
  - ❌ Revealing of Quran in 23 years
  - ❌ Compilation of Parchments by Khulafah
  - ❌ Maintained Preservation of Quran
- ❌ **Individual Morals and Ethics** (Structure exists, no content)
- ❌ **One Solution from Quran** (Not implemented)
  - ❌ Corruption in government
  - ❌ Failing Marriages
  - ❌ Obesity
  - ❌ Declining Moral Values
- ❌ **Arabic Course** (Structure exists, no content)
- ❌ **Azkaar Course** (Structure exists, no content)

**Missing Salah Course Content:**

- ❌ Translation of last 10 Surahs with Tafsir
- ❌ Translation of 17 Azkar after Salah

**Files:**

- `/src/utils/courses.ts`
- `/src/app/courses/[id]/CourseDetails.tsx`
- `/src/app/components/courses/` (Lesson components)

---

#### 1.4 Donate

**Status:** ✅ Complete (UI & Forms)  
**Location:** `/src/app/charity/`

**Implemented:**

- ✅ Donation form with multiple types:
  - ✅ Zakah
  - ✅ Donate a Quran
  - ✅ Donate One Plate
  - ✅ Donate Old Clothes
  - ✅ Donate Old Books
  - ✅ Custom Donation
- ✅ Anonymous donation option
- ✅ Beautiful UI with donation type selection
- ✅ API endpoints for donation submission

**Note:** Database integration appears to be disabled (service throws errors). Needs DynamoDB integration.

**Files:**

- `/src/app/charity/donate/page.tsx`
- `/src/app/components/charity/DonationForm.tsx`
- `/src/app/api/charity/donations/route.ts`
- `/src/services/charityService.ts`

---

#### 1.5 Request for Help (Anonymous)

**Status:** ✅ Complete (UI & Forms)  
**Location:** `/src/app/charity/request-help/`

**Implemented:**

- ✅ Anonymous help request form
- ✅ Multiple request types (books, clothes, food, education, medical, shelter, other)
- ✅ Urgency levels
- ✅ Contact information (optional for anonymous)
- ✅ Location and delivery preferences
- ✅ API endpoints for submission

**Note:** Database integration appears to be disabled (service throws errors). Needs DynamoDB integration.

**Files:**

- `/src/app/charity/request-help/page.tsx`
- `/src/app/components/charity/HelpRequestForm.tsx`
- `/src/app/api/charity/help-requests/route.ts`

---

#### 1.6 Authentication & User Management

**Status:** ✅ Complete  
**Location:** `/src/auth.ts`, `/src/app/auth/`

**Implemented:**

- ✅ NextAuth.js integration
- ✅ Email/password authentication
- ✅ Google OAuth
- ✅ GitHub OAuth
- ✅ User signup and login
- ✅ Protected routes middleware
- ✅ Session management

**Files:**

- `/src/auth.ts`
- `/src/app/auth/login/`
- `/src/app/auth/signup/`
- `/src/middleware.ts`

---

### 🟡 PARTIALLY IMPLEMENTED FEATURES

#### 2.1 Calendar

**Status:** 🟡 Partially Complete (60%)  
**Location:** `/src/app/calendar/`

**Implemented:**

- ✅ Calendar UI with Islamic dates
- ✅ Gregorian to Hijri date conversion
- ✅ Special Islamic dates highlighting
- ✅ Integration with Al-Adhan API for Islamic calendar
- ✅ Week view with prayer times

**Missing:**

- ❌ 2-day advance reminders for important dates
- ❌ Advice on what Prophet (PBUH) did on specific days
- ❌ Notification system for reminders
- ❌ Email/push notification for reminders

**Files:**

- `/src/app/calendar/Calendar.tsx`
- `/src/utils/hijriToGregorian.ts`

---

#### 2.2 Daily Status

**Status:** 🟡 Partially Complete (30%)  
**Location:** `/src/app/home/Home.tsx`

**Implemented:**

- ✅ UI component displaying "Today's Status"
- ✅ Download button
- ✅ Card display with image/video placeholder
- ✅ Responsive design (mobile carousel, desktop grid)

**Missing:**

- ❌ Admin interface to upload/manage daily content
- ❌ Database storage for daily status content
- ❌ Rotation logic (daily content change)
- ❌ Video/image upload functionality
- ❌ Content management system
- ❌ Currently shows hardcoded content

**Files:**

- `/src/app/home/Home.tsx` (lines 211-244, 291-318)

---

#### 2.3 Guide My Friend

**Status:** 🟡 Partially Complete (40%)  
**Location:** `/src/app/guide/`

**Implemented:**

- ✅ Guide page UI with topics
- ✅ Links to various features
- ✅ Tips and guidance sections
- ✅ Beautiful responsive design

**Missing:**

- ❌ PDF generation for personalized Tawheed guide
- ❌ Form to collect: Gender, Age, Profession, Interested Topics
- ❌ Content generation logic based on inputs
- ❌ Personalized PDF creation (similar to Hifz planner PDF)
- ❌ Currently just a landing page with links

**Note:** PDF generation exists for Hifz planner (`/src/app/hifz-planner/utils/pdfGenerator.ts`) - can be adapted.

**Files:**

- `/src/app/guide/page.tsx`

---

#### 2.4 Course Progress Tracking

**Status:** 🟡 Partially Complete (70%)  
**Location:** `/src/app/api/courses/progress/`

**Implemented:**

- ✅ API endpoints for course progress
- ✅ Lesson completion tracking
- ✅ Task completion tracking
- ✅ Progress hooks (`useCourseProgress`)

**Missing:**

- ❌ Visual progress indicators on course cards
- ❌ Progress statistics dashboard
- ❌ Completion certificates
- ❌ Progress reports

**Files:**

- `/src/app/api/courses/progress/route.ts`
- `/src/hooks/useCourseProgress.ts`

---

#### 2.5 Todos System

**Status:** 🟡 Partially Complete (80%)  
**Location:** `/src/app/home/`, `/src/app/api/todos/`

**Implemented:**

- ✅ Todo creation and management
- ✅ Database integration (PostgreSQL)
- ✅ Suggested todos system
- ✅ Todo actions (complete, archive, mark missed)
- ✅ Todo statistics
- ✅ Admin suggested todos management

**Missing:**

- ❌ DynamoDB migration (currently PostgreSQL)
- ❌ Todo categories fully implemented
- ❌ Recurring todos logic

**Files:**

- `/src/app/home/Home.tsx`
- `/src/app/api/todos/`
- `/src/services/todoService.ts`

---

### ❌ NOT IMPLEMENTED FEATURES

#### 3.1 Admin Portal

**Status:** ❌ Not Implemented  
**Required Domain:** `admin.quranforall.in`

**Missing:**

- ❌ Admin authentication and authorization
- ❌ Admin dashboard
- ❌ Daily Status content management
- ❌ Course content management
- ❌ User management
- ❌ Donation/Help request management
- ❌ Analytics dashboard
- ❌ Suggested todos management (API exists but no UI)
- ❌ Events announcement management

**Note:** Basic admin API exists (`/src/app/api/admin/suggested-todos/`) but no admin UI portal.

---

#### 3.2 Events Announcement

**Status:** ❌ Not Implemented

**Missing:**

- ❌ Events listing page
- ❌ Event creation/management interface
- ❌ Google Form links integration
- ❌ WhatsApp group links
- ❌ Event categories (Dental camp, Health camp, Fun Quizzes)
- ❌ Event registration system
- ❌ Event calendar integration
- ❌ Notification system for events

**Note:** UI placeholder exists in Home.tsx (Announcement card) but no functionality.

---

#### 3.3 Forum

**Status:** ❌ Not Implemented

**Missing:**

- ❌ Forum structure and categories
- ❌ Post creation and management
- ❌ Comment system
- ❌ User profiles in forum
- ❌ Moderation tools
- ❌ Search functionality
- ❌ Threading and replies
- ❌ Upvoting/liking system

---

#### 3.4 Additional Prayer Times Features

**Status:** ❌ Not Implemented

**Missing:**

- ❌ Jamath timing (congregation prayer times)
- ❌ Advice based on Azkaar and Nafl Prayers based on current time
- ❌ Azaan timing display (separate from prayer times)

---

## 2. Technical Infrastructure Status

### ✅ Implemented

- ✅ NextJS 15 setup
- ✅ TypeScript configuration
- ✅ Tailwind CSS styling
- ✅ shadcn/ui components
- ✅ NextAuth.js authentication
- ✅ API routes structure
- ✅ Responsive design
- ✅ Image optimization (Next.js Image)

### 🟡 Partially Implemented

- 🟡 Database (PostgreSQL in dev, needs DynamoDB migration)
- 🟡 File storage (needs Cloudflare R2 integration)
- 🟡 Deployment setup (needs AWS Amplify configuration)

### ❌ Not Implemented

- ❌ DynamoDB integration
- ❌ Cloudflare R2 storage integration
- ❌ AWS Amplify deployment configuration
- ❌ Domain configuration (quranforall.in, admin.quranforall.in)
- ❌ Email service integration
- ❌ Push notification service
- ❌ Analytics integration

---

## 3. Integration Plan for Pending Items

### Phase 1: Critical Missing Features (Priority: HIGH)

#### 3.1 Admin Portal Development

**Estimated Time:** 3-4 weeks

**Tasks:**

1. **Admin Authentication**
   - Create admin role in user model
   - Admin login page (`/admin/login`)
   - Admin middleware for route protection
   - Admin session management

2. **Admin Dashboard**
   - Overview statistics (users, donations, help requests, course completions)
   - Quick actions panel
   - Recent activity feed
   - File: `/src/app/admin/dashboard/page.tsx`

3. **Daily Status Management**
   - Upload interface for images/videos
   - Content scheduling (set dates for content)
   - Content library management
   - Preview functionality
   - File: `/src/app/admin/daily-status/page.tsx`
   - API: `/src/app/api/admin/daily-status/route.ts`

4. **Course Content Management**
   - Course creation/editing interface
   - Lesson content editor (rich text/markdown)
   - Media upload for lessons
   - Course publishing workflow
   - File: `/src/app/admin/courses/page.tsx`

5. **User Management**
   - User list with filters
   - User details view
   - User role management
   - User activity logs

6. **Donation/Help Request Management**
   - View all donations
   - View all help requests
   - Status management (pending, fulfilled, etc.)
   - Export functionality

**Database Schema Additions:**

```typescript
// Admin model
Admin {
  id: string
  userId: string
  permissions: string[] // ['daily_status', 'courses', 'users', etc.]
  createdAt: DateTime
}

// DailyStatus model
DailyStatus {
  id: string
  date: DateTime
  title: string
  description: string
  mediaType: 'image' | 'video'
  mediaUrl: string
  isActive: boolean
  createdAt: DateTime
  createdBy: string // adminId
}
```

---

#### 3.2 Guide My Friend PDF Generation

**Estimated Time:** 1-2 weeks

**Tasks:**

1. **Form Creation**
   - Create form component for inputs:
     - Gender (dropdown)
     - Age (number input)
     - Profession (dropdown/autocomplete)
     - Interested Topics (multi-select)
   - Form validation
   - File: `/src/app/guide/form/page.tsx`

2. **Content Generation Logic**
   - Create content templates based on inputs
   - Personalization logic
   - Tawheed-focused content selection
   - File: `/src/app/guide/utils/generateGuideContent.ts`

3. **PDF Generation**
   - Adapt existing PDF generator from Hifz planner
   - Create PDF template for guide
   - Include personalized content
   - File: `/src/app/guide/utils/pdfGenerator.ts`

4. **API Endpoint**
   - POST endpoint to generate guide
   - Store generation history (optional)
   - File: `/src/app/api/guide/generate/route.ts`

**Implementation Steps:**

1. Create form component
2. Build content generation logic with templates
3. Integrate PDF generation
4. Add download/share functionality
5. Test with various input combinations

---

#### 3.3 Calendar Enhancements

**Estimated Time:** 2 weeks

**Tasks:**

1. **Reminder System**
   - Database schema for reminders
   - 2-day advance calculation logic
   - Notification scheduling
   - File: `/src/utils/calendarReminders.ts`

2. **Prophet's Advice Integration**
   - Database/content storage for Prophet's actions on specific dates
   - API to fetch advice for date
   - Display component in calendar
   - File: `/src/app/api/calendar/advice/[date]/route.ts`

3. **Notification System**
   - Email notifications (using service like SendGrid/Resend)
   - Push notifications (optional)
   - In-app notifications
   - File: `/src/services/notificationService.ts`

**Database Schema:**

```typescript
// IslamicEvent model
IslamicEvent {
  id: string
  hijriDate: string // "10 Muharram"
  gregorianDate: DateTime
  name: string
  description: string
  prophetsAdvice: string
  reminderDays: number // default 2
}

// UserReminder model
UserReminder {
  id: string
  userId: string
  eventId: string
  reminderDate: DateTime
  notified: boolean
  notificationMethod: 'email' | 'push' | 'in-app'
}
```

---

#### 3.4 Prayer Times Enhancements

**Estimated Time:** 1 week

**Tasks:**

1. **Jamath Timing**
   - Add jamath timing calculation (typically 10-15 minutes after prayer time)
   - Display in prayer times widget
   - Configurable offset per mosque/location
   - File: `/src/utils/prayerTimes.ts` (enhance existing)

2. **Azkaar/Nafl Advice**
   - Create advice database/content
   - Logic to determine current time period
   - Display relevant advice based on time
   - File: `/src/app/api/prayer-times/advice/route.ts`

3. **Azaan Timing Display**
   - Separate azaan timing from prayer timing
   - Display both in UI
   - File: Update `/src/components/homepage/PrayerTimeSection.tsx`

**Content Structure:**

```typescript
// PrayerAdvice model
PrayerAdvice {
  id: string
  timePeriod: 'fajr' | 'dhuhr' | 'asr' | 'maghrib' | 'isha' | 'night' | 'morning'
  azkaar: string[]
  naflPrayers: string[]
  advice: string
}
```

---

### Phase 2: Content Completion (Priority: MEDIUM)

#### 3.5 Missing Course Content

**Estimated Time:** 4-6 weeks (content creation)

**Tasks:**

1. **Quran - A Global Message Course**
   - Create course structure
   - Develop lessons (5-8 lessons)
   - Add to courses list
   - File: `/src/app/components/courses/GlobalMessage/`

2. **Tawheed Course**
   - Create course structure
   - Develop lessons on Oneness of Allah
   - Add to courses list
   - File: `/src/app/components/courses/Tawheed/`

3. **History Course Content**
   - Complete all 6 required topics
   - Create lesson components
   - Add content to existing structure
   - File: `/src/app/components/courses/History/`

4. **Ethics Course Content**
   - Create course structure
   - Develop lessons on Prophet's ethics
   - Add to courses list
   - File: `/src/app/components/courses/Ethics/`

5. **One Solution from Quran Course**
   - Create 4 lessons (corruption, marriages, obesity, moral values)
   - Develop content for each topic
   - File: `/src/app/components/courses/Solutions/`

6. **Arabic Course Content**
   - Create course structure
   - Develop lessons on Arabic language basics
   - Reading Quran lessons
   - File: `/src/app/components/courses/Arabic/`

7. **Azkaar Course Content**
   - Create course structure
   - Develop lessons on 17 Azkar after Salah
   - Translation and meaning
   - File: `/src/app/components/courses/Azkaar/`

8. **Salah Course Enhancements**
   - Add detailed translations
   - Surah Fatiah with Tafseer
   - Last 10 Surahs with Tafsir
   - Readings in Salah translations
   - 17 Azkar translations

**Implementation:**

- Follow existing course structure pattern
- Use same component structure as Salah/Imaan courses
- Add to `/src/utils/courses.ts`

---

#### 3.6 Events Announcement System

**Estimated Time:** 2-3 weeks

**Tasks:**

1. **Database Schema**

   ```typescript
   // Event model
   Event {
     id: string
     title: string
     description: string
     category: 'dental_camp' | 'health_camp' | 'quiz' | 'other'
     startDate: DateTime
     endDate: DateTime
     location: string
     googleFormLink: string
     whatsappGroupLink: string
     imageUrl: string
     isActive: boolean
     createdAt: DateTime
     createdBy: string // adminId
   }
   ```

2. **Admin Interface**
   - Event creation form
   - Event list with filters
   - Event editing
   - Event publishing/unpublishing
   - File: `/src/app/admin/events/page.tsx`

3. **Public Interface**
   - Events listing page
   - Event detail page
   - Registration via Google Forms
   - WhatsApp group join links
   - File: `/src/app/events/page.tsx`

4. **Homepage Integration**
   - Replace placeholder announcement card
   - Show upcoming events
   - Link to events page
   - File: Update `/src/app/home/Home.tsx`

5. **API Endpoints**
   - GET `/api/events` - List all active events
   - GET `/api/events/[id]` - Get event details
   - POST `/api/admin/events` - Create event (admin only)
   - PATCH `/api/admin/events/[id]` - Update event (admin only)
   - DELETE `/api/admin/events/[id]` - Delete event (admin only)

---

### Phase 3: Community Features (Priority: LOW)

#### 3.7 Forum Implementation

**Estimated Time:** 4-5 weeks

**Tasks:**

1. **Database Schema**

   ```typescript
   // ForumCategory model
   ForumCategory {
     id: string
     name: string
     description: string
     slug: string
     order: number
   }

   // ForumPost model
   ForumPost {
     id: string
     title: string
     content: string
     categoryId: string
     authorId: string
     views: number
     likes: number
     isPinned: boolean
     isLocked: boolean
     createdAt: DateTime
     updatedAt: DateTime
   }

   // ForumComment model
   ForumComment {
     id: string
     postId: string
     authorId: string
     content: string
     parentId: string // for replies
     likes: number
     createdAt: DateTime
     updatedAt: DateTime
   }
   ```

2. **Forum Structure**
   - Category listing page
   - Post listing page
   - Post detail page with comments
   - Create post page
   - File: `/src/app/forum/`

3. **Features**
   - Post creation (rich text editor)
   - Comment system with threading
   - Like/upvote system
   - Search functionality
   - User profiles in forum
   - Moderation tools (admin)

4. **UI Components**
   - Post card component
   - Comment thread component
   - Rich text editor
   - Search bar
   - Category sidebar

---

### Phase 4: Infrastructure & Deployment (Priority: HIGH)

#### 3.8 DynamoDB Migration

**Estimated Time:** 2-3 weeks

**Tasks:**

1. **Setup DynamoDB**
   - Create tables for all models
   - Set up indexes
   - Configure IAM roles

2. **Migration Scripts**
   - Create migration utilities
   - Data migration from PostgreSQL
   - Testing

3. **Update Services**
   - Replace Prisma with DynamoDB client
   - Update all service files
   - Update API routes

4. **Models to Migrate:**
   - User
   - Todo
   - CourseProgress
   - HifzProgress
   - Donation
   - HelpRequest
   - DailyStatus (new)
   - Event (new)
   - ForumPost (new)
   - ForumComment (new)

**Files to Update:**

- `/src/services/todoService.ts`
- `/src/services/charityService.ts`
- `/src/services/hifzProgressService.ts`
- `/src/app/api/**/route.ts` (all API routes)

---

#### 3.9 Cloudflare R2 Integration

**Estimated Time:** 1 week

**Tasks:**

1. **Setup Cloudflare R2**
   - Create bucket
   - Configure CORS
   - Set up access keys

2. **File Upload Service**
   - Create upload utility
   - Handle images/videos
   - Generate public URLs
   - File: `/src/services/storageService.ts`

3. **Integration Points**
   - Daily Status media uploads
   - Course lesson media
   - Event images
   - User avatars (if needed)
   - Forum attachments

---

#### 3.10 AWS Amplify Deployment

**Estimated Time:** 1-2 weeks

**Tasks:**

1. **Amplify Configuration**
   - Create Amplify app
   - Configure build settings
   - Set up environment variables
   - Configure custom domains

2. **Domain Setup**
   - Configure `quranforall.in` (public portal)
   - Configure `admin.quranforall.in` (admin portal)
   - SSL certificates
   - DNS configuration

3. **CI/CD Pipeline**
   - GitHub Actions or Amplify CI/CD
   - Automated deployments
   - Environment management (dev/staging/prod)

4. **Monitoring & Analytics**
   - Set up error tracking
   - Performance monitoring
   - User analytics

---

## 4. Priority Roadmap

### Q1 2026 (Weeks 1-12)

1. **Week 1-4:** Admin Portal Development
2. **Week 5-6:** Guide My Friend PDF Generation
3. **Week 7-8:** Calendar Enhancements
4. **Week 9:** Prayer Times Enhancements
5. **Week 10-12:** DynamoDB Migration

### Q2 2026 (Weeks 13-24)

1. **Week 13-18:** Missing Course Content Creation
2. **Week 19-21:** Events Announcement System
3. **Week 22-24:** Cloudflare R2 & AWS Amplify Setup

### Q3 2026 (Weeks 25-36)

1. **Week 25-30:** Forum Implementation
2. **Week 31-36:** Testing, Bug Fixes, Polish

---

## 5. Dependencies & Prerequisites

### External Services Needed:

1. **AWS DynamoDB** - Database
2. **Cloudflare R2** - File storage
3. **AWS Amplify** - Hosting
4. **Email Service** (SendGrid/Resend) - Notifications
5. **Domain Provider** (GoDaddy) - Domain management

### Environment Variables Required:

```env
# Database
DYNAMODB_REGION=us-east-1
DYNAMODB_ACCESS_KEY_ID=xxx
DYNAMODB_SECRET_ACCESS_KEY=xxx

# Storage
CLOUDFLARE_R2_ACCOUNT_ID=xxx
CLOUDFLARE_R2_ACCESS_KEY_ID=xxx
CLOUDFLARE_R2_SECRET_ACCESS_KEY=xxx
CLOUDFLARE_R2_BUCKET_NAME=qfa-media

# Email
EMAIL_SERVICE_API_KEY=xxx
EMAIL_FROM=noreply@quranforall.in

# Domains
PUBLIC_DOMAIN=quranforall.in
ADMIN_DOMAIN=admin.quranforall.in
```

---

## 6. Notes & Considerations

### Current Architecture:

- Using PostgreSQL in development (needs migration)
- Prisma ORM (needs replacement with DynamoDB client)
- NextAuth.js for authentication (compatible with DynamoDB)
- Server-side rendering with Next.js 15

### Key Decisions Needed:

1. **DynamoDB Schema Design** - Single table vs multi-table approach
2. **File Upload Strategy** - Direct upload vs presigned URLs
3. **Admin Portal Access** - Separate domain vs subdomain routing
4. **Forum Moderation** - Automated vs manual moderation
5. **Content Management** - Headless CMS vs custom admin

### Technical Debt:

- Charity service has database disabled (throws errors)
- Some hardcoded content needs database storage
- Missing error boundaries
- No comprehensive testing suite
- No API documentation

---

## 7. Success Metrics

### Feature Completion:

- [ ] Admin Portal: 0% → 100%
- [ ] Guide My Friend: 40% → 100%
- [ ] Calendar: 60% → 100%
- [ ] Prayer Times: 85% → 100%
- [ ] Courses: 40% → 100%
- [ ] Events: 0% → 100%
- [ ] Forum: 0% → 100%

### Infrastructure:

- [ ] DynamoDB Migration: 0% → 100%
- [ ] Cloudflare R2: 0% → 100%
- [ ] AWS Amplify: 0% → 100%
- [ ] Domain Setup: 0% → 100%

---

**Document Status:** Draft v1.0  
**Next Review:** After Phase 1 completion
