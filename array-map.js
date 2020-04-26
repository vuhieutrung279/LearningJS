var rectangles = [
  { width: 10, height: 5 },
  { width: 20, height: 30 },
  { width: 4, height: 16 },
];
console.log(
  rectangles.map(function (x) {
    return x.width + x.height;
  })
);
