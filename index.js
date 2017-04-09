const {app, BrowserWindow} = require('electron');

let parent = null;
let child = null;

app.on('ready', () => {
    parent = new BrowserWindow();
    child = new BrowserWindow({
        width: 300,
        height: 300,
        parent: parent,
        modal: true,
        show: false
    });
    child.loadURL(`file://${__dirname}/child.html`);
    child.once('ready-to-show', () => {
        child.show();
    });
});