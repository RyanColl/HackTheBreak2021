import express from "express";

export const getHelpRouter = express.Router();


getHelpRouter.get("/covid19", (req, res) => {
    res.render("covid19");
});

getHelpRouter.get("/cannabis", (req, res) => {
    res.render("cannabis");
});

getHelpRouter.get("/mental_illness", (req, res) => {
    res.render("mental_illness");
});

getHelpRouter.get("/suicide", (req, res) => {
    res.render("suicide");
});

getHelpRouter.get("/improve", (req, res) => {
    res.render("improve");
});

getHelpRouter.get("/services", (req, res) => {
    res.render("suicide");
});


