<div align="center">

<img src="assets/bee.png" alt="Spelling Bee mascot" width="120" />

# Spelling Bee

**Listen. Spell. Build your streak.**

A mobile spelling-bee practice game built with React Native and Expo. Hear a word, type it, and rack up points.

![Expo SDK](https://img.shields.io/badge/Expo-SDK%2049-000020?logo=expo&logoColor=white)
![React Native](https://img.shields.io/badge/React%20Native-0.72-61DAFB?logo=react&logoColor=black)
![Platforms](https://img.shields.io/badge/platforms-iOS%20%7C%20Android%20%7C%20Web-informational)

</div>

---

## Features

- **Audio-driven gameplay**: every word is a recorded clip, so you practice spelling by ear, not by sight.
- **Large word bank**: roughly 190 words, from `crazy` and `fruit` to `rhythm`, `knight` and `albeit`.
- **Scoring with streaks**: points go up for correct answers and down for misses, with bonuses for hot streaks.
- **Streak flames**: a red flame appears at 5 in a row and a blue flame at 10.
- **Hints**: reveal two adjacent letters of the current word (once per word).
- **Replay**: hear the word again as many times as you need.
- **Settings screen**: volume control.

## How to play

1. Tap **Play** on the home screen, then **Play** again to hear a word.
2. Type your spelling and tap **Submit**.
3. Stuck? Tap **Replay** to hear it again, or **Hint** to reveal part of the word.
4. If you miss, the correct spelling is shown and your streak resets.

### Scoring

| Event | Points |
| --- | --- |
| Correct answer | +1 |
| Correct, streak of 5 or more | +2 |
| Correct, streak of 10 or more | +4 |
| Incorrect answer | −1 (streak resets) |
| Hint used | −1 (only when your score is above 6) |

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 16 or newer
- npm or yarn
- The [Expo Go](https://expo.dev/go) app on your phone, or an iOS/Android emulator

### Install and run

```bash
git clone https://github.com/MuralWings/React-Native-Spelling-App.git
cd React-Native-Spelling-App
npm install
npm start
```

Then scan the QR code with Expo Go, or press `i` (iOS simulator), `a` (Android emulator) or `w` (web) in the terminal.

| Script | Description |
| --- | --- |
| `npm start` | Start the Expo dev server |
| `npm run android` | Start and open on Android |
| `npm run ios` | Start and open on iOS |
| `npm run web` | Start and open in the browser |

## Project structure

```
.
├── App.js                # Navigation setup (Home, Play, Settings)
├── HomeScreen.js         # Landing screen with Play and Settings buttons
├── SpellingScreen.js     # Game logic: audio playback, scoring, hints, streaks
├── SettingsScreen.js     # Volume slider
├── audio/                # One .mp3 per word
├── assets/               # Icons, buttons, mascot and flame animations
├── app.json              # Expo configuration
└── package.json
```

## Adding words

Each word needs an audio clip and an entry in two lists in `SpellingScreen.js`. The lists are matched by **index**, so keep them in the same order.

1. Add `yourword.mp3` to `audio/`.
2. Add `require('./audio/yourword.mp3')` to `audioPaths.paths`.
3. Add `'yourword'` at the same position in `wordList`.

## Tech stack

- [Expo](https://expo.dev/) / [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/) (stack navigator)
- [expo-av](https://docs.expo.dev/versions/latest/sdk/audio/) for audio playback
- [React Native Elements](https://reactnativeelements.com/) for the settings slider

## Known issues and roadmap

- Vibration/haptic feedback was removed and is planned to return.
- The volume slider UI is minimal and needs polish.
- Words and audio are tied together by array index, so a data-driven word list (a single array of `{ word, audio }`) would be safer.
- No persistent high score yet.

## Contributing

Issues and pull requests are welcome. For larger changes, please open an issue first to discuss what you would like to change.

## Origin

Originally prototyped in [Expo Snack](https://snack.expo.dev/).
