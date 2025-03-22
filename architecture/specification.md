# UI Concept: "Skills Cemetery"
Inspired by Heroes of Might and Magic, the interface will resemble an ancient graveyard with a magical fantasy theme, featuring parchment textures, stone-carved frames, gothic fonts, and glowing mystical effects.

# Page Layouts
🏰 Landing Page: "Enter the Cemetery of Lost Skills"
🪦 Background: Dark, misty graveyard with arcane symbols floating in the air.
📜 Main CTA Button: "Submit a Skill to the Grave" (engraved stone-style button)
📜 Live Statistics Counter:

Total Dead Skills: 42 (stone counter with cracks)
Dying Skills: 18 (glowing ember-like numbers)
Resurrected Skills: 6 (green magical revival aura)
🗺 Navigation:

"Tombstones of the Fallen"
"Dying Skills"
"Skills Revived by Magic"
"Submit a Skill"
"Mystic Voting Chamber"
🪦 The Graveyard of Lost Skills
Layout: A scrolling crypt-like design, where each dead skill appears as a tombstone.
Hover Effect: When you hover over a skill, a ghostly whisper reveals a short "obituary".
Example Tombstones:
☠️ "Flash Development (1996-2020) – Once a ruler of web animations, now buried by HTML5 & JavaScript."
☠️ "Manual Software Testing (??-2024) – Killed by AI-driven automation."
Vote Button: "Confirm Its Death" (stone-like, cracks when clicked)
🔥 Dying Skills Section (Vote on Future Deaths)
🧩 Layout: A magical prophecy board (like a medieval prediction scroll) where users vote on which skills are next to die.
💀 Skills Listed with "Life Bar" Effects:

JavaScript: 🟢🟢🟢🟢🟡 (slowly fading…)
Prompt Engineering: 🟢🟢🟡⚫⚫ (AI is absorbing it?)
Project Managers Without AI Knowledge: 🟡🟡🟡⚫⚫ (At risk?)
📜 Vote Button: "Mark for Doom" (fiery animation upon click)
🟢 Resurrected Skills (The Necromancer's Hall)
🔄 Concept: A stone-carved "revival shrine" where skills that were once obsolete but are now relevant again get placed.
⚡ Example:

C++: "Thought to be fading, but AI models crave performance."
Hand-drawn Animations: "Revived thanks to indie gaming and nostalgic aesthetics."
📜 Vote Button: "Bring It Back!" (glowing magical effect)

📝 Submit a Skill (Ancient Scroll Form)
📜 Form elements appear as a medieval scribe's parchment

Skill Name 🏹 (text input)
Why is it dead/dying/resurrected? 📖 (short description)
Category:
☠️ Dying
💀 Dead
🔄 Resurrected
GenAI Impact? (checkbox: "Killed or Reshaped by AI?")
📜 Submit Button: "Carve it into History" (stone etching effect)


# Backend and Functional Specification for "Skills Cemetery" Website

## Tech Stack:
- **Framework**: Next.js (React-based)
- **Styling**: Tailwind CSS, CSS modules, or Styled Components
- **State Management**: React Context API or Zustand
- **Backend API**: Next.js API Routes
- **Database**: Supabase or Firebase
- **Authentication**: NextAuth.js (optional for user-based voting restrictions)

## Database Structure (Supabase/Firebase):

### Collections/Tables:
  - `skills`
    - `id` (UUID)
    - `name` (string)
    - `status` ('dead', 'dying', 'resurrected')
    - `description` (text)
    - `genai_impact` (boolean)
    - `submission_date` (timestamp)
    - `approval_status` ('pending', 'approved', 'rejected')
    - `votes_count` (integer, default: 0)
  - `votes`
    - `id` (UUID)
    - `skill_id` (UUID reference)
    - `vote_type` ('confirm_death', 'mark_for_doom', 'bring_back')
    - `user_id` or `session_id`
    - `timestamp` (timestamp)

## API Routes (Next.js):

### Skills:
- **GET** `/api/skills` — Fetch all skills, filterable by status
- **GET** `/api/skills/[id]` — Fetch details for a specific skill
- **POST** `/api/skills` — Submit a new skill (requires moderation)
  - Payload: `{ name, status, description, genai_impact }`
- **PATCH** `/api/skills/[id]/moderate` — Moderate skill submissions
  - Payload: `{ approval_status: 'approved' | 'rejected' }`

### Votes:
- **POST** `/api/skills/[id]/vote` — Vote for a skill
  - Payload: `{ vote_type: 'confirm_death' | 'mark_for_doom' | 'bring_back' }`

## Moderation Functionality:
- New submissions marked as `pending`
- Moderation through a simple admin interface:
  - View pending skills
  - Approve or reject submissions

## Authentication & Authorization (Optional):
- NextAuth.js for OAuth authentication (Google/GitHub)
- Allow anonymous voting tracked via session identifiers

## Live Statistics (Calculated on Backend/API Layer):
- **Total Dead Skills**: Count of skills (`status='dead'`, `approval_status='approved'`)
- **Dying Skills**: Count of skills (`status='dying'`, `approval_status='approved'`)
- **Resurrected Skills**: Count of skills (`status='resurrected'`, `approval_status='approved'`)

## Functional Specifications:

### Submit Skill Form:
- Inputs:
  - Skill Name (required, max 100 chars)
  - Description (required, max 500 chars)
  - Category (required, select: Dead, Dying, Resurrected)
  - GenAI Impact (checkbox, optional)
- Validations:
  - Unique skill names
  - Mandatory description
- Post-submission:
  - Display: "Submission pending moderator approval."

### Voting System:
- One vote per skill per user/session
- Increment `votes_count` with each valid vote
- Frontend visual feedback upon vote

### Skill Hover Details:
- Fetch and display skill description from `/api/skills/[id]`

## Moderation Interface:
- Admin panel:
  - Approve/Reject submissions
  - View submission details
- Notify moderator on new submissions (optional email integration)

## Deployment & Hosting:
- Vercel recommended for seamless Next.js deployment
- Supabase/Firebase managed hosting for database


