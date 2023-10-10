const asyncHandler = require('express-async-handler');

const registerUser = asyncHandler(async , (req, res)=>{
    res.json({message:"Register the user"});
});