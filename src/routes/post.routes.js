const { PostController } = require("../controllers/post.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const express = require("express");
const multer = require("multer");
const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

/* POST /api/posts [protected] {image-file}*/
router.post(
  "/",
  authMiddleware /* req.user = userData */,
  upload.single("image"),
  PostController
);

module.exports = router;
