// ecosystem.config.js
module.exports = {
  apps: [{
    name: "server",
    script: "./src/app.js",
    interpreter: 'authbind',
    interpreter_args: '--deep node',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: "800M",
    env: {
      NODE_ENV: "production",
    }
  }]
}