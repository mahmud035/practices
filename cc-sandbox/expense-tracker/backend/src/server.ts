import mongoose from 'mongoose'
import dotenv from 'dotenv'
import app from './app'

dotenv.config()

const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI as string

async function main() {
  await mongoose.connect(MONGO_URI)
  console.log('MongoDB connected')
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
}

main().catch(console.error)
