import mongoose from 'mongoose'

import log from '../logger'

const connectToDB = async (url: string): Promise<void> => {
  await mongoose.connect(url)
  log.info('CONNECTED TO MONGODB')
}

export default connectToDB
