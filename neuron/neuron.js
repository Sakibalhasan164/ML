let sum;

function sign(number) {
  if (number >= 0) {
    return 1;
  } else {
    return -1;
  }
}

//writing a nuron class
class Neuron {
  constructor() {
    this.weights = [];
    for (let i = 0; i < 2; i++) {
      this.weights[i] = random(-1, 1);
    }
  }

  guess(inputs) {
    //the perameter is an array of inputs
    sum = 0;
    for (let j = 0; j < this.weights.length; j++) {
      //   console.log(inputs[j]);
      //   console.log(this.weights[j]);
      sum += inputs[j] * this.weights[j];
      // console.log(sum);
    }
    // console.log(sum);
    //pass the sum to the activation function
    let output = sign(sum);
    return output;
  }
  //the actiovation function

  //print the weights
  printWeights() {
    console.log(this.weights);
  }
  computeError(lebel, input) {
    //sum of the error
    let guess = this.guess(input);
    let error = lebel - guess;
    //optimize the error
    for (let w = 0; w < this.weights.length; w++) {
      this.weights[w] += error * input[w] * 0.01;
    }
  }
}
