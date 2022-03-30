const {validate} = require("../middlewares/validate")
const validations = require("../validations/ProductValidation")
const express = require("express")
const {
    add,
    getAllProducts,
    getProductById,
    deleteById,
    updateById,
    uploadPhoto
} = require("../controllers/ProductController")
const authenticateToken = require("../middlewares/authanticate")


const router = express.Router()

// ROUTES


// AUTHENTİCATİONLARI EKLEYECEĞİM. FRONTEND TARAFINI DENEMEK İÇİN GEÇİCİ OLARAK KALDIRDIM.

router.route("/getall").get(getAllProducts)
router.route("/add").post(add)
router.get("/:id", getProductById) // authenticateToken eklenecek 
router.delete("/:id",authenticateToken, deleteById)
router.route("/:id").put(authenticateToken, validate(validations.addValidation), updateById)
router.route("/:id/uploadphoto").post(uploadPhoto)

module.exports = router
