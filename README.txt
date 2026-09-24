# APK HUB

Mobile-first modded APK catalog homepage based on the approved visual mockup.

## Files
- index.html — page structure
- style.css — visual design and responsive layout
- script.js — APK data, search, categories, Load More and theme toggle

## Add an APK
Open `script.js` and add an object to the `apps` array:

{
  name: "My App",
  version: "v1.0",
  category: "Tools",
  icon: "M",
  iconClass: "my-app",
  description: "Short description.",
  badge: "New"
}

## Add real download links
Replace the `downloadApp()` function with your own link mapping or backend/Firebase logic.

For example, you can later add:
download: "https://your-domain.example/app.apk"

and make the Download button open that URL.

## Logo images
The current demo uses lightweight symbols so the site works without extra image files. You can replace the `icon` area with `<img>` elements and store your APK logos in a `logos/` folder.
