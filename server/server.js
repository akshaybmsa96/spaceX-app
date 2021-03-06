import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../src/App";
import { BASE_URL } from '../src/config/endPoints'
import axios from 'axios';
import staticHtml from './staticHtml'
import { INITIAL_DATA_ACTION } from '../src/appStore/reducerConstant'
import { createStore } from 'redux';
import reducer from "../src/appStore/reducer";
import { Provider } from "react-redux";

const store = createStore(reducer);
const app = express();
const PORT = 8000;

app.use(express.static("dist/public"));

/**
 * Express Api, returns react app as HTML to browser and initialze store
 */
app.get("/*", (req, res) => {

  axios.get(BASE_URL).then(response => {
      store.dispatch({type : INITIAL_DATA_ACTION, payload : { data : response.data}})
      const htmlMarkrup = renderToString( <Provider store={store}><App /></Provider>)
      res.send(staticHtml(htmlMarkrup,store.getState().data));
    })
    .catch( err => { 
      console.log('Error',err) 
      res.send("SomeThing went Wrong")
      })
    });

    // app.get("/test",((req,res) => {
    //   res.send("Hello Testing")
    // }))

    app.listen(process.env.PORT || PORT, () => {
      console.log(`Server is listening on ${PORT}`);
    });