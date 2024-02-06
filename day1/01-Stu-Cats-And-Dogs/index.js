//object dogs
const dogs = {
  raining: true,
  noise: "Woof!",
  makeNoise: function () {
    if (this.raining) {
      console.log(this.noise);
    }
  },
};

// make the dog to bark
dogs.makeNoise();

const cats = {
  raining: true,
  noise: "Meow!",
  makeNoise: function () {
    if (this.raining) {
      console.log(this.noise);
    }
  },
};

//make cat meow
cats.makeNoise();

function massHysteria(dogs, cats) {
  if (dogs.raining && cats.raining) {
    console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
  } else {
    console.log("DOGS AND CATS DON`T LIVE TOGETHER");
  }
}

massHysteria(dogs, cats);
