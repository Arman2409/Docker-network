import Results from '../models/Result.js';
import logger from '../tools/logger.js';

async function getResult(req, res) {
    if (req.session.user) {
      const userEmail = req.session.user.email
      await  Results.findOne({email: userEmail}, (err, cursor) => {
          if (err)  {
            logger.error(err)
            res.status(500).send("Error Occured")
          }
          if (cursor) {
            res.status(200);
            res.send(cursor.result);
          } else {
            res.status(204).send("Result Not Found");
          }
      }).clone().catch(function(err){ logger.error(err)});
    } else {
      res.status(401).send('Not Authorized, Error Occured').end();
      logger.error('Not Authorized To Get Result')
    }
}

export default getResult;