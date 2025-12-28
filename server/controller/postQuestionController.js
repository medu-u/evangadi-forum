import {StatusCodes} from 'http-status-codes';
import dbconnection from '../DB/dbconfig.js';
import xss from 'xss'
import {v4 as uuidv4} from 'uuid'

const postQuestion = async (req, res) => {
    try{
        const {title , description , tag } = req.body;
        const userId = req.user?.userid;
//validate required fields 
        if(!title || !description || !userId) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: "Title, Description and userId required",
            });
        }
        // Validate tag length 
        if(tag && tag.length > 20){
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: "Tag must be less than 20 characters",
            }); 
        }
        // Sanitize inputs to prevent XSS
        
    }
}

