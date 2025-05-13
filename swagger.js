import swaggerAutoGen from "swagger-autogen";

const doc = {
    info: {
        title: "Roger's Contact API",
        description: "API docs for MongoDB CRUD contacts API"
    },
    host: "localhost:8080"
};

const outputFile = './swagger-output.json';
const routes = ["./server.js"];

swaggerAutoGen()(outputFile, routes, doc);