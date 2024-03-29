import asyncHandler from '../middleware/asyncHandler.js'
import PostAt from '../models/postAtModel.js'

// @des Post your ad
// @route POST /api/postat
// @access private

const registerPostAt = asyncHandler( async (req, res) => {
    const {
        firstName,
        lastName,
        type,
        saleOrRent,
        phoneNumber,
        message,
        email
    } = req.body;
    const existPostAt = await PostAt.findOne({email});

    if(existPostAt) {
        throw new Error("Same Data Already Exists");
    }
    const postat = await PostAt.create({
        firstName,
        lastName,
        email,
        phoneNumber,
        message,
        type,
        saleOrRent
    });
    if(postat){
        res.json({
            firstName: postat.firstName,
            lastName: postat.lastName,
            type: postat.type,
            email: postat.email,
            message: postat.message,
            phoneNumber: postat.phoneNumber,
            saleOrRent: postat.saleOrRent
        });
    }else{
        res.status(400);
        throw new Error("Invalid Postat Data");
    }
});

export { registerPostAt };