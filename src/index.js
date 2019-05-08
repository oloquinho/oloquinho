const { exec } = require('child_process')
const { promisify } = require('util')
const path = require('path')
const fs = require('fs')

const execPromise = promisify(exec)

const mainPath = path.dirname(fs.realpathSync(__filename))
const soundPath = path.join(mainPath, './audios/oloquinho')
const windowsScript = path.join(mainPath, './forWindows.jscript')

const oloquinho = () => {
    const commandsForEachPlatform = {
      linux: `paplay ${soundPath}.ogg`,
      win32: `cscript /E:JScript /nologo "${windowsScript}" "${soundPath}.mp3"`,
      darwin: `afplay ${soundPath}.mp3`,
    }

    const platform = process.platform
    const codeToExecute = commandsForEachPlatform[platform]

    return execPromise(codeToExecute)
}

module.exports = oloquinho
