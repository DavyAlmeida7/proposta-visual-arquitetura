import { defineNitroConfig } from 'nitropack/config'

export default defineNitroConfig({
  preset: 'vercel',
  srcDir: 'dist/server',
  output: {
    dir: '.vercel/output',
    serverDir: '.vercel/output/functions/__nitro.func',
    publicDir: '.vercel/output/static'
  }
})
