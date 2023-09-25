import express from 'express';
import './config';

const app = express();

console.log('🚀 ---------------------------------------- 🚀');
console.log(`🚀 --------- RUNNING ON PORT ${process.env.PORT} --------- 🚀`);
console.log('🚀 ---------------------------------------- 🚀');

app.use(express.json());

app.listen(process.env.PORT);