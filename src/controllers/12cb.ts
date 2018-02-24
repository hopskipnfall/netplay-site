"use strict";

import async from "async";
import request from "request";
import { Response, Request, NextFunction } from "express";


/**
 * GET /api
 * List of API examples.
 */
export let get12cb = (req: Request, res: Response) => {
  res.render("12cb/index", {
    title: "API Examples"
  });
};
