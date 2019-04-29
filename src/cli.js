#!/usr/bin/env node

const oloquinho = require('./index')

// TODO: when tail call optimization is implemented on NodeJS, simplify this.
const globalMode = async () => {
  while(true)
    await oloquinho()
}

globalMode()
