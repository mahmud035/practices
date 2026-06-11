import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  text: string;
}

/**
 * Sends a transactional email via SMTP.
 *
 * If any SMTP_* env var is missing the function logs and returns without
 * throwing — the app runs fully in dev without mail credentials. Callers
 * MUST invoke this fire-and-forget (`void sendEmail(...).catch(...)`) so a
 * transport failure can never fail the HTTP response.
 */
const sendEmail = async (options: EmailOptions): Promise<void> => {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    console.warn(`[email skipped] SMTP not configured — would send "${options.subject}" to ${options.to}`);
    return;
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  await transporter.sendMail({
    from: SMTP_USER,
    to: options.to,
    subject: options.subject,
    text: options.text,
  });
};

export default sendEmail;
