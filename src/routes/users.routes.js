const { Router } = require("express");
const ensureAuthentication = require("../middleware/ensureAuthentication");
const UsersController = require("../controllers/UsersController");
const multer = require("multer");

const uploadConfig = require("../configs/upload");
const UserAvatarController = require("../controllers/UserAvatarController");
const upload = multer(uploadConfig.MULTER);

const usersRoutes = Router();
const userController = new UsersController();
const userAvatarController = new UserAvatarController

usersRoutes.patch("/avatar", ensureAuthentication, upload.single("avatar"), userAvatarController.update)
usersRoutes.post("/", userController.create);
usersRoutes.put("/", ensureAuthentication, userController.update)
// usersRoutes.put("/:id", userController.update);

module.exports = usersRoutes;