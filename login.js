const { Router } = require("express");
const router = Router();
const loginRouter = Router();
loginRouter.get("/google",(req,res)=>
res.send("Bienvenido a la pagina mi chavo")
);
module.exports = { loginRouter };
