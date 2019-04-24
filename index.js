#!/usr/bin/env node

const exect = require('child_process').exec;
const path = require('path');
const fs = require('fs');

const mainPath = path.dirname(fs.realpathSync(__filename));
const soundPath = path.join(mainPath, './oloquinho');

const exec = (cmd) =>
    exect(cmd, function (error, stdout, stderr) {
       if(error)
           console.error(error);
    });

const oloquinho = () => {
    const commandsForEachPlatform = {
      linux: `paplay ${soundPath}.ogg`,
      windows: path.join(mainPath, './forWindows.vbs')+' '+soundPath+'.mp3',
      mac: `afplay ${soundPath}.mp3`,
    }

    const platform = process.platform;
    const codeToExecute = commandsForEachPlatform[platform];

    return exec(codeToExecute);
}

module.exports = oloquinho;

if(!module.parent)
    oloquinho();
