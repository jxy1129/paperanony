const originalAudioPlayer = document.getElementById('originalAudioPlayer');
const originalAudioList = document.getElementById('originalAudioList');
const denoisedAudioPlayer = document.getElementById('denoisedAudioPlayer');
const denoisedAudioList = document.getElementById('denoisedAudioList');
const enhancedAudioPlayer1 = document.getElementById('enhancedAudioPlayer1');
const enhancedAudioList1 = document.getElementById('enhancedAudioList1');
const enhancedAudioPlayer2 = document.getElementById('enhancedAudioPlayer2');
const enhancedAudioList2 = document.getElementById('enhancedAudioList2');
const enhancedAudioPlayer3 = document.getElementById('enhancedAudioPlayer3');
const enhancedAudioList3 = document.getElementById('enhancedAudioList3');

const originalAudioPlayer2 = document.getElementById('originalAudioPlayer2');
const originalAudioList2 = document.getElementById('originalAudioList2');
const denoisedAudioPlayer2 = document.getElementById('denoisedAudioPlayer2');
const denoisedAudioList2 = document.getElementById('denoisedAudioList2');
const enhancedAudioPlayer4 = document.getElementById('enhancedAudioPlayer4');
const enhancedAudioList4 = document.getElementById('enhancedAudioList4');
const enhancedAudioPlayer5 = document.getElementById('enhancedAudioPlayer5');
const enhancedAudioList5 = document.getElementById('enhancedAudioList5');

const originalAudioPlayer3 = document.getElementById('originalAudioPlayer3');
const originalAudioList3 = document.getElementById('originalAudioList3');
const denoisedAudioPlayer3= document.getElementById('denoisedAudioPlayer3');
const denoisedAudioList3 = document.getElementById('denoisedAudioList3');
const enhancedAudioPlayer6 = document.getElementById('enhancedAudioPlayer6');
const enhancedAudioList6 = document.getElementById('enhancedAudioList6');
const enhancedAudioPlayer7 = document.getElementById('enhancedAudioPlayer7');
const enhancedAudioList7 = document.getElementById('enhancedAudioList7');
const enhancedAudioPlayer8 = document.getElementById('enhancedAudioPlayer8');
const enhancedAudioList8 = document.getElementById('enhancedAudioList8');

const originalAudioPlayer4 = document.getElementById('originalAudioPlayer4');
const originalAudioList4 = document.getElementById('originalAudioList4');
const denoisedAudioPlayer4 = document.getElementById('denoisedAudioPlayer4');
const denoisedAudioList4 = document.getElementById('denoisedAudioList4');
const enhancedAudioPlayer9 = document.getElementById('enhancedAudioPlayer9');
const enhancedAudioList9 = document.getElementById('enhancedAudioList9');
const enhancedAudioPlayer10 = document.getElementById('enhancedAudioPlayer10');
const enhancedAudioList10 = document.getElementById('enhancedAudioList10');

// Add your audio samples here, replace with your actual file names
const originalAudioSamples = [
  {
    name: 'Sample 4',
    src: 'sample1.wav' // This is the audio file you just renamed
  }
];
const denoisedAudioSamples = [
  {
    name: 'Denoised Sample 4',
    src: 'Denoised1.wav' 
  }
];
const enhancedAudioSamples = [
  {
    name: 'Enhanced Sample 4.1',
    src: 'Enhanced1_1.wav' 
  },
  {
    name: 'Enhanced Sample 4.2',
    src: 'Enhanced1_2.wav'
  },
  {
    name: 'Enhanced Sample 4.3',
    src: 'Enhanced1_3.wav'
  }
];

const originalAudioSamples2 = [
  {
    name: 'Sample 3',
    src: 'sample2.wav' 
  }
];
const denoisedAudioSamples2 = [
  {
    name: 'Denoised Sample 3',
    src: 'Denoised2.wav' 
  }
];
const enhancedAudioSamples2 = [
  {
    name: 'Enhanced Sample 3.1',
    src: 'Enhanced2_1.wav' 
  },
  {
    name: 'Enhanced Sample 3.2',
    src: 'Enhanced2_2.wav'
  },
];

const originalAudioSamples3 = [
  {
    name: 'Sample 2',
    src: 'sample3.wav' 
  }
];
const denoisedAudioSamples3 = [
  {
    name: 'Denoised Sample 2',
    src: 'Denoised3.wav' 
  }
];
const enhancedAudioSamples3 = [
  {
    name: 'Enhanced Sample 2.1',
    src: 'Enhanced3_1.wav' 
  },
  {
    name: 'Enhanced Sample 2.2',
    src: 'Enhanced3_2.wav'
  },
  {
    name: 'Enhanced Sample 2.3',
    src: 'Enhanced3_3.wav'
  },
];

const originalAudioSamples4 = [
  {
    name: 'Sample 1',
    src: 'sample4.wav' 
  }
];
const denoisedAudioSamples4 = [
  {
    name: 'Denoised Sample 1',
    src: 'Denoised4.wav' 
  }
];
const enhancedAudioSamples4 = [
  {
    name: 'Enhanced Sample 1.1',
    src: 'Enhanced4_1.wav' 
  },
  {
    name: 'Enhanced Sample 1.2',
    src: 'Enhanced4_2.wav'
  },
];

// Create list items for each audio sample
function createAudioList(audioPlayer, audioList, audioSamples) {
  audioSamples.forEach(sample => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href="#" data-src="${sample.src}">${sample.name}</a>`;
    listItem.addEventListener('click', function(event) {
      event.preventDefault();
      audioPlayer.src = this.querySelector('a').dataset.src;
      audioPlayer.load();
      audioPlayer.play();
    });
    audioList.appendChild(listItem);
  });
}

createAudioList(originalAudioPlayer, originalAudioList, originalAudioSamples);
createAudioList(denoisedAudioPlayer, denoisedAudioList, denoisedAudioSamples);
createAudioList(enhancedAudioPlayer1, enhancedAudioList1, [enhancedAudioSamples[0]]);
createAudioList(enhancedAudioPlayer2, enhancedAudioList2, [enhancedAudioSamples[1]]);
createAudioList(enhancedAudioPlayer3, enhancedAudioList3, [enhancedAudioSamples[2]]);

createAudioList(originalAudioPlayer2, originalAudioList2, originalAudioSamples2);
createAudioList(denoisedAudioPlayer2, denoisedAudioList2, denoisedAudioSamples2);
createAudioList(enhancedAudioPlayer4, enhancedAudioList4, [enhancedAudioSamples2[0]]);
createAudioList(enhancedAudioPlayer5, enhancedAudioList5, [enhancedAudioSamples2[1]]);

createAudioList(originalAudioPlayer3, originalAudioList3, originalAudioSamples3);
createAudioList(denoisedAudioPlayer3, denoisedAudioList3, denoisedAudioSamples3);
createAudioList(enhancedAudioPlayer6, enhancedAudioList6, [enhancedAudioSamples3[0]]);
createAudioList(enhancedAudioPlayer7, enhancedAudioList7, [enhancedAudioSamples3[1]]);
createAudioList(enhancedAudioPlayer8, enhancedAudioList8, [enhancedAudioSamples3[2]]);

createAudioList(originalAudioPlayer4, originalAudioList4, originalAudioSamples4);
createAudioList(denoisedAudioPlayer4, denoisedAudioList4, denoisedAudioSamples4);
createAudioList(enhancedAudioPlayer9, enhancedAudioList9, [enhancedAudioSamples4[0]]);
createAudioList(enhancedAudioPlayer10, enhancedAudioList10, [enhancedAudioSamples4[1]]);
