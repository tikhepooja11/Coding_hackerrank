//  With async awit inside try & catch block

const greetings = (name) => {
  console.log("hello" + name);
};
const processUserInput = () => {
  const promise = new Promise((resolve, reject) => {
    const name = null;
    if (name) {
      resolve(name);
    } else {
      reject(false);
    }
  });
  return promise;
};
const asyncFunctionCall = async () => {
  try {
    const result = await processUserInput();
    greetings(result);
  } catch (error) {
    console.log(error);
  }
};
asyncFunctionCall();

//  With promise.then & promise.catch methods
const greetings = (name) => {
  console.log("hello " + name);
};

const processUserInput = () => {
  const promise = new Promise((resolve, reject) => {
    const name = "pooja";
    if (name) {
      resolve(name);
    } else {
      reject(false);
    }
  });
  return promise;
};

const asyncFunctionCall = () => {
  processUserInput()
    .then((result) => {
      greetings(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

asyncFunctionCall();
