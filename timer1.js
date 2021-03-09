const times = process.argv.slice(2);

const timer = (times) => {
  for (const time of times) {
    if (time >= 0 && !isNaN(time)) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, time * 1000)
    }
  }
}; 

timer(times);
