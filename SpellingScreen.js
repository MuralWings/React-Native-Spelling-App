import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Audio } from 'expo-av';
import Sliders from './SettingsScreen';

export default function App() {
  ///varibles declared
  const [sound, setSound] = useState();
  const [inputText, setInputText] = useState('');
  const [score, setScore] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState('g4o3jewqgeowm');
  const [audioWord, setAudioWord] = useState('');
  const [wordIndex, setWordIndex] = useState('');
  const [wordStreak, setWordStreak] = useState(0);
  const [wordDefintion, setWordDefition] = useState('fprt');
  const [redFire, setRedFire] = useState(false);
  const [blueFire, setBlueFire] = useState(false);
  const [replayButon, setReplayButton] = useState(false);
  const [correctText, setCorrectText]= useState(false);
  const [hintText,setHintText] = useState('')
  const [showText, setShowText] = useState(false);
  const [hintToken,setHintToken] = useState(true);
  const [salStreaks,setSalstreaks] = useState(true);

  /// add audio file name here
  const audioPaths = {
    paths: [
      require('./audio/crazy.mp3'),
      require('./audio/novel.mp3'),
      require('./audio/stair.mp3'),
      require('./audio/voice.mp3'),
      require('./audio/legal.mp3'),
      require('./audio/union.mp3'),
      require('./audio/phase.mp3'),
      require('./audio/joint.mp3'),
      require('./audio/great.mp3'),
      require('./audio/fruit.mp3'),
      require('./audio/fleat.mp3'),
      require('./audio/fight.mp3'),
      require('./audio/fixed.mp3'),
      require('./audio/death.mp3'),
      require('./audio/cycle.mp3'),
      require('./audio/young.mp3'),
      require('./audio/wound.mp3'),
      require('./audio/virus.mp3'),
      require('./audio/trial.mp3'),
      require('./audio/yeald.mp3'),
      require('./audio/theme.mp3'),
      require('./audio/taxes.mp3'),
      require('./audio/touch.mp3'),
      require('./audio/sixth.mp3'),
      require('./audio/servant.mp3'),
      require('./audio/route.mp3'),
      require('./audio/refer.mp3'),
      require('./audio/ratio.mp3'),
      require('./audio/raise.mp3'),
      require('./audio/quite.mp3'),
      require('./audio/quilt.mp3'),
      require('./audio/quick.mp3'),
      require('./audio/prior.mp3'),
      require('./audio/pitch.mp3'),
      require('./audio/pinky.mp3'),
      require('./audio/novel.mp3'),
      require('./audio/noise.mp3'),
      require('./audio/naval.mp3'),
      require('./audio/movie.mp3'),
      require('./audio/mouse.mp3'),
      require('./audio/money.mp3'),
      require('./audio/mixed.mp3'),
      require('./audio/match.mp3'),
      require('./audio/magic.mp3'),
      require('./audio/lying.mp3'),
      require('./audio/local.mp3'),
      require('./audio/lease.mp3'),
      require('./audio/learn.mp3'),
      require('./audio/lazer.mp3'),
      require('./audio/juice.mp3'),
      require('./audio/judge.mp3'),
      require('./audio/issue.mp3'),
      require('./audio/irony.mp3'),
      require('./audio/inner.mp3'),
      require('./audio/ideal.mp3'),
      require('./audio/guide.mp3'),
      require('./audio/guard.mp3'),
      require('./audio/grace.mp3'),
      require('./audio/gasped.mp3'),
      require('./audio/fraud.mp3'),
      require('./audio/forum.mp3'),
      require('./audio/focus.mp3'),
      require('./audio/fluid.mp3'),
      require('./audio/field.mp3'),
      require('./audio/fiber.mp3'),
      require('./audio/faint.mp3'),
      require('./audio/enjoy.mp3'),
      require('./audio/eight.mp3'),
      require('./audio/eager.mp3'),
      require('./audio/debut.mp3'),
      require('./audio/curve.mp3'),
      require('./audio/cloud.mp3'),
      require('./audio/chair.mp3'),
      require('./audio/chain.mp3'),
      require('./audio/built.mp3'),
      require('./audio/brief.mp3'),
      require('./audio/broad.mp3'),
      require('./audio/bound.mp3'),
      require('./audio/bench.mp3'),
      require('./audio/begun.mp3'),
      require('./audio/beach.mp3'),
      require('./audio/audit.mp3'),
      require('./audio/audio.mp3'),
      require('./audio/asked.mp3'),
      require('./audio/argue.mp3'),
      require('./audio/arena.mp3'),
      require('./audio/aarey.mp3'),
      require('./audio/alike.mp3'),
      require('./audio/album.mp3'),
      require('./audio/adult.mp3'),
      require('./audio/yodled.mp3'),
      require('./audio/wholly.mp3'),
      require('./audio/veiled.mp3'),
      require('./audio/vassal.mp3'),
      require('./audio/varies.mp3'),
      require('./audio/system.mp3'),
      require('./audio/stupid.mp3'),
      require('./audio/slight.mp3'),
      require('./audio/shrimp.mp3'),
      require('./audio/shield.mp3'),
      require('./audio/series.mp3'),
      require('./audio/senior.mp3'),
      require('./audio/seldom.mp3'),
      require('./audio/sacred.mp3'),
      require('./audio/router.mp3'),
      require('./audio/rhythm.mp3'),
      require('./audio/review.mp3'),
      require('./audio/remedy.mp3'),
      require('./audio/relief.mp3'),
      require('./audio/regime.mp3'),
      require('./audio/regain.mp3'),
      require('./audio/ranked.mp3'),
      require('./audio/ranges.mp3'),
      require('./audio/radius.mp3'),
      require('./audio/racial.mp3'),
      require('./audio/quarts.mp3'),
      require('./audio/purity.mp3'),
      require('./audio/public.mp3'),
      require('./audio/profit.mp3'),
      require('./audio/praise.mp3'),
      require('./audio/poison.mp3'),
      require('./audio/podium.mp3'),
      require('./audio/plaque.mp3'),
      require('./audio/pieces.mp3'),
      require('./audio/phases.mp3'),
      require('./audio/perish.mp3'),
      require('./audio/patrol.mp3'),
      require('./audio/oxygen.mp3'),
      require('./audio/origin.mp3'),
      require('./audio/optics.mp3'),
      require('./audio/onions.mp3'),
      require('./audio/obtuse.mp3'),
      require('./audio/novice.mp3'),
      require('./audio/notion.mp3'),
      require('./audio/notify.mp3'),
      require('./audio/knight.mp3'),
      require('./audio/nerves.mp3'),
      require('./audio/misery.mp3'),
      require('./audio/merits.mp3'),
      require('./audio/myriad.mp3'),
      require('./audio/mentor.mp3'),
      require('./audio/lyrics.mp3'),
      require('./audio/liquid.mp3'),
      require('./audio/limits.mp3'),
      require('./audio/lethal.mp3'),
      require('./audio/legion.mp3'),
      require('./audio/lawyer.mp3'),
      require('./audio/killer.mp3'),
      require('./audio/juices.mp3'),
      require('./audio/island.mp3'),
      require('./audio/influx.mp3'),
      require('./audio/iconic.mp3'),
      require('./audio/haired.mp3'),
      require('./audio/grains.mp3'),
      require('./audio/gained.mp3'),
      require('./audio/fusion.mp3'),
      require('./audio/friend.mp3'),
      require('./audio/firing.mp3'),
      require('./audio/finely.mp3'),
      require('./audio/figure.mp3'),
      require('./audio/felony.mp3'),
      require('./audio/faulty.mp3'),
      require('./audio/famous.mp3'),
      require('./audio/either.mp3'),
      require('./audio/detail.mp3'),
      require('./audio/design.mp3'),
      require('./audio/deceit.mp3'),
      require('./audio/county.mp3'),
      require('./audio/comply.mp3'),
      require('./audio/church.mp3'),
      require('./audio/charge.mp3'),
      require('./audio/carrot.mp3'),
      require('./audio/cactus.mp3'),
      require('./audio/cabana.mp3'),
      require('./audio/buying.mp3'),
      require('./audio/bottle.mp3'),
      require('./audio/beyond.mp3'),
      require('./audio/believe.mp3'),
      require('./audio/barker.mp3'),
      require('./audio/ascend.mp3'),
      require('./audio/albeit.mp3'),
      require('./audio/afraid.mp3'),
    ],
  };
  ///add word name here
  const wordList = [
    'crazy',
    'novel',
    'stair',
    'voice',
    'legal',
    'union',
    'phase',
    'joint',
    'great',
    'fruit',
    'fleet',
    'fight',
    'fixed',
    'death',
    'cycle',
    'young',
    'wound',
    'virus',
    'trial',
    'yield',
    'theme',
    'taxes',
    'touch',
    'sixth',
    'servant',
    'route',
    'refer',
    'ratio',
    'raise',
    'quite',
    'quilt',
    'quick',
    'prior',
    'pitch',
    'pinky',
    'novel',
    'noise',
    'naval',
    'movie',
    'mouse',
    'money',
    'mixed',
    'match',
    'magic',
    'lying',
    'local',
    'lease',
    'learn',
    'laser',
    'juice',
    'judge',
    'issue',
    'irony',
    'inner',
    'ideal',
    'guide',
    'guard',
    'grace',
    'gasped',
    'fraud',
    'forum',
    'focus',
    'fluid',
    'field',
    'fiber',
    'faint',
    'enjoy',
    'eight',
    'eager',
    'debut',
    'curve',
    'cloud',
    'chair',
    'chain',
    'built',
    'brief',
    'broad',
    'bound',
    'bench',
    'begun',
    'beach',
    'audit',
    'audio',
    'asked',
    'argue',
    'arena',
    'aarey',
    'alike',
    'album',
    'adult',
    'yodled',
    'wholly',
    'veiled',
    'vassal',
    'varies',
    'system',
    'stupid',
    'slight',
    'shrimp',
    'shield',
    'series',
    'senior',
    'seldom',
    'sacred',
    'router',
    'rhythm',
    'review',
    'remedy',
    'relief',
    'regime',
    'regain',
    'ranked',
    'ranges',
    'radius',
    'racial',
    'quarts',
    'purity',
    'public',
    'profit',
    'praise',
    'poison',
    'podium',
    'plaque',
    'pieces',
    'phases',
    'perish',
    'patrol',
    'oxygen',
    'origin',
    'optics',
    'onions',
    'obtuse',
    'novice',
    'notion',
    'notify',
    'knight',
    'nerves',
    'misery',
    'merits',
    'myriad',
    'mentor',
    'lyrics',
    'liquid',
    'limits',
    'lethal',
    'legion',
    'lawyer',
    'killer',
    'juices',
    'island',
    'influx',
    'iconic',
    'haired',
    'grains',
    'gained',
    'fusion',
    'friend',
    'firing',
    'finely',
    'figure',
    'felony',
    'faulty',
    'famous',
    'either',
    'detail',
    'design',
    'deceit',
    'county',
    'comply',
    'church',
    'charge',
    'carrot',
    'cactus',
    'cabana',
    'buying',
    'bottle',
    'beyond',
    'believe',
    'barker',
    'ascend',
    'albeit',
    'afraid',
  ];
  const playSound = async () => {
    var randomIndex = Math.floor(Math.random() * wordList.length);
    console.log(randomIndex);
    if (replayButon === true) {
      randomIndex = wordIndex;
    }

    setReplayButton(true);
    setCorrectText(false);
    setWordIndex(randomIndex);
    ///sets the anwser and the word that is playing
    setAudioWord(wordList[randomIndex]);
    console.log(wordList[randomIndex]);
    setCorrectAnswer(wordList[randomIndex]);
    console.log('Loading Sound', audioPaths.paths[randomIndex]);
    try {
      const { sound } = await Audio.Sound.createAsync(
        audioPaths.paths[randomIndex]
      );
      setSound(sound);

      console.log('Playing Sound');
      await sound.playAsync();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const handleSubmit = () => {
    /// sets the answer to the answer
    const correctAnswerText = audioWord.toLowerCase();
    setCorrectAnswer(correctAnswerText);
    setShowText(false);
    setHintToken(true);
    /// makes input lowercase
    if (inputText.toLowerCase() === correctAnswerText) {
      ///changes score
      setScore(score + 1);
      setCorrectText(false); 
      
      setWordStreak(wordStreak + 1);
      if (wordStreak >= 9) {
        setBlueFire(true);
        setScore(score + 4);
        
        setRedFire(false);
      } else if (wordStreak >= 4) {
        setRedFire(true);
        setScore(score + 2);
      }
    } else {
      ///wrong
      setScore(score - 1);
      
      console.log('Incorrect Spelling! Try Again. Score:', score - 1);
      setWordStreak(0);
      setRedFire(false);
      setBlueFire(false);
      setCorrectText(true);
      
      
    }
    setReplayButton(false);
      setInputText('');
    
  };
  const hintUp = () => {
    if (hintToken === true){
    const wordLength = correctAnswer.length;

    const randomIndexTwo = Math.floor(Math.random() * wordLength);
    let hint = "";

    for(let i = 0; i < wordLength; i++){
      if (i === randomIndexTwo || i === randomIndexTwo + 1) {
      hint += correctAnswer[i];
    }else {
      hint+= "_ ";
    }
    }
    setHintText(hint);
    setShowText(true);
    if (score>6){
    setScore(score-1);
    }
    setHintToken(false);
    }
  };

  /// ui
  return (
    <View style={styles.container}>
      <Text style={styles.scoreText}>Score: {score}</Text>

      <TextInput
        style={styles.input}
        placeholder="Spell the word correctly"
        onChangeText={(text) => setInputText(text)}
        value={inputText}
      />
      {replayButon !== true && (
        <TouchableOpacity style={styles.playButton2} onPress={playSound}>
          <Image
            source={require('/assets/Buttons/PlayW.png')}
            style={{ width: 147, height: 50 }}
          />
        </TouchableOpacity>
      )}
      {replayButon !== false && (
        <TouchableOpacity style={styles.playButton2} onPress={playSound}>
          <Image
            source={require('/assets/Buttons/Replay.png')}
            style={{ width: 147, height: 50 }}
          />
        </TouchableOpacity>
      )}
      {replayButon !== false && (
        <TouchableOpacity style={styles.playButton3} onPress={handleSubmit}>
          <Image
            source={require('/assets/Buttons/Submit.png')}
            style={{ width: 147, height: 50 }}
          />
        </TouchableOpacity>
      )}
      {replayButon !== false && (
        <TouchableOpacity style={styles.playButton} onPress={hintUp}>
          <Image
            source={require('/assets/Hint.png')}
            style={{ width: 117.6, height: 40 }}
          />
        </TouchableOpacity>
      )}
      {correctText !== false && (
        <Text style={styles.correctAnswerText}>
          Correct Spelling: {correctAnswer}
        </Text>
      )}
      {showText !== false && (
        <Text style={styles.correctAnswerText}>
          Hint: {hintText}
        </Text>
      )}
      
      {redFire !== false && (
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={require('/assets/redFire.gif')}
          style={{ width: 100, height: 100, flexDirection: 'row', alignItems: 'center' }}
        />
        <Text style={styles.correctAnswerText}>Streak: {wordStreak}</Text>
        
        </View>
      )}
      {blueFire !== false && (
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={require('/assets/blueFire.gif')}
          style={{ width: 100, height: 100, flexDirection: 'row', alignItems: 'center' }}
        />
          <Text style={styles.correctAnswerText}>Streak: {wordStreak}</Text>
        </View>
      )}
    </View>
  );
}
/// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
  },
  playButton: {
    marginBottom: 20,
    alignItems: 'center',
  },
  playButton2: {
    marginTop: 20,
    alignItems: 'center',
  },
  playButton3: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  scoreText: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  correctAnswerText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    fontStyle: 'italic',
  },
});
