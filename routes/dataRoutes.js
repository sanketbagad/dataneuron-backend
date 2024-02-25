import {getUsers, deleteUser, addUser, editUser} from "../controllers/dataControllers.js"
import express from "express";

const router = express.Router();

router.route("/").get(getUsers).post(addUser);
router.route("/:id").put(editUser).delete(deleteUser);

export default router;
