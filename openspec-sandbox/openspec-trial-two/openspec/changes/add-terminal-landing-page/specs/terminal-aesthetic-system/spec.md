## ADDED Requirements

### Requirement: Semantic design tokens
The terminal aesthetic system SHALL express all colors, spacing, and typography through named semantic tokens (via Tailwind v4 theme tokens). Components SHALL reference tokens and SHALL NOT use raw hex, rgb, or literal color values.

#### Scenario: Components consume tokens only
- **WHEN** any terminal-aesthetic component is styled
- **THEN** its colors are drawn from semantic tokens and contain no raw color literals

### Requirement: Monospace typographic identity
The system SHALL apply a monospace font stack (e.g., a JetBrains Mono / Berkeley-style family) as the primary display and code typeface, with a defined fallback chain so text remains monospace before the web font loads.

#### Scenario: Monospace applied with fallback
- **WHEN** the page renders before the web font finishes loading
- **THEN** text is displayed in a monospace fallback rather than a proportional system default

### Requirement: Terminal window primitive
The system SHALL provide a reusable terminal-window component that renders macOS-style traffic-light chrome, a prompt glyph (`$` or `❯`), and command/output content. The chrome SHALL be decorative and hidden from assistive technology, while the command/output text SHALL remain readable content.

#### Scenario: Terminal window renders chrome and content
- **WHEN** a terminal window is rendered with a command and output
- **THEN** it displays traffic-light chrome plus the prompt, command, and output, with the chrome marked decorative

### Requirement: Copy-to-clipboard install chip
The system SHALL provide a copy-command chip that displays an install command and copies it to the clipboard on activation, giving explicit success feedback. The chip SHALL be operable by keyboard.

#### Scenario: Copy on click
- **WHEN** a user activates a copy-command chip
- **THEN** the displayed command is written to the clipboard and a copied confirmation is shown

#### Scenario: Copy via keyboard
- **WHEN** a keyboard user focuses the chip and presses Enter or Space
- **THEN** the command is copied and confirmation is shown

### Requirement: Typed-command animation with reduced-motion fallback
The system SHALL provide a typed-command animation that simulates a command being typed into a terminal. When the user's `prefers-reduced-motion` setting is `reduce`, the animation SHALL be disabled and the full command SHALL be shown as static text.

#### Scenario: Animation plays by default
- **WHEN** a visitor with no reduced-motion preference views a typed-command element
- **THEN** the command animates character by character

#### Scenario: Reduced motion shows static text
- **WHEN** a visitor with `prefers-reduced-motion: reduce` views the same element
- **THEN** the full command is displayed immediately as static text with no animation
