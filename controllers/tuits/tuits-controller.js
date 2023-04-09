/*import posts from "./tuits.js"

let tuits = posts;*/
import * as tuitsDao from './tuits-dao.js'   //import the dao

const createTuit = async (req, res) => {
    const newTuit = req.body;
    //newTuit._id = (new Date()).getTime()+''; id create by database
    newTuit.likes = 0;
    newTuit.liked = false;
    //tuits.push(newTuit);
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit); //respond with new tuit

}
const findTuits = async (req, res) => {    //asynchronous function
    const tuits = await tuitsDao.findTuits();    //retrieve tuits from database
    res.json(tuits);
}
const updateTuit = async (req, res) => {
    const tuitIdToUpdate = req.params.tid;
    const updates = req.body;
    /*const tuitIndex = tuits.findIndex(
        (t) => t._id === tuitIdToUpdate)
    tuits[tuitIndex] = {
        ...tuits[tuitIndex], ...updates
    }*/
    const status = await tuitsDao.updateTuit(tuitIdToUpdate, updates);   //update database
    res.json(status);
}
const deleteTuit = async (req, res) => {
    const tuitIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitIdToDelete);
    res.json(status);    //respond with status object
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}