const express = require("express");
const mongoose = require("mongoose");
const debug = require('debug')('ippopay:models:index')

mongoose.connect(process.env.DB_HOST,
  {
    useNewUrlParser: true,
    retryWrites: true,
    w: "majority",
  }
);
debug("DB HOST ", process.env.DB_HOST)
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  debug("DB Connected successfully");
});

