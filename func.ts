function printPattern(char: string, numLines: number): void {
  let str: string = "";
  for (let i: number = 0; i < numLines; i++) {
    str = str + char;
    console.log(str);
  }
}

printPattern("A", 10);
