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
              <h3>From: ${req.body.name}<br>Email: ✉️${req.body.email} </h3>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${req.body.message}</p>
              <br>
              </div>
              <img src="https://mystuff.bublup.com/api/v1/uploads/001-i-eb1b853d-1740-4ae3-9b06-5e771eec14a7" class="logo-image" style="height: 50px;width: 50px;border-radius: 5px;overflow: hidden;">
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