// ecosystem.config.js
module.exports = {
  apps: [{
    name: "",
    script: "./src/app.js",
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: "800M",
    env: {
      NODE_ENV: "production",
      PORT: 80,
    }
  }]
}