#!/bin/bash
set -eo pipefail

# --- DRY-RUN MODE ---
DRY_RUN=false
if [[ "${1:-}" == "--dry" ]]; then
    DRY_RUN=true
    echo -e "\033[1;34m>>> Running in DRY-RUN mode. No files will be renamed.\033[0m"
    echo
fi

# --- COLORS ---
RED="\033[1;31m"
GREEN="\033[1;32m"
YELLOW="\033[1;33m"
BLUE="\033[1;34m"
RESET="\033[0m"

# Create temporary files for counting
TEMP_DIR=$(mktemp -d)
FOLDERS_FILE="$TEMP_DIR/folders"
FILES_FILE="$TEMP_DIR/files"
SKIPPED_FILE="$TEMP_DIR/skipped"

# Initialize counters
echo "0" > "$FOLDERS_FILE"
echo "0" > "$FILES_FILE" 
echo "0" > "$SKIPPED_FILE"

# Cleanup function
cleanup() {
    rm -rf "$TEMP_DIR"
}
trap cleanup EXIT

# --- HELPER FUNCTIONS ---
normalize_name() {
    local name="$1"
    
    # Special case: if name starts with number followed by dot, replace that dot with dash
    if [[ "$name" =~ ^[0-9]+\. ]]; then
        name=$(echo "$name" | sed -E 's/^([0-9]+)\.([^.])/\1-\2/')
    fi
    
    # Convert to lowercase, replace non-alphanumeric with dashes, remove leading/trailing dashes
    echo "$name" \
        | tr '[:upper:]' '[:lower:]' \
        | sed -E 's/[^a-z0-9]+/-/g' \
        | sed -E 's/^-+|-+$//g'
}

normalize_filename() {
    local filename="$1"
    
    # Handle file extension
    if [[ "$filename" == *.* ]]; then
        local name_part="${filename%.*}"
        local ext_part="${filename##*.}"
        ext_part="${ext_part,,}"  # Lowercase extension
        
        # Special case: if name starts with number followed by dot, replace that dot with dash
        if [[ "$name_part" =~ ^[0-9]+\. ]]; then
            name_part=$(echo "$name_part" | sed -E 's/^([0-9]+)\.([^.])/\1-\2/')
        fi
        
        # For filenames, convert to lowercase and replace non-alphanumeric with dashes
        local normalized_name
        normalized_name=$(echo "$name_part" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g' | sed -E 's/^-+|-+$//g')
        echo "$normalized_name.$ext_part"
    else
        # File without extension - same logic
        local name_part="$filename"
        
        # Special case: if name starts with number followed by dot, replace that dot with dash
        if [[ "$name_part" =~ ^[0-9]+\. ]]; then
            name_part=$(echo "$name_part" | sed -E 's/^([0-9]+)\.([^.])/\1-\2/')
        fi
        
        # For filenames, convert to lowercase and replace non-alphanumeric with dashes
        echo "$name_part" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g' | sed -E 's/^-+|-+$//g'
    fi
}

is_readme() {
    local filename="$1"
    [[ "${filename,,}" == "readme.md" ]]
}

should_skip_folder() {
    local folder_name="$1"
    [[ "$folder_name" == "src" || "$folder_name" == "public" || "$folder_name" == ".git" || "$folder_name" == ".vscode" ]]
}

# Check if a path is inside a skipped directory
is_path_skipped() {
    local path="$1"
    
    # Normalize the path for comparison (convert to lowercase)
    local normalized_path
    normalized_path=$(echo "$path" | tr '[:upper:]' '[:lower:]')
    
    # Check if any part of the normalized path contains src or public
    while [[ "$normalized_path" != "." && "$normalized_path" != "/" ]]; do
        local basename_path
        basename_path=$(basename "$normalized_path")
        if should_skip_folder "$basename_path"; then
            return 0  # Path is inside skipped directory
        fi
        normalized_path=$(dirname "$normalized_path")
    done
    return 1  # Path is not skipped
}

increment_counter() {
    local counter_file="$1"
    local current_count
    current_count=$(cat "$counter_file")
    echo $((current_count + 1)) > "$counter_file"
}

# --- MAIN PROCESSING ---
echo -e "${BLUE}Processing directory: $(pwd)${RESET}"
echo -e "${BLUE}Scanning for items...${RESET}"
echo

# Create list of all items to process
ITEMS_FILE="$TEMP_DIR/items_list"
find . -depth -print0 2>/dev/null > "$ITEMS_FILE"

# Process each item
while IFS= read -r -d '' item; do
    # Skip if item no longer exists (might have been renamed)
    if [[ ! -e "$item" ]]; then
        continue
    fi
    
    # Skip items in src or public directories
    if is_path_skipped "$item"; then
        basename_item=$(basename "$item")
        if [[ -d "$item" ]] && should_skip_folder "$basename_item"; then
            echo -e "[${YELLOW}SKIP${RESET}] Skipped folder and all contents: $item"
            increment_counter "$SKIPPED_FILE"
        fi
        continue
    fi
    
    # Skip README.md files
    if [[ -f "$item" ]] && is_readme "$(basename "$item")"; then
        echo -e "[${YELLOW}SKIP${RESET}] README.md: $item"
        increment_counter "$SKIPPED_FILE"
        continue
    fi
    
    # Process directories
    if [[ -d "$item" ]]; then
        basename_item=$(basename "$item")
        dirname_item=$(dirname "$item")
        normalized_name=$(normalize_name "$basename_item")
        
        if [[ "$normalized_name" != "$basename_item" ]] || [[ "$dirname_item" != "." ]]; then
            # Always normalize the full target path
            if [[ "$dirname_item" != "." ]]; then
                # Normalize each component of the directory path
                IFS='/' read -ra PATH_PARTS <<< "${dirname_item#./}"
                normalized_dir_parts=()
                for part in "${PATH_PARTS[@]}"; do
                    if [[ -n "$part" ]]; then
                        normalized_dir_parts+=("$(normalize_name "$part")")
                    fi
                done
                if [[ ${#normalized_dir_parts[@]} -gt 0 ]]; then
                    normalized_dirname=$(IFS='/'; echo "${normalized_dir_parts[*]}")
                    target_path="./$normalized_dirname/$normalized_name"
                else
                    target_path="./$normalized_name"
                fi
            else
                target_path="./$normalized_name"
            fi
            
            # Check if either the folder name changed OR the directory path changed
            if [[ "$target_path" != "$item" ]]; then
                if [[ -e "$target_path" ]]; then
                    echo -e "[${YELLOW}SKIP${RESET}] Directory target exists: $target_path"
                    increment_counter "$SKIPPED_FILE"
                else
                    if $DRY_RUN; then
                        echo -e "[${YELLOW}DIR${RESET}]  ${RED}$item${RESET} → ${GREEN}$target_path${RESET}"
                    else
                        # Create parent directories if they don't exist
                        mkdir -p "$(dirname "$target_path")"
                        mv "$item" "$target_path"
                        echo -e "[${GREEN}RENAMED${RESET}] $item → $target_path"
                    fi
                    increment_counter "$FOLDERS_FILE"
                fi
            fi
        fi
    # Process files
    elif [[ -f "$item" ]]; then
        basename_item=$(basename "$item")
        dirname_item=$(dirname "$item")
        
        # Use the new normalize_filename function that preserves camelCase
        new_filename=$(normalize_filename "$basename_item")
        
        if [[ "$new_filename" != "$basename_item" ]] || [[ "$dirname_item" != "." ]]; then
            # Always normalize the directory path for files (directories still get lowercased)
            if [[ "$dirname_item" != "." ]]; then
                # Normalize each component of the directory path
                IFS='/' read -ra PATH_PARTS <<< "${dirname_item#./}"
                normalized_dir_parts=()
                for part in "${PATH_PARTS[@]}"; do
                    if [[ -n "$part" ]]; then
                        normalized_dir_parts+=("$(normalize_name "$part")")
                    fi
                done
                if [[ ${#normalized_dir_parts[@]} -gt 0 ]]; then
                    normalized_dirname=$(IFS='/'; echo "${normalized_dir_parts[*]}")
                    target_path="./$normalized_dirname/$new_filename"
                else
                    target_path="./$new_filename"
                fi
            else
                target_path="./$new_filename"
            fi
            
            # Check if either the filename changed OR the directory path changed
            expected_normalized_path="$target_path"
            current_path="$item"
            
            if [[ "$expected_normalized_path" != "$current_path" ]]; then
                if [[ -e "$target_path" ]]; then
                    echo -e "[${YELLOW}SKIP${RESET}] File target exists: $target_path"
                    increment_counter "$SKIPPED_FILE"
                else
                    if $DRY_RUN; then
                        echo -e "[${YELLOW}FILE${RESET}] ${RED}$item${RESET} → ${GREEN}$target_path${RESET}"
                    else
                        # Create parent directories if they don't exist
                        mkdir -p "$(dirname "$target_path")"
                        mv "$item" "$target_path"
                        echo -e "[${GREEN}RENAMED${RESET}] $item → $target_path"
                    fi
                    increment_counter "$FILES_FILE"
                fi
            fi
        fi
    fi
    
done < "$ITEMS_FILE"

echo -e "\n${BLUE}Processing completed.${RESET}"

# Read final counts
folders_renamed=$(cat "$FOLDERS_FILE")
files_renamed=$(cat "$FILES_FILE")
skipped_items=$(cat "$SKIPPED_FILE")

# --- SUMMARY ---
echo -e "\n${BLUE}===== RENAMING SUMMARY =====${RESET}"
echo -e "${GREEN}Folders renamed:${RESET} $folders_renamed"
echo -e "${GREEN}Files renamed:  ${RESET} $files_renamed"
echo -e "${YELLOW}Skipped items:  ${RESET} $skipped_items"
echo -e "${BLUE}============================${RESET}"

if $DRY_RUN; then
    echo -e "\n${YELLOW}This was a dry run. To apply changes, run without --dry flag.${RESET}"
fi