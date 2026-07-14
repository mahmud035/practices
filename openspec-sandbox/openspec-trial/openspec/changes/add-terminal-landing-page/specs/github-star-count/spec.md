## ADDED Requirements

### Requirement: Live star count display
The navigation bar SHALL display the product repository's current GitHub star count, fetched from the public GitHub API on the client. The fetched value SHALL be cached to avoid refetching on every render or navigation.

#### Scenario: Star count renders on success
- **WHEN** the GitHub API returns the repository star count
- **THEN** the nav displays the star count in a human-readable form (e.g., abbreviated thousands)

#### Scenario: Cached value reused
- **WHEN** the star count has already been fetched within its cache window
- **THEN** the cached value is displayed without issuing a new network request

### Requirement: Loading state
While the star count is being fetched, the system SHALL show a skeleton placeholder in place of the number rather than a spinner or empty space, so nav layout does not shift.

#### Scenario: Skeleton shown during fetch
- **WHEN** the star-count request is in flight
- **THEN** a skeleton placeholder occupies the star-count position and layout does not shift when the value arrives

### Requirement: Error state
If the star-count fetch fails or the API is unavailable, the system SHALL degrade gracefully by hiding the count (or showing a static fallback) without breaking the nav or logging a user-facing error.

#### Scenario: Fetch failure degrades gracefully
- **WHEN** the GitHub API request fails or times out
- **THEN** the nav renders without the star count and without any error surfaced to the visitor
