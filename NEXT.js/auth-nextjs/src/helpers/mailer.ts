// IMPORTANT: Which API route pattern should I follow?

// It's depends. If I want to verify the user from Back-End, then I need to follow the first route pattern. Contrary, if I want to verify the user from Front-End, then I need to follow the second route pattern.

// 1. domain.com/verifyToken/adasdasiafk (BACK-END VERIFY)
// 2. domain.com/verifyToken?token=adasdasiafk (FRONT-END VERIFY)

import nodemailer from 'nodemailer';
import { User } from '@/models/user.model';
import bcrypt from 'bcrypt';

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    // create a hashed token
    const hashedToken = await bcrypt.hash(userId.toString(), 12);

    if (emailType === 'VERIFY') {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === 'RESET') {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    const transport = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: '9f0da8af38c01d',
        pass: '1d4b92337feae7',
      },
    });

    const mailOptions = {
      from: 'hitesh@gmail.com',
      to: email,
      subject:
        emailType === 'VERIFY' ? 'Verify your email' : 'Reset your password',

      html: `<p>Click <a href="${
        process.env.DOMAIN
      }/verifyemail?token=${hashedToken}">here</a> to ${
        emailType === 'VERIFY' ? 'verify your email' : 'reset your password'
      } or copy and paste the link below in your browser. <br> ${
        process.env.DOMAIN
      }/verifyemail?token=${hashedToken}
        </p>`,
    };

    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
