### To implement a UI in React, you will usually follow the same five steps.

- Step 1: Break the UI into a component hierarchy
- Step 2: Build a static version in React
- Step 3: Find the minimal but complete representation of UI state
- Step 4: Identify where your state should live
- Step 5: Add inverse data flow

### Ask these questions for identifying states:

- Does it remain unchanged over time? If so, it isn’t state.
- Is it passed in from a parent via props? If so, it isn’t state.
- Can you compute it based on existing state or props in your component? If so, it definitely isn’t state!

**What’s left is probably state.**
