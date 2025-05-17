import swaggerAutoGen from "swagger-autogen";

const doc = {
    info: {
        title: "Roger's Contact API",
        description: "API docs for MongoDB CRUD contacts API"
    },
    host: "express-server-c7bg.onrender.com"
};

const outputFile = './swagger-output.json';
const routes = ["./server.js"];

swaggerAutoGen()(outputFile, routes, doc);