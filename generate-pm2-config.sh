#!/bin/bash

# PM2 Configuration Generator Script
# Creates ecosystem.config.js in ./config/ directory
# Usage: ./generate-pm2-config.sh [PORT] [app_name]

# Configuration
CONFIG_DIR="./config"


# Display help information
function show_help() {
    echo "PM2 Configuration Generator"
    echo "Usage: $0 [PORT] [app_name]"
    echo ""
    echo "Arguments:"
    echo "  PORT       Application port number (1024-65535)"
    echo "  app_name   Base name (converted to UPPERCASE for PM2)"
    echo ""
    echo "Example:"
    echo "  $0 6002 sc_almada"
    echo "  - Creates SC_ALMADA running on port 6002"
    echo "  - Uses sc_almada for resource paths"
}

# Create config directory if missing
function ensure_config_dir() {
    if [ ! -d "$CONFIG_DIR" ]; then
        echo "Creating config directory: $CONFIG_DIR"
        mkdir -p "$CONFIG_DIR"
    fi
}

# Validate arguments
function validate_arguments() {
    # Check argument count
    if [ $# -lt 2 ]; then
        echo "Error: Missing required arguments"
        show_help
        exit 1
    fi

    # Validate port
    if ! [[ $1 =~ ^[0-9]+$ ]] || [ $1 -lt 1024 ] || [ $1 -gt 65535 ]; then
        echo "Error: Invalid port number. Must be 1024-65535"
        exit 1
    fi
}

# Main execution
validate_arguments "$@"

PORT=$1
APP_NAME_LOWER=$2
AUTO_RUN="${3:-false}"

APP_NAME_UPPER=$(echo "$APP_NAME_LOWER" | tr '[:lower:]' '[:upper:]')

# Ensure config directory exists
ensure_config_dir

CONFIG_FILE="$CONFIG_DIR/$APP_NAME_LOWER.config.js"


SCRIPT_DIR=$(realpath "dist")
SCRIPT_FILE="$SCRIPT_DIR/server.js"

echo "script_dir: $SCRIPT_DIR"
echo "script_file: $SCRIPT_FILE"

# Generate configuration file
cat > "$CONFIG_FILE" <<EOF
module.exports = {
  apps: [{
    name: "$APP_NAME_UPPER",
    script: "$SCRIPT_FILE",
    cwd: "$SCRIPT_DIR",
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: "800M",
    env: {
      NODE_ENV: "production",
      USE_HTTPS: true,
      HTTPS_HEAD: "v",
      PORT: $PORT,
      QR_ADDR: "https://v.xiaoxiong.pt:$PORT/client.html?table=",
      TABLE_NUMBER: [[1,50]],
      SAVE_ADDR: "save/$APP_NAME_LOWER",
      ENABLE_ROAST_DUCK: "false",
    }
  }]
}
EOF

# Output results
echo "Configuration generated successfully:"
echo "  - Location: $(realpath "$CONFIG_FILE")"
echo "  - Application Name: $APP_NAME_UPPER"
echo "  - Port: $PORT"
echo "  - Resource Path: save/$APP_NAME_LOWER"

# PM2 interaction
if ! $AUTO_RUN; then
	read -p "Start application with PM2 now? (y/n) " -n 1 -r
	echo
	
	if [[ $REPLY =~ ^[Yy]$ ]]; then
		AUTO_RUN=true
	fi
fi

if $AUTO_RUN; then
    if ! command -v pm2 &> /dev/null; then
        echo "Error: PM2 not found. Install with: npm install -g pm2"
        exit 1
    fi
    
    if pm2 start "$CONFIG_FILE"; then
        echo "PM2 application started"
        echo "  - Monitor: pm2 monit"
        echo "  - Logs: pm2 logs $APP_NAME_UPPER"
    else
        echo "Error: Failed to start PM2 application"
        exit 1
    fi
else
    echo "You can start later with:"
    echo "  pm2 start $CONFIG_FILE"
fi