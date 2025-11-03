const { Resend } = require('resend');

class Mail {

    static async send(mailAddr, subject, html, from = 'orders@ordermail.xiaoxiongeats.com') {

        const resend = new Resend('re_4JmU5oJE_QAXsod5nMwvEAAaJXEnmba9e');

        const {data, error} = await resend.emails.send({
            from: from,
            to: mailAddr,
            subject: subject,
            html: html
        });

        if (error) console.error('发送失败:', error);
        else console.log('邮件ID:', data);
    }

}

module.exports = Mail;