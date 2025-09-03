# Portfolio Context & Update Guide

This document explains how to work with Bolt to update and maintain your portfolio website.

## 🎯 Project Overview

This is a modern, production-ready portfolio website for Divya Patel, built with:
- **React 18** with JSX (not TypeScript)
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **React Router** for navigation

## 📝 How to Ask Bolt for Updates

### Content Updates

**To update personal information:**
```
"Update my contact email to newmail@example.com in the Hero and Contact sections"
```

**To add a new project:**
```
"Add a new project called 'TaskManager' to the Projects section with description 'A full-stack task management app built with MERN stack' and technologies React, Node.js, MongoDB, Express"
```

**To update skills:**
```
"Add TypeScript to my frontend skills with 75% proficiency level"
```

### Design Changes

**To change colors:**
```
"Change the primary color scheme from blue-purple gradient to green-teal gradient throughout the site"
```

**To modify animations:**
```
"Make the hero section animations slower and add a bounce effect to the CTA buttons"
```

**To update layout:**
```
"Make the projects section show 3 cards per row on desktop instead of 2"
```

### New Features

**To add a blog section:**
```
"Add a blog section to the main page that displays the latest 3 blog posts from the admin panel"
```

**To add a testimonials section:**
```
"Create a new testimonials section between Skills and Resume with placeholder testimonials"
```

### Technical Updates

**To add new dependencies:**
```
"Add React Hook Form to handle the contact form with validation"
```

**To optimize performance:**
```
"Add lazy loading to the Projects section images and implement code splitting for the admin panel"
```

## 🗂️ File Structure Guide

### Main Components
- `src/App.jsx` - Main app with routing
- `src/components/Header.jsx` - Navigation
- `src/components/Hero.jsx` - Landing section
- `src/components/About.jsx` - About me section
- `src/components/Projects.jsx` - Project showcase
- `src/components/Skills.jsx` - Skills display
- `src/components/Resume.jsx` - Resume download
- `src/components/Contact.jsx` - Contact form
- `src/components/Footer.jsx` - Footer
- `src/components/AdminPanel.jsx` - Blog CMS

### Key Files to Update
- **Personal Info**: Hero.jsx, Contact.jsx, Footer.jsx
- **Projects**: Projects.jsx
- **Skills**: Skills.jsx
- **Styling**: index.css, tailwind.config.js
- **Content**: Individual component files

## 🎨 Design System

### Colors
- Primary: Blue (#2563eb) to Purple (#7c3aed) gradients
- Backgrounds: White, Gray-50, Gray-100
- Text: Gray-900 (headings), Gray-600 (body)

### Spacing
- Consistent 8px grid system
- Section padding: py-20
- Container: max-width with mx-auto px-6

### Typography
- Headings: text-4xl to text-5xl, font-bold
- Body: text-lg to text-xl
- Small text: text-sm

## 🔧 Common Update Patterns

### Adding a New Section
1. Create component in `src/components/`
2. Import and add to `src/App.jsx`
3. Add navigation link to `src/components/Header.jsx`
4. Follow existing animation patterns with Framer Motion

### Updating Content Arrays
Most content is stored in arrays within components:
```javascript
const projects = [
  {
    title: 'Project Name',
    description: 'Description',
    technologies: ['React', 'Node.js'],
    // ...
  }
];
```

### Animation Patterns
```javascript
// Standard section animation
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
viewport={{ once: true }}

// Staggered animations
transition={{ duration: 0.6, delay: index * 0.1 }}
```

## 📱 Responsive Design

### Breakpoints
- Mobile: Default styles
- Tablet: `md:` prefix (768px+)
- Desktop: `lg:` prefix (1024px+)

### Grid Patterns
```javascript
// Common responsive grids
"grid md:grid-cols-2 lg:grid-cols-3 gap-8"
"grid md:grid-cols-2 gap-8"
```

## 🚀 Deployment Updates

### After Making Changes
1. Test locally: `npm run dev`
2. Build: `npm run build`
3. Deploy to Vercel: `vercel --prod`

### Environment Variables
Add to `.env` file:
```
VITE_CONTACT_EMAIL=your-email@example.com
VITE_PHONE_NUMBER=+1234567890
```

## 💡 Best Practices for Updates

### When Asking Bolt for Changes:

1. **Be Specific**: Instead of "make it better", say "increase the font size of project titles to text-2xl"

2. **Reference Existing Patterns**: "Add a new skill section following the same card layout as the About section"

3. **Mention Responsive Behavior**: "Make sure the new section works well on mobile devices"

4. **Consider Animations**: "Add the same fade-in animation as other sections"

5. **Test Instructions**: "Make sure all links still work after the changes"

### Example Update Requests:

**Good Request:**
```
"In the Projects section, change the featured project layout to show the image on the left for all projects instead of alternating sides, and increase the image height to h-80"
```

**Better Request:**
```
"Update the Projects.jsx component to:
1. Show all project images on the left side (remove the alternating layout)
2. Increase image height from h-64 to h-80
3. Ensure the layout remains responsive on mobile devices
4. Keep all existing animations and hover effects"
```

## 🔄 Regular Maintenance

### Monthly Updates
- Update project descriptions
- Add new skills learned
- Update resume PDF
- Check all external links

### Quarterly Updates
- Review and update project screenshots
- Add new projects
- Update contact information if needed
- Review and improve SEO meta tags

## 📞 Getting Help

When something isn't working:

1. **Describe the Issue**: "The contact form isn't submitting properly"
2. **Share Error Messages**: Include any console errors
3. **Specify Browser/Device**: "This happens on mobile Chrome"
4. **Expected vs Actual**: "I expected X but got Y"

Remember: Bolt can see all your files and understand the project structure, so you can reference specific components, functions, or sections directly!