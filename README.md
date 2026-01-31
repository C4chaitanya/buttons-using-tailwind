# React Starter Project (Custom Navigation & Routing)

A small React + Vite starter project used while following Stephen Grider's Udemy course. It demonstrates building several reusable UI components and a tiny client-side navigation system (no React Router) using the History API.

---

## 🚀 Quick start

1. Install dependencies

```bash
npm install
```

2. Run the dev server

```bash
npm start
# open http://localhost:3000 or the port shown by Vite
```

3. Build for production

```bash
npm run build
```

4. Lint

```bash
npm run lint
```

---

## 🗂 Project structure (important files)

- `index.html` — app entry
- `src/index.js` — mounts the app and (optionally) wraps with `NavigationProvider`
- `src/App.js` — demo entry, links to pages
- `src/context/navigation.js` — small navigation context that provides `{ currentPath, navigate }`
- `src/components/Link.js` — anchor-like component that calls `navigate(to)` and prevents full page reload
- `src/components/Route.js` — conditionally renders children when `path === currentPath`
- `src/components/Panel.js` — simple styled container, forwards props
- `src/components/Button.js` — utility button with variant props (primary, outline, rounded, etc.)
- `src/components/Dropdown.js` — controlled dropdown (`options`, `value`, `onChange`)
- `src/components/Accordion.js` — simple accordion rendering `items[]`
- `src/pages/*` — page components: `AccordionPage`, `DropdownPage`, `ButtonPage`

---

## ✨ Key behaviors & notes

- Navigation
  - Uses `NavigationProvider` + `Link` + `Route` to switch views without a full page reload using `history.pushState`.
  - Make sure `Link` uses `href={to}` and `onClick={handleClick}` so `event.preventDefault()` runs and `navigate(to)` is called.

- Dropdown
  - Implemented as a controlled component: pass `value` (selected option object) and `onChange` (setter) from parent.
  - Display `value?.name` to show the selected label.

- Button styling
  - Avoid applying mutually conflicting Tailwind classes (e.g., `text-white` and `text-blue-500`) at the same time — use conditional class logic (apply `text-white` only for filled buttons, color text only for outline).

- Panel
  - For absolute-positioned dropdowns, wrap the `Panel` in an absolutely positioned container and avoid fixed widths (`w-48`) that may hide or constrain content.

---

## 🐞 Troubleshooting (common issues)

- Page content not rendering when wrapping `App` in `NavigationProvider`: ensure `NavigationProvider` returns the provider JSX and exposes `currentPath`.
- Links appear to reload page: ensure `Link` prevents default navigation and calls `navigate(to)`.
- Dropdown value not showing: confirm you pass the selected object as `value` and display `value?.name`.
- React child errors like "Objects are not valid as a React child": verify you render object properties (e.g., `item.label`) not the raw object.

---

## � Sorting examples (numeric, string, object)

This project includes some basic sorting patterns that are concise and reusable. Key notes:

- Array.prototype.sort mutates the original array. Use a copy (`[...arr]`) if you need the original unchanged.
- The `sort` function accepts a compare callback that should return a negative number (a < b), zero (a === b), or a positive number (a > b).
- For strings, prefer `String.prototype.localeCompare` for correct locale-aware ordering and options (e.g., case-insensitive sorting).

### Numeric sort

```javascript
const data = [5, 10, 12, 30, 3, 1];
// Simple numeric ascending
data.sort((a, b) => a - b);
console.log("Sorted data:", data); // [1, 3, 5, 10, 12, 30]
```

Explanation: returning `a - b` yields negative/positive/zero which `sort` uses to order numbers.

### String sort (locale-aware)

```javascript
const data = ["A", "B", "a", "b", "t"];
// Locale-aware sort (default sensitivity is usually case-sensitive)
data.sort((a, b) => a.localeCompare(b));
console.log("Sorted data:", data); // e.g. ['A', 'a', 'B', 'b', 't']

// Case-insensitive (base sensitivity)
data.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));
console.log("Case-insensitive sorted:", data); // ['A', 'a', 'B', 'b', 't'] or locale variation
```

Explanation: `localeCompare` provides better internationalization and options to control case and accent sensitivity.

### Object sort with dynamic key and order (asc/desc)

```javascript
const data = [
  { name: "Orange", cost: 25, weight: 100 },
  { name: "Apple", cost: 10, weight: 10 },
  { name: "Pears", cost: 20, weight: 25 },
  { name: "Grapes", cost: 30, weight: 400 },
];

const sortOrder = "asc"; // or 'desc'
const getSortValue = (item) => item.name; // choose the sort key dynamically

data.sort((a, b) => {
  const reverseOrder = sortOrder === "asc" ? 1 : -1;
  const valueA = getSortValue(a);
  const valueB = getSortValue(b);

  if (typeof valueA === "string") {
    return valueA.localeCompare(valueB) * reverseOrder;
  }

  return (valueA - valueB) * reverseOrder;
});

console.log("Sorted data:", data);
```

Explanation: this pattern lets you sort by any property and by either ascending or descending order. It detects strings vs numbers and uses `localeCompare` for strings and numeric subtraction for numbers.

---

## �🧪 Next improvements / TODOs

- Add unit tests for `Dropdown` and `Link` components
- Improve the navigation system to support route parameters and 404 handling
- Add accessibility (keyboard navigation) for Dropdown and Accordion

---

## 📄 License

MIT (or your preferred license)

---

If you want, I can: add a CONTRIBUTING guide, wire up tests, or convert the tiny router to a minimal route matcher with params. Which would you like next? 💬
