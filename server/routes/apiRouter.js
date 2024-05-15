const apiRouter = require('express').Router();

const userRouter = require('./userRouter');
const cardsRouter = require('./cardsRouter');
const museumsRouter = require('./museumsRouter');
const newsRouter = require('./newsRouter');
const favoritesMuseumsRouter = require('./favoritesMuseumsRouter');
const visitedMuseumsRouter = require('./visitedMuseumsRouter');
const recallRouter = require('./recallRouter');

apiRouter.use('/user', userRouter);
apiRouter.use('/cards', cardsRouter);
apiRouter.use('/museums', museumsRouter);
apiRouter.use('/news', newsRouter);
apiRouter.use('/favorites', favoritesMuseumsRouter);
apiRouter.use('/visited', visitedMuseumsRouter);
apiRouter.use('/recall', recallRouter);
module.exports = apiRouter;
