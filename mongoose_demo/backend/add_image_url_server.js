import { mongoose } from 'mongoose';

// Define your Mongoose schema
const taskSchema = new mongoose.Schema({
  date: String,
  task: [String],
  imageurl: { type: String, default: "" }, // Optional field
});

const TaskCollection = mongoose.model("TaskCollection", taskSchema, "Demo_Database");

const uri = "mongodb+srv://Ueki:QQWqjlApQcMVmcbP@cluster0.o3wje.mongodb.net/Demo_Database?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(
    uri, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB:', err));


// Function to add 'imageurl' to an existing document
async function addImageUrl(documentId, imageUrl) {
  try {
    // Update the document by its ID
    const updatedDoc = await TaskCollection.findByIdAndUpdate(
      documentId, // Document ID
      { $set: { imageurl: imageUrl } }, // Add or update the imageurl field
      { new: true } // Return the updated document
    );

    console.log("Updated Document:", updatedDoc);
  } catch (error) {
    console.error("Error adding imageurl:", error);
  } finally {
    mongoose.connection.close();
  }
}

// Example Usage
const documentId = "6755e101ec0b3c3f9b249f36"; // Replace with the actual ID
const imageUrl = "https://uekidemobucket.s3.ap-southeast-2.amazonaws.com/Ueki%202024-11-18%20at%207.39.22.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIA54WIGESI5NA76OE5%2F20241217%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Date=20241217T222848Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0yIkcwRQIgXGZ8WDo%2Fj4i9L3l8HlFRa9XK6uPkh3VLm8klWUUWA24CIQDNWm2%2BnbgY%2BbUe7mtxqCwfC9goc09H57KPGLp6exJs9CqZAghPEAAaDDk1NDk3NjMxNDUxMyIMZa1woUOuMPUqmbBhKvYBqRoldZ6s%2BntdYiVTN992aUeQCmCiT8ZJx1rD8DWRRTrK%2FVT%2B%2BG59vveOFA9lBM67VYL3YHYJ5c2eQf2kAcjlWzgt97DB0%2Fe1VCOyU8NzbFG6o80atS42zDWy3bHFhHTV%2FJyNm7ymTf%2FQloAKkLzFzXusEZTLkC%2Fz8wINtXH8SGZ9ggY83cka8vILIQ%2BuFysKV69Ndn7K3aTxvfbT6XIuUmMY4y5zfctYodA%2BFCb2A821ZywC7XFOle6zZZEOjagKi%2Buc4X5W9XbWClUht4lGegQhjxVunQWjy%2FzHs%2FU8YIlSD1PHIu12UPtmi2xoXFAHahfRckKYMJngh7sGOt8BNPy7ehMQkz%2FvpH5GrzQ%2Fzj5g0qBtrkphzVEDlvXd69lzOsokjyiPlmDiIxWgjhOuz0LriRfrZQ%2BdfANmRU%2FZHh%2Bzp2qAUlWMEZrROpkitU7A0GG3AbS9cD5cEb30ef5cwZ8USgSsmPfypaPH4Tw3Zkn9KK5DKPldAb4KxfZScUaRKHVuz%2BrUb69xlKKCKY8hL09Qx2CcqXomUVS%2FQoYzIaXpzvN5M%2FL8plJheQo6UzTmVS2jKbSe9htln9i0DBbgFetM6ge4g0oToP3syqYO4XRCQ0RU950%2BdYCrYr7P4A%3D%3D&X-Amz-Signature=abaace6a6be2bc837b01fe4ac0d7551aa60091f9b3e1681ce899c9cf4d97c6b6&X-Amz-SignedHeaders=host&response-content-disposition=inline"; // Your image URL

addImageUrl(documentId, imageUrl);