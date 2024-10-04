import express from "express"
import  {socket}  from "socket.io"
import http from "http"
import { Chess } from "chess.js"

const app = express();
const server = http.createServer(app);

const io = socket(server);
const chess = new Chess();


