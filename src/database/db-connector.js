const { MONGODB_STRING, ADMIN_EMAIL, ADMIN_PASSWORD, ADMIN_USERNAME } = require("../config/environment")
const { MongoClient, UUID } = require("mongodb")
const bcrypt = require("bcrypt")

const client = new MongoClient(MONGODB_STRING);

const connectDatabase = async () => {
    try {
        await client.connect()
        const adminDb = client.db("users")
        const adminCollection = await adminDb.collection("admin")
        const existingAdmin = await adminCollection.findOne({ email: ADMIN_EMAIL });
        if (!existingAdmin) {
          bcrypt.genSalt(10, (err, salt) => {
            if (err) {
              console.error("Error generating salt:", err);
              return;
            }
      
            bcrypt.hash(ADMIN_PASSWORD, salt, (err, hash) => {
              if (err) {
                console.error("Error hashing password:", err);
                return;
              }
      
              adminCollection.insertOne({ id: crypto.randomUUID(), username: ADMIN_USERNAME, email: ADMIN_EMAIL, password: hash });
              console.log("Admin user created successfully");
            });
          });

        }
    
        console.log("[mongodb] Connection stablish successfully")

    } catch (error) {
        console.log("[mongodb] Connection failed")
        console.log(error)
    }

}


module.exports = {
    connectDatabase: connectDatabase,
    client: client
}