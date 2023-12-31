// https://github.dev/alitnk/nestjs-prisma-monorepo/tree/main/libs

// cannot use on client-side https://github.com/prisma/prisma/issues/6219

// import { PrismaClient } from '@prisma/client'
// import { config } from 'dotenv';

// import path from "path";
// import process from "process"

// console.log("path", path.basename(), path.dirname())
// console.log("sds", process.cwd())

// config({path: process.cwd() + "/.env"});
// if (typeof window === "undefined") {
//     config();
// } else {
//     config({path: process.cwd() + "/.env"});
// }

// module.exports = require('@prisma/client');


import { PrismaClient } from '@prisma/client'
import { config } from 'dotenv';
// const { PrismaClient } = require('@prisma/client');
// const { config } = require('dotenv');

config();
declare global {
    var prisma: PrismaClient;
}

let prisma: PrismaClient;
if (typeof window === "undefined") {
  if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
  }
}

export { prisma };
export * from '@prisma/client'
// module.exports = { prisma };