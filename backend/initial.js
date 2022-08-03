import UserModel from "./models/User.js";
import ResultModel from "./models/Result.js";
import logger from "./tools/logger.js";

const initialConfiguration = async () => {

    const newUser = new UserModel(
        {
        "email":"user@email.com",
        "password":"$2b$10$iKvuotyrjX4oZXel7eDjYu8CPR6qS.5o0qXMrkTFFY7k3G4gKpK1e"
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
        "email":"user@email.com",
        "result":"8"
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