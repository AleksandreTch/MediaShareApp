import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: "dev@mdx-ux.com", // Your email where you'll receive emails
      from: "deploy@mdx-ux.com", // your website email address here
      subject: `${req.body.subject}`,
      html: `<!DOCTYPE html>
      <html lang="en">
      <body>
        <div style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from ${req.body.name}<br>Email: ✉️${req.body.email} </h3>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${req.body.message}</p>
              <br>
              </div>
              <img src="https://mystuff.bublup.com/api/v1/uploads/001-i-eb1b853d-1740-4ae3-9b06-5e771eec14a7" class="logo-image" style="height: 50px;width: 50px;border-radius: 5px;overflow: hidden;">
              <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Powered By<br>Aleksandre Tcharbadze<br>Software Developer</p>
              <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
                <a href="https://alextch.com" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Website</a>
                <a href="https://github.com/AleksandreTch" style="text-decoration: none;margin: 8px;color: #9CA3AF;">GitHub</a>
                <a href="https://www.instagram.com/artkelevra/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Instagram</a>
                <a href="https://www.linkedin.com/in/alex-tch/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">LinkedIn</a>
              </div>
              </div>
      </body>
      </html>`,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;