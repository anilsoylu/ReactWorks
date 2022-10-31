// function topla(a, b) {
//   return a + b;
// }

// const topla = function topla(a, b) {
//   return a + b;
// };

const hello = (name) => {
  //   console.log("hello " + name);
  console.log(`Hello ${name}`);
};

const topla = (a, b) => {
  return a + b;
};

const cikar = (a, b) => {
  return a - b;
};

const text = "Text";

const user = {
  name: "Anıl",
  surname: "Soylu",
};

const users = [
  {
    name: "Anıl",
    surname: "Soylu",
  },
  {
    name: "Cengizhan",
    surname: "Hakan",
  },
];

export { topla, cikar, text, user, users };

export default hello;
