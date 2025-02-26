import fs from "fs";
import foodModel from "../models/foodModel.js";

//add food item

const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const food = new foodModel({
    name: req.body.name,
    price: req.body.price,

    description: req.body.description,
    category: req.body.category,
    image: image_filename,
  });
  try {
    await food.save();
    res.json({ success: true, message: "Food item is added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error occurred" });
  }
};

const listFood = async (req, res) => {
  try {
    let foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`,()=>{});
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({success:true,message:"Item Removed Successfully "})
  } catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"});
    

  }
};

export { addFood, listFood, removeFood };
