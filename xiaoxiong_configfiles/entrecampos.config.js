// ecosystem.config.js
module.exports = {
  apps: [{
    name: "XX_ENTRECAMPOS",
    script: "./server.js",
    cwd: "../dist",
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: "800M",
    env: {
      NODE_ENV: "production",
      USE_HTTPS: true,
      HTTPS_HEAD: "order",
      PORT: 501,
      QR_ADDR: "https://order.xiaoxiong.pt:501/client.html?table=",
      ADDR: "https://order.xiaoxiong.pt:501",
      ADMIN_PASS: "1015",
      TABLE_NUMBER: [[1, 35]],
      SAVE_ADDR: "save/xx_entrecampos",
      JWT_SECRET: "my_jwt_secret_key"
    }
  }]
}