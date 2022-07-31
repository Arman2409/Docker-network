import UserModel from "./models/User.js";
import ResultModel from "./models/Result.js";
import logger from "./tools/logger.js";

const initialConfiguration = async () => {

    const newUser = new UserModel(
        {
        "email":"........",
        "password":".........."
        }
    )
    newUser.save((err, result) => {
        if(err) {
            logger.error(err);
        } else if (result) {
            logger.info("Initial data inserted successfully");
        };
    })

    
    const newResult = new ResultModel({
        "email":"....",
        "result":"......."
    });

    newResult.save((err,result) => {
       if(err){
        logger.error(err);
       } else if(result) {
          logger.info('Initial data inserted successfully');
       }
    })
}

export default initialConfiguration;