const fs = require('fs');
const { createFFmpeg } = require('@ffmpeg/ffmpeg');

const ffmpeg = createFFmpeg({ log: true });

(async () => {
  await ffmpeg.load();
  await ffmpeg.write('test.avi', './test.avi');
  await ffmpeg.transcode('test.avi', 'test.mp4');
  fs.writeFileSync('./test.mp4', ffmpeg.read('test.mp4'));
  process.exit(0);
})();