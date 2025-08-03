// Starter data
const settings = {
  darkMode: true,
  notifications: false,
  autoSave: true,
  spellCheck: false,
  grammarCheck: true
};

// Start coding here...

// 1. List all enabled settings as "darkMode: true"
const enabledList = Object.entries(settings)
  .filter(([_, value]) => value === true)
  .map(([key, value]) => `${key}: ${value}`);
console.log("Enabled Settings:");
enabledList.forEach(line => console.log(line));

// 2. Count how many settings are set to true
const enabledCount = Object.values(settings).filter(value => value === true).length;
console.log("Number of Enabled Settings:", enabledCount);

// 3. Convert settings to an array and filter based on values
const filteredEntries = Object.entries(settings).filter(([_, value]) => value === true);
console.log("Filtered Entries (true only):", filteredEntries);

// 4. Rebuild filtered settings object using Object.fromEntries()
const filteredSettings = Object.fromEntries(filteredEntries);
console.log("Filtered Settings Object:", filteredSettings);