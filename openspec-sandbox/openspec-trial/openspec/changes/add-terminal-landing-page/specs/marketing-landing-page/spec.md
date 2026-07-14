## ADDED Requirements

### Requirement: Public home route
The system SHALL serve the marketing landing page at the site root path (`/`) to unauthenticated visitors without requiring login.

#### Scenario: Anonymous visitor loads the home page
- **WHEN** an unauthenticated visitor navigates to `/`
- **THEN** the full landing page renders without any authentication prompt or redirect

### Requirement: Section composition and order
The landing page SHALL present the following sections in this order: (1) navigation bar, (2) hero, (3) trusted-by logo strip, (4) features grid, (5) how-it-works steps, (6) metrics band, (7) testimonials, (8) pricing teaser, (9) final call-to-action band, (10) footer. Each section SHALL be a distinct landmark or region in the document.

#### Scenario: All sections render in order
- **WHEN** the home page finishes loading
- **THEN** the ten sections appear in the specified top-to-bottom order

#### Scenario: Sections are navigable landmarks
- **WHEN** a screen-reader or keyboard user traverses page regions
- **THEN** each section is reachable as a labeled landmark/region

### Requirement: Hero content and primary conversion
The hero section SHALL present a product headline, a supporting subheadline, a primary call-to-action, a secondary call-to-action, and a terminal window demonstrating the product. The primary CTA SHALL be the most visually prominent interactive element in the hero.

#### Scenario: Hero presents both CTAs
- **WHEN** the hero renders
- **THEN** a primary CTA and a visually secondary CTA are both present and keyboard-focusable

### Requirement: Navigation bar links and calls-to-action
The navigation bar SHALL contain the product wordmark, links to Docs, Pricing, Blog, and Changelog, a Sign in link, and a primary CTA. On viewports below the mobile breakpoint the links SHALL collapse into a toggleable menu.

#### Scenario: Desktop nav shows all links
- **WHEN** the page is viewed at desktop width
- **THEN** the wordmark, all four content links, Sign in, and the primary CTA are visible

#### Scenario: Mobile nav collapses
- **WHEN** the page is viewed below the mobile breakpoint
- **THEN** the content links collapse into a menu that can be opened and closed via keyboard and pointer

### Requirement: Features, how-it-works, metrics, testimonials, and pricing teaser content
The features grid SHALL present between three and six capability cards, each with a title, description, and an illustrative terminal or code snippet. The how-it-works section SHALL present ordered steps (install, configure, run), each with an accompanying terminal block. The metrics band SHALL present headline statistics. The testimonials section SHALL present developer quotes with attribution. The pricing teaser SHALL present tiers with a call-to-action linking to full pricing.

#### Scenario: Features grid within bounds
- **WHEN** the features section renders
- **THEN** it shows no fewer than three and no more than six cards, each with a title, description, and code/terminal snippet

#### Scenario: How-it-works shows ordered steps
- **WHEN** the how-it-works section renders
- **THEN** the install, configure, and run steps appear as an ordered sequence, each with a terminal block

#### Scenario: Pricing teaser links to full pricing
- **WHEN** a visitor activates the pricing teaser CTA
- **THEN** they are directed to the pricing destination

### Requirement: Responsive layout
The landing page SHALL be mobile-first and SHALL render usably across mobile, tablet, and desktop breakpoints with no horizontal overflow and with tap targets meeting a minimum touch size on small viewports.

#### Scenario: No horizontal overflow on mobile
- **WHEN** the page is viewed at a 360px-wide viewport
- **THEN** no section causes horizontal scrolling of the page body

### Requirement: Page metadata and SEO
The landing page SHALL define a page title, meta description, and social-share (Open Graph) metadata, and SHALL expose a single top-level `h1` describing the product.

#### Scenario: Document exposes SEO metadata
- **WHEN** the page is loaded
- **THEN** a title, meta description, Open Graph tags, and exactly one `h1` are present

### Requirement: Accessibility baseline
The landing page SHALL be operable by keyboard alone, SHALL provide visible focus indicators, SHALL meet WCAG AA contrast on the dark theme, and SHALL mark decorative terminal chrome as non-informative to assistive technology.

#### Scenario: Keyboard-only traversal
- **WHEN** a user navigates the page using only the keyboard
- **THEN** every interactive element is reachable and shows a visible focus indicator

#### Scenario: Decorative chrome is hidden from assistive tech
- **WHEN** a screen reader encounters purely decorative terminal window chrome
- **THEN** that chrome is not announced as meaningful content
