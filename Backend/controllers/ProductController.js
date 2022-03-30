
const logger = require("../logs/ProductLogger");
const {addProduct, _getAllProducts, _getProductById,_deleteById,_updateById, _addProductPhoto} =
 require("../services/ProductService")
 const {updateProductImage} = require("../scripts/utils/FileHelper")



const add = async (req,res) => {


    // console.log("req body", req.body.categ)
    // console.log("req files", req.files)
    
    const fileName = await updateProductImage(req,res)
    const result = await addProduct(req,res,fileName);
    res.status(201).send("result")    
   
}

const getAllProducts = async (req,res) => {

   const result = await _getAllProducts()

   logger.log({level: "info", message: result})

   res.status(200).send(result)    
}

const getProductById = async (req,res) => {
    const result = await _getProductById(req)
    logger.log({    
        level: "info",
        message: result,
    })
    res.status(200).send(result)
}

const deleteById = async (req,res) => {
   
    const result = await _deleteById(req)
    logger.log({
        level: "info",
        message: result,
    })
    res.status(200).send("Succesfully deleted")
}

const updateById = async (req,res) => {

    const result = await _updateById(req)

    res.status(200).send(result)
}

const uploadPhoto = async (req,res) => {
 
  const filename = await updateProductImage(req,res)
    console.log("filename",filename)
  const result = await _addProductPhoto(req,filename)

    res.status(200).send("ekleme işlemi başarılı")
}

module.exports = {
    add,
    getAllProducts,
    getProductById,
    deleteById,
    updateById,
    uploadPhoto,
}