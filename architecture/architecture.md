# Backend and Functional Specification for "Skills Cemetery" Website

## Overview
The "Skills Cemetery" is a fantasy-themed Next.js web application designed to visualize the lifecycle of technical skills in an engaging, interactive graveyard interface. The platform features user interactions such as skill submissions, voting mechanisms, and dynamic statistics, all enhanced by CSS animations and thematic styling.

## Tech Stack
- **Framework**: Next.js (React-based, SSR, and Static Generation)
- **Styling**: Tailwind CSS, CSS modules, or Styled Components
- **State Management**: React Context API or Zustand
- **Backend API**: Next.js API Routes
- **Database**: Supabase or Firebase
- **Authentication**: NextAuth.js (optional, OAuth-based)

## Folder Structure
```
/skills-cemetery
 ├── /public (static assets: images, icons, fonts)
 ├── /components (reusable UI components)
 │   ├── Navbar
 │   ├── Tombstone
 │   ├── VotePanel
 │   ├── SkillSubmissionForm
 │   ├── StatisticsCounter
 ├── /pages (Next.js routes)
 │   ├── index.js (Landing page)
 │   ├── graveyard.js (List of dead skills)
 │   ├── dying.js (Voting page for dying skills)
 │   ├── resurrected.js (Community-revived skills)
 │   ├── submit.js (New skill submission page)
 │   ├── /api (API routes)
 ├── /styles (global/component-specific styles)
 ├── /utils (utility functions/constants)
 ├── next.config.js (Next.js config)
 ├── package.json (dependencies/scripts)
 ├── tailwind.config.js (Tailwind CSS config)
 ├── .env.local (environment variables)
```

## Database Structure (Supabase/Firebase)

### Collections/Tables
- **skills**
  - `id` (UUID)
  - `name` (string)
  - `status` ('dead', 'dying', 'resurrected')
  - `description` (text)
  - `genai_impact` (boolean)
  - `submission_date` (timestamp)
  - `approval_status` ('pending', 'approved', 'rejected')
  - `votes_count` (integer, default: 0)
- **votes**
  - `id` (UUID)
  - `skill_id` (UUID reference)
  - `vote_type` ('confirm_death', 'mark_for_doom', 'bring_back')
  - `user_id` or `session_id`
  - `timestamp` (timestamp)

## API Routes (Next.js)

### Skills
- `GET /api/skills` - Fetch skills (filter by status)
- `GET /api/skills/[id]` - Fetch skill details
- `POST /api/skills` - Submit a new skill (moderated)
- `PATCH /api/skills/[id]/moderate` - Moderate skill submissions

### Votes
- `POST /api/skills/[id]/vote` - Vote on a skill

### Statistics
- `GET /api/statistics` - Retrieve live statistics

## Functional Specifications

### Submit Skill Form
- **Inputs:**
  - Skill Name (required, max 100 chars)
  - Description (required, max 500 chars)
  - Category (required: Dead, Dying, Resurrected)
  - GenAI Impact (checkbox, optional)
- **Validation:**
  - Unique skill names
  - Description mandatory
- **Post-submission:** Display moderation pending message

### Voting System
- Single vote per skill per session/user
- Increment `votes_count` on valid votes
- Visual feedback via frontend animations

### Skill Hover Details
- Fetch description dynamically (`/api/skills/[id]`)

### Moderation Interface
- Approve/reject submissions
- View submission details
- Moderator notifications (optional)

## Authentication & Authorization (Optional)
- OAuth via NextAuth.js (Google/GitHub)
- Anonymous voting via session tracking

## Deployment & Hosting
- Frontend/API hosted on Vercel
- Database hosting via Supabase or Firebase 