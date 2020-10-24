import express, { Router, Request as Req, Response as Res } from 'express';

const router: Router = express.Router();

router.get('/', ( req: Req, res: Res ) => {
  return res.status(200).json({ msg: "Hello World from auth!"})
});

export default router