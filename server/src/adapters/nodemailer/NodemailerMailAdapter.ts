import { MailAdapter, SendMailData } from "../MailAdapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "e425d92aca9cf2",
        pass: "68dfc0f03eac0b"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Rickzinho Apelão <henriqrbackes@gmail.com>',
            to: 'Nicao <henriqrbackes@gmail.com>',
            subject,
            html: body,
        })
    }
}