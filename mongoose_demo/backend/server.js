import { mongoose } from 'mongoose';
import express from 'express';
import cors from 'cors';

const port = 5001;
const app = express();
app.use(cors());
app.use(express.json());
const uri = "mongodb+srv://Ueki:QQWqjlApQcMVmcbP@cluster0.o3wje.mongodb.net/Demo_Database?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(
    uri, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

const daySchema = new mongoose.Schema({
    date: { type: String, required: true },
    task: { type: [String], required: true },
    imageUrl: { type: String, required: false },
    });

const Day = mongoose.model('Day', daySchema, 'Demo_Database');


app.get('/api/date', async (req, res) => {
    try {

        const day = await Day.find({ });
        if (!day || day.length === 0) {
            return res.status(404).json({ message: 'No tasks found for this date' });
        }
        console.log('Day data:', day);
        setTimeout(()=> {
            res.status(200).json(day); 
        }, 2000)
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ message: 'Error fetching tasks' });
    }
});
  
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

process.on('SIGINT', async () => {
    console.log('SIGINT received. Closing MongoDB connection...');
    await mongoose.disconnect();
    console.log('MongoDB connection closed');
    process.exit(0);  // Exit the process
  });
