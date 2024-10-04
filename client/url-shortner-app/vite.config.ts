import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),{
    // Enable Babel with the preset we defined
    name: 'babel',
    configFile: './.babelrc.json',
  }],
  server :{
    open:true,
    port:3000
  }
})
