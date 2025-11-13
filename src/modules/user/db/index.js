import mongoose from "mongoose";
import Model from "../models/usermodel.js"

const getAll = async () => await Model.find();
const createData = async (data) => await Model.create(data);
const updateDataById = async (id, data) => await Model.findByIdAndUpdate(id, data)
const deleteDataById = async (id) => await Model.findByIdAndDelete(id)

export {
    getAll,
    createData,
    updateDataById,
    deleteDataById
}
