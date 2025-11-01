async function main() {
  let firstName = String(await input("What is your first name?: "));
  let lastName = String(await input("What is your last name?: "));
  let fullname = firstName + " " + lastName;
  output(fullname.replace(/o/g, "a"));

  let largeNum = Number(await input("Please enter a number larger than 10 [Please input a whole number]: "));
  let smallNum = Number(await input("Please enter a number smaller than 10 [Please input a whole number]: "));
  output(largeNum%smallNum);
  }
