// Define a new type alias
type Point = {
  x: number;
  y: number;
};

type Pin = {
  latitude: number;
  longitude: number;
}

// Use the new type
let point: Point = {
  x: 10,
  y: 20,
};

console.log(point); // Output: { x: 10, y: 20 }
