# Mammothzy - Activity Creation Platform

A Next.js application for creating and managing team bonding activities. Built as part of The Internet Folks React Internship Assignment.

## 🚀 Features

- **Multi-Step Form with Tabs**: Navigate between Activity Details and Location Details
- **Form Validation**: Real-time validation using React Hook Form and Zod
- **Form Data Persistence**: Data retained when navigating between tabs
- **Controlled Tab Navigation**: Location tab only accessible after Activity Details validation
- **Success Modal**: Displays after successful form submission
- **Console Logging**: Complete form data logged to console
- **Form Reset**: All data cleared and form reset after successful submission
- **Pixel-Perfect UI**: Designed to match Figma specifications

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Form Management**: React Hook Form
- **Validation**: Zod
- **Styling**: Tailwind CSS

## 📁 Project Structure

```
test2/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── CreateActivityForm.tsx      # Main form container
│   ├── Header.tsx                  # App header
│   ├── TabNavigation.tsx           # Tab switcher
│   ├── SuccessModal.tsx            # Success modal
│   └── forms/
│       ├── ActivityDetailsForm.tsx  # Step 1
│       └── LocationDetailsForm.tsx  # Step 2
├── types/
│   └── form.ts             # TypeScript types and Zod schemas
├── package.json
├── tsconfig.json
└── tailwind.config.ts
```

## 🎯 Key Implementation Details

### Form State Management
- Centralized state in `CreateActivityForm` component
- Separate React Hook Form instances for each tab
- Data persisted across tab navigation

### Validation Logic
- **Activity Details**: All required fields must be filled before proceeding
- **Location Details**: Address, city, state, ZIP code, and contact info validated
- Error messages displayed in real-time

### Tab Control
- Tab 2 (Location Details) is disabled until Tab 1 is completed
- Visual indicators for active/inactive/disabled states
- Previous button allows returning to Tab 1 without losing data

### Submission Flow
1. User fills Activity Details → validates → navigates to Location Details
2. User fills Location Details → clicks Submit
3. Complete form data logged to console
4. Success modal appears
5. Form state completely reset
6. User returned to Activity Details tab

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Form Fields

### Activity Details
- Activity Name (required)
- Category (required dropdown)
- Activity Type (required radio: Indoor/Outdoor/Virtual)
- Location Type (required radio: Popular/User Location)
- About Activity (optional textarea)
- Activity Description (optional textarea)
- Min/Max Members (optional numbers)

### Location Details
- Address Line 1 (required)
- Address Line 2 (optional)
- ZIP Code (required, 6 digits)
- City (required)
- State (required dropdown)
- Contact Number (required, 10 digits with +91 prefix)
- Contact Name (required)

## ✅ Assignment Requirements Checklist

- ✅ Multi-page form with tabs
- ✅ Step-by-step validation (cannot proceed with errors)
- ✅ Form data retention when navigating back
- ✅ Pixel-perfect design matching Figma
- ✅ Success modal on submission
- ✅ Console log all form data
- ✅ Form reset after submission
- ✅ TypeScript with proper typing (no `any`)
- ✅ Clean code structure
- ✅ Next.js best practices

## 🎓 Code Explainability

### How is form state managed?
- Single parent component (`CreateActivityForm`) maintains all state
- Two separate `useForm` hooks for each tab's validation
- State lifted up to parent to enable persistence across tabs

### How does tab validation work?
- Each form has its own Zod schema
- `completedTabs` Set tracks which tabs have valid data
- Tab 2 disabled until Tab 1 is in `completedTabs`

### How is tab navigation controlled?
- `handleActivityNext` validates Tab 1 and adds it to `completedTabs`
- Tab 2 button checks `canNavigateToLocation` before allowing click
- Visual disabled state prevents accidental navigation

### How does form reset work?
- Both form instances reset using `form.reset({})`
- Parent state cleared: `setFormData({})`
- `completedTabs` cleared
- Active tab reset to 'activity'

## 🚢 Deployment

### Quick Deploy Options:

**Vercel** (Recommended):
```bash
npm install -g vercel
vercel --prod
```

**Render**:
1. Push code to GitHub
2. Go to [render.com](https://render.com)
3. Create new Web Service
4. Connect your repo
5. Build: `npm install && npm run build`
6. Start: `npm start`

**Netlify**:
```bash
npm run build
netlify deploy --prod
```

## 📧 Contact

For queries:
- Gunjan Bangde: gunjan.bangde@theinternetfolks.com
- Ziyad Hasan: ziyad.hasan@theinternetfolks.com

---

