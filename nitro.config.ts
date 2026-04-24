import { defineNitroConfig } from 'nitropack/config'

export default defineNitroConfig({
  preset: 'vercel',
  compatibilityDate: '2026-04-24',
  srcDir: 'dist/server',
  output: {
    dir: '.vercel/output',
    serverDir: '.vercel/output/functions/__nitro.func',
    publicDir: '.vercel/output/static'
  }
})
