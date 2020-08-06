// import * as SparkPost from "sparkpost";

// const client = new SparkPost(process.env.SPARKPOST_API_KEY);

// export const sendEmail = async (recipients: string, url: string) => {
//   const response = await client.transmissions.send({
//     options: {
//       sandbox: true,
//     },
//     content: {
//       from: "testing@sparkpostbox.com",
//       subject: "Confirm Email",
//       html: `<html>
//         <body>
//         <p>Testing SparkPost - the world's most awesomest email service!</p>
//         <a href="${url}">confirm email</a>
//         </body>
//         </html>`,
//     },
//     recipients: [{ address: recipients }],
//   });
//   console.log(response);
// };


// Use at least Nodemailer v4.1.0
import * as nodemailer from "nodemailer";

export const sendEmail = async (recipients: string, url: string, linkText: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'jazmyn.orn@ethereal.email',
      pass: 'h3PzKCKbCUrrZWMu6h'
    }
  });

  // Message object
  const message = {
    from: 'Sender Name <sender@example.com>',
    to: `Recipient <${recipients}>`,
    subject: 'Nodemailer is unicode friendly ✔',
    text: 'Hello to myself!',
    html: `<html>
      <body>
      <p>Testing SparkPost - the world's most awesomest email service!</p>
      <a href="${url}">${linkText}</a>
      </body>
      </html>`,
  };

  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log('Error occurred. ' + err.message);
    }

    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });
};
