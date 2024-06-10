const newman = require("newman")

newman.run({
    collection: "json-collection/Reqres.in_postman_collection.json",
    environment: "json-env/Reqres.in_postman_environment.json",
    reporters: ["cli", "htmlextra"]
})
