// export function total(a, b) {
//   return a + b;
// }

// total("5", "7");     

export function total(a: number, b: number): number {
  return a + b;
}

total(5, 5);

// obj
const user: {
  firstName: string;
  age: number;
  isStudent: boolean;
  school: string[];
  score: (number | string)[];
} = {
  firstName: "Hieu",
  age: 22,
  isStudent: true,
  school: ["FPT", "Me Linh"],
  score: ["A", 1, 8, "B+"],
};

const review: {
  firstName: string;
  age: number;
  isStudent: boolean;
  school: string[];
  score: (number | string)[];
}[] = [user];
