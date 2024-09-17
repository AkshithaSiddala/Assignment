import app from './app'
import dotenv from 'dotenv';
import logger from './Config/logger';


dotenv.config();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    logger.info(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});