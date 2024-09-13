import jwt from 'jsonwebtoken'

export const authenticateJWT = (req, res, next) => {
     const token = req.header("Authorization").replace("Bearer ", "");
     if (token) {
          jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
               if (err) {
                    return res.sendStatus(403);
               }
               req.token = token;
               req.user = user;
               next();
          });
     } else {
          res.status(401).json({message: "user not authorized"});
     }
}