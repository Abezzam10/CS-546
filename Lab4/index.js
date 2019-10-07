const animals = require("./data/animals");
//const connection = require("./mongoConnection");

async function main() {

  try {
    const Sasha = await animals.create("Sasha", "Dog");
    console.log(Sasha);
  } catch (error) {
    console.log(error);
  }

  try {
    const Lucy = await animals.create("Lucy", "Dog");
    console.log(Lucy);
  } catch (error) {
    console.log(error);
  }

  try {
    const Duke = await animals.create("Duke", "Walrus");
    console.log(Duke);
  } catch (error) {
    console.log(error);
  }
  try {
    const remove = await animals.remove("5d97cab9c2971f82ac9c1e4b");
    console.log(remove);
  } catch (error) {
    console.log(error);
  }

  try {
    const rename = await animals.rename("5d97cab9c2971f82ac9c1e4a", "new Name");
    console.log(rename);
  } catch (error) {
    console.log(error);
  }

}
main();
