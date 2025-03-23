## AI Implementation Specification: Cemetery of Lost Skills UI

### Overview
Create a web-based UI called "Cemetery of Lost Skills," a thematic portal tracking obsolete, dying, and resurrected skills impacted by Generative AI.

### Visual and Layout Details
- **Theme**: Dark, mysterious, gothic-inspired aesthetic.
- **Font Style**: Serif-style gothic font for the main title, readable sans-serif for body text.
- **Primary Colors**:
  - Background: Dark charcoal (#16141a)
  - Text: Pale cream (#fdf6e3)
  - Accent Colors:
    - Dead skills: Gray (#9e9e9e)
    - Dying skills: Orange (#ff8c00)
    - Resurrected skills: Neon Green (#00ff80)
- **Layout**:
  - Centralized main title: "Cemetery of Lost Skills"
  - Descriptive subtitle with explanatory text below.
  - Skill statistics dashboard prominently displaying:
    - Total Dead Skills
    - Dying Skills
    - Resurrected Skills
  - Each skill status displayed within bordered cards with subtle rounded corners and shadow.

### Interactive Components
- **Navigation**: Top horizontal menu
  - "Tombstones" – view past skills
  - "Dying Skills" – view skills becoming obsolete
  - "Revived Skills" – view resurrected skills
  - "Submit" – form to submit new skills
  - "Voting" – interactively vote on skills

- **Buttons and Actions**:
  - Main call-to-action button: "Submit a Skill to the Grave" (centered, rounded corners, gray background, interactive hover animation)

- **Card Components**:
  - **Tombstones of the Fallen**: display list view with historical information
  - **Dying Skills**: detailed page listing technologies considered at risk
  - **Skills Revived by Magic**: showcase of skills experiencing a comeback
  - **Submit a Skill**: form allowing users to suggest skills for inclusion, with validation for input fields

**Form Submission Page: "Submit a Skill"**

Visual and Layout Details

Theme: Consistent dark gothic background with parchment-style scroll for the form.

Form Background: Antique parchment (#e5c6b4)

Form Text: Dark brown (#5c4033)

Input Fields Background: Light cream (#fffbea)

Button: Dark stone-gray background (#606060) with interactive hover effect.

Form Elements

Title: "Ancient Scroll of Submission" (stylized, antique font)

Fields:

Skill Name (single-line text input, placeholder: "e.g. Flash Development")

Why is it dead/dying/resurrected? (multi-line textarea, placeholder: "Share the tale of its demise or resurrection...")

Category (dropdown select, placeholder: "~ Select category ~")

Checkbox: "Killed or Reshaped by AI?" (optional)

Button and Action

Submit Button: "Carve it into History" (centered, rounded corners)

Interactive animation: Button slightly enlarges upon hover.

Form Validation

Ensure required fields are clearly marked and validated before submission.

Display friendly error messages near the fields when validation fails.

Backend Integration

Secure form submission endpoint via API.

Input sanitization and validation on the backend.

Moderation workflow for submitted entries.

Store submissions with fields: Skill Name, Description, Category, AI Impacted (boolean).

Responsiveness

Ensure form layout adapts clearly for mobile and tablet devices, stacking inputs vertically with clear spacing.

Accessibility

Include ARIA labels and proper input labeling for screen readers.

High contrast and clear focus states for inputs and button interactions.

Technologies Recommended

Frontend: React.js with Tailwind CSS for styling and forms handling.

Backend: REST API endpoint to accept JSON-formatted submissions.

Acceptance Criteria

Matches visual style and functionality shown in the screenshot.

Interactive form elements function as expected, including dropdown and checkbox.

Robust input validation and backend integration for secure and moderated data storage.

**Dying Skills Subpage**

Visual and Layout Details

Theme: Consistent dark gothic background.

Title: "Dying Skills" (stylized gothic serif)

Subtitle: Descriptive text encouraging user interaction and voting to hasten skills' demise.

Skill Cards:

Background: Dark charcoal (#28232f)

Borders: Subtle rounded corners

Text: Pale cream (#fdf6e3)

Status Badge: "Dying" in muted orange

Skill Card Elements

Skill Name: Prominent placement in a clear, readable font.

Status: Small oval-shaped badge clearly indicating "Dying" status.

Popularity/Status Indicator: Visual dots (green active, gray inactive) to represent current relevance level (0-5 scale).

Description: Brief explanation why the skill is dying.

Interactive Button: "Mark for Doom" in dark red (#8b0000) with hover animation enhancing user interaction.

Interactivity

Users can vote skills closer to doom, dynamically influencing their status.

Voting action reflects immediately, updating the visual indicators.

Backend Integration

Dynamically load skill details and voting status from the backend via API.

API for handling voting updates securely.

Animations and Transitions

Hover effects to highlight interactive elements.

Smooth transitions for voting actions and page navigation.

Responsiveness

Adaptive layout: two-column grid on desktop/tablet, single-column stacking on mobile devices.

### Animations and Transitions
- Subtle fade-in transitions when loading content.
- Hover effects for interactive elements, slightly enlarging buttons/cards.

### Backend and Data Handling
- Integration with a lightweight backend (e.g., Node.js/Express or Flask API) to:
  - Fetch skill data dynamically (JSON structured: skill name, status, description).
  - Update counts and lists based on backend data.
  - Accept form submissions securely and store for moderation.

### Responsiveness
- Fully responsive across desktop, tablet, and mobile.
- Adapt layout gracefully, stacking elements vertically on smaller screens.

### Accessibility
- Ensure ARIA labels for interactive elements.
- High contrast text for readability.

### Technologies Recommended
- Frontend: React.js with Tailwind CSS
- Backend: Node.js (Express) or Python (Flask)
- Database: Lightweight NoSQL solution (MongoDB, Firebase)

### AI Assistant Integration
- Clearly structured code prompts for GitHub Copilot/Cursor.ai, focusing on:
  - Component modularity
  - Clean React components structure
  - Tailwind CSS classes precisely matching the provided colors and layout

### Acceptance Criteria
- Matches visual style and layout of provided screenshot
- Functionally interactive, displaying and updating skill statuses correctly
- Responsive, accessible, and performant across devices and screen sizes.

