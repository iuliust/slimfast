import 'zone.js/dist/zone-node';
import { enableProdMode } from '@angular/core';
import { AppServerModuleNgFactory } from '../../aot/src/uni/app.server.ngfactory';
import * as express from 'express';
import { ngUniversalEngine } from './universal-engine';
import * as compression from 'compression';

enableProdMode();

const server = express();

server.use(compression());

// set our angular engine as the handler for html files, so it will be used to render them.
server.engine('html', ngUniversalEngine({
    bootstrap: [AppServerModuleNgFactory]
}));

// set default view directory
server.set('views', 'src');

// handle requests for routes in the app. ngExpressEngine does the rendering.
server.get(['/'], (req, res) => {
    res.render('index-aot.html', {req});
});

// handle requests for static files
server.get(['/*.js', '/*.css'], (req, res, next) => {
    const fileName: string = req.originalUrl;
    console.log(fileName);
    const root = fileName.startsWith('/node_modules/') ? '.' : 'src';
    res.sendFile(fileName, { root }, (err) => next(err));
});

// start the server
server.listen(3200, () => {
    console.log('listening on port 3200...');
});
