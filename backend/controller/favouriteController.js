import asyncHandler from "../middleware/asyncHandler.js";
import Favourite from "../models/favouriteModel.js";


// @des Add fvourite image.
// route POST /api/favourites
// @access private
const addFavourites = asyncHandler(async(req, res) => {
    const {id} = req.body;
 
    const existId = await Favourite.findOne({id});
    
    if(existId){
        throw new Error("Same Image already exists");       
    }
    // console.log('gdgfd')
    // Favourite.create({id}).then((e) => {
    //     console.log(e)
    // })
    const favourite = await Favourite.create({id});
    
    if(favourite){
        res.json({
            id: favourite.id
        })
    }else{
        res.status(400);
        throw new Error("Invalid Favourite data")
    };

});
// @des get Favourite Id.
// route GET /api/favourites
// @access private
const getFavouriteId = asyncHandler( async(req, res) => {
    const favo_ids = await Favourite.find({})
    if(favo_ids){
        res.status(200);
        res.json(favo_ids);
    }else{
        res.status(404);
        throw new Error("Data does not exist.")
    }
})

 export { 
    addFavourites,
    getFavouriteId,
 };