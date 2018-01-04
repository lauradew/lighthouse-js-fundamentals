function loopys() {
  for (var counter = 100; counter <= 200; counter++) {
    if (counter % 3 === 0 && counter % 4 === 0) {
      console.log("LoopyLighthouse");
    }
    else if (counter % 4 === 0) {
      console.log("Lighthouse");
    }
    else if (counter % 3 === 0) {
      console.log("Loopy");
    }
    else console.log(counter);
  }
}

loopys();