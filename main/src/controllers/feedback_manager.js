const db = require('../utils/db');
const socket = require('../utils/socket');
const mailAPI = require("../utils/mail");

class FeedbackManager {

    constructor() {

    }

    async init() {
        console.log("[Feedback Manager] Init")

        socket.registerMessage("g_feedback", this.feedback.bind(this));

        socket.registerMessage("get_all_feedback", this.get_all.bind(this))
    }

    feedback(data){
        const from = data.restaurant;
        const feedback = data.feedback;

        const value = {
            from: from,
            ...feedback
        }

        const id = this.save_to_db(value);

        this.send_callback_email(data.feedback.email, id)
    }

    save_to_db(data){
        const id = this.makeUnicode()
        const value = {
            id:id,
            value: data,
        }
        db.set(db.feedbackTable, value)
        return id
    }

    makeUnicode(){
        const timestamp = Date.now()
        const randomNumber = Math.floor(Math.random()*8999 + 1000);
        return String(timestamp) + String(randomNumber);
    }

    async get_all() {
        const all = await db.getAll(db.feedbackTable);
        if(!all){
            return []
        }
        return all
    }

    send_callback_email(email, id){
        const html = `
        <!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Feedback Received</title>
  </head>
  <body
    style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;"
  >
    <table
      role="presentation"
      cellspacing="0"
      cellpadding="0"
      border="0"
      width="100%"
      style="max-width: 420px; margin: 0 auto; background-color: #ffffff;"
    >
      <!-- Header Section -->
      <tr>
        <td
          style="padding: 40px 24px 24px 24px; text-align: center; background: linear-gradient(135deg, rgba(0, 0, 0, 0.03) 0%, rgba(0, 0, 0, 0.01) 100%);"
        >
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: 0 auto 16px auto;">
            <tr>
              <td style="text-align: center; vertical-align: middle;">
                <img src="https://cdn.shopify.com/s/files/1/0923/4042/0985/files/XIAOXIONG_LOGO.png?v=1766177011" alt="XIAOXIONG Logo" style="max-width: 200px; height: auto;" />
              </td>
            </tr>
          </table>
          <h1 style="margin: 0 0 8px 0; font-size: 24px; font-weight: 700; color: #1a1a1a;">Feedback Received</h1>
          <p style="margin: 0; font-size: 14px; color: #6b7280;">We have received your feedback, thank you!</p>
          <p style="margin: 0; font-size: 14px; color: #6b7280;">Feedback ID: ${id}</p>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="padding: 24px; text-align: center; background-color: #fafafa;">
          <p style="margin: 0 0 8px 0; font-size: 14px; color: #666666;">Thank you for your feedback!</p>
          <p style="margin: 0; font-size: 12px; color: #999999;">© 2025 XIAOXIONG®</p>
        </td>
      </tr>
    </table>
  </body>
</html>
        `

        mailAPI.send(email, "Feedback Receipt", html );
    }
}

const feedbackManager = new FeedbackManager();
module.exports = feedbackManager;