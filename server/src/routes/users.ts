import express, { Router, Request as Req, Response as Res } from 'express'

const router: Router = express.Router();

router.get('/users', ( req: Req, res: Res ) => {
  return res.status(200).json({ msg: "Hellow world from users" });
});

export default router