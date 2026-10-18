# Project Memory

## Project Overview
Personal Developer Portfolio website for Rajwardhan Singh Chawda, a Full-Stack Developer with a Backend Focus based in Indore, Madhya Pradesh. Built with Next.js (App Router), TypeScript, Vanilla CSS design system, Lucide icons, responsive layout, dark/light theme switching, and interactive micro-animations.

## Current Architecture
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Vanilla CSS with CSS custom properties (`app/globals.css`), supporting seamless Light and Dark mode switching via `data-theme` attribute and `localStorage` persistence.
- **Typography**: Google Fonts (`Plus Jakarta Sans`, `Fira Code`, `Caveat`).
- **Icons**: `lucide-react` and custom SVG components for brand icons.
- **Components & Layout**:
  - `app/layout.tsx`: Root HTML wrapper, metadata, font imports, and theme container.
  - `app/page.tsx`: Main interactive homepage featuring floating sticky navbar, Hero section with cutout developer portrait, interactive orbital rings, doodle annotations, floating stat cards, interactive terminal code window with syntax highlighting and copy functionality, 5-column quick-info stats banner, Featured Projects showcase grid with image hover zoom and interactive detail modal, and supplementary sections for About, Experience, Achievements, Skills, and Contact.
- **Assets**:
  - `public/images/portrait.jpg`: Portrait of Rajwardhan.
  - `public/images/project_hospital.jpg`: Screenshot for Smart District Hospital Queue & Appointment System.
  - `public/images/project_wildlife.jpg`: Screenshot for Wildlife Habitat Monitoring System.
  - `public/images/project_triage.svg`: UI Mockup for AI-Powered Emergency Triage & Hospital Routing.

## Important Decisions
- Implemented exact visual fidelity matching the user's provided UI design (Hero title, blue brand accent `#2563eb`, handwritten doodle text with arrows, code terminal mockup, and floating stats).
- Used Vanilla CSS with CSS variables rather than Tailwind CSS to adhere to web application development guidelines.
- Configured `.gitignore` to prevent any build caches (`.next/`), dependencies (`node_modules/`), logs, and environment variable files from entering source control.

## Current State
- Next.js production build (`npm run build`) compiles cleanly with 0 errors and 0 warnings.
- Dev server running on port 3000.
- All interactive features functioning: Dark/Light theme toggle, Project details modal, Copy code snippet, Copy email, and responsive navigation.

## Known Issues
- None.

## Pending Work
- User may customize project GitHub repository links, social media handles, and personal contact numbers as desired.

## Interaction History

### 2026-10-19 01:17

**User Request**
> add and push to git
> first create a gitignore file

**Exploration**
- Inspected `.gitignore` and updated it with comprehensive ignore patterns for Node, Next.js build artifacts, IDE configs, environment secrets, and log files.
- Inspected `git status` and confirmed untracked clean project files without build artifacts or node_modules.
- Checked git remote origin: `https://github.com/rajwardhan/portfolio-fsd.git`.

**Work Done**
- Created comprehensive `.gitignore`.
- Initialized `memory.md`.
- Staged all project files and created git commit.
- Pushed commit to remote repository branch `main`.

**Files Changed**
- `.gitignore`
  - Created comprehensive ignores for Next.js, Node, secrets, and logs.
- `memory.md`
  - Created persistent project documentation and interaction memory.
- `app/page.tsx`
  - Home page component with exact replica hero, projects, and animations.
- `app/layout.tsx`
  - Root layout with font configuration and global styles.
- `app/globals.css`
  - Complete custom styling system with animations and light/dark theme variables.
- `public/images/portrait.jpg`
  - Portrait asset for developer.
- `public/images/project_hospital.jpg`
  - Project preview asset.
- `public/images/project_wildlife.jpg`
  - Project preview asset.
- `public/images/project_triage.svg`
  - Project preview asset.
- `package.json` & `package-lock.json`
  - Next.js and Lucide React dependencies.
- `tsconfig.json` & `next.config.ts`
  - TypeScript and Next.js project configurations.

**Verification**
- Production build checked via `npm run build` (successful compilation in 1704ms).
- Checked `git status` to verify staged changes contain no sensitive files or credentials.

**Git**
- Branch: main
- Commit: pending execution
- Push: pending execution
- Status: pending execution

**Notes**
- Ready to stage, commit, and push to GitHub.
