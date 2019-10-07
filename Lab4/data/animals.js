const mongoCollections = require("../mongoCollections");
const animals = mongoCollections.animals;
const {ObjectId} = require('mongodb');


  async function create(name, animalType) {
    const animalCollection = await animals();
    if (!name || !animalType) throw 'Invalid Title and description';
    let params = {
      name: name,
      animalType: animalType
    };
    const insertInfo = await animalCollection.insertOne(params)
    if (insertInfo.insertedCount === 0) throw "Could not add parameters";

    const newId = insertInfo.insertedId; 
    const task = await get(newId);
    return task;
  }
    
  async function getAll(id) {
    if (!id) throw "You must provide an id to search for";
    const animalCollection = await animals();
    const all_animals = await animalCollection.find({}).toArray();
    
    if (all_animals=== null) throw "None found";

    // return animal;
    console.log(all_animals);
  }

  async function get(id) {
    if (!id) throw "No ID is present";
    const animalCollection  = await animals();
    const anim = await animalCollection.findOne({ _id: ObjectId(id)});
    if(anim === null) throw 'No ID found';
      return anim;
  }

  async function remove(id) {
    //If no id is provided, the method should throw.
    if (!id) throw "No ID has been provided";

    let animaldelete = this.get(id);
    const animalCollection = await animals();
    const deletionInfo = await animalCollection.removeOne({ _id: ObjectId(id)});
    
    if (deletionInfo.deletedCount == 0) {
      throw `Could not delete dog with id of ${id}`;
    }
    return animaldelete;
  }

  async function rename(id, newName) {
    if (!id) throw "You must provide an id to search for";
    // if (id === null) throw "NO ID"
    if (!newName) throw "You must provide a name for your animal";
    // if (newName === null) throw "Invalid name"
    const animalCollection = await animals();
    const updateInfo = await animalCollection.update({ _id: ObjectId(id)}, {$set : {name : newName}});
    if (updateInfo.modifiedCount == 0) {
      throw "could not update dog successfully";
    }

    return await this.get(id);
  }

  module.exports = {
    get,
    getAll,
    create,
    remove,
    rename
};



