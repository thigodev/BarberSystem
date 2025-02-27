import nodemailer, { type Transporter } from "nodemailer";
import type IMailProvider from "../models/IMailProvider";
import type ISendMailDTO from "../dtos/ISendMailDTO";

import IMailTemplateProvider from "../../MailTemplateProvider/models/IMailTemplateProvider";

export default class EtherealMailProvider implements IMailProvider {
  private client: Transporter;

  constructor(private readonly mailTemplateProvider: IMailTemplateProvider) {
    nodemailer.createTestAccount().then((account) => {
      const transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass,
        },
      });

      this.client = transporter;
    });
  }

  public async sendMail({
    to,
    from,
    subject,
    templateData,
  }: ISendMailDTO): Promise<void> {
    const template = await this.mailTemplateProvider.parse(templateData);

    const message = await this.client.sendMail({
      from: {
        name: from?.name ?? "Time Devops",
        address: from?.email ?? "time@devops.com.br",
      },
      to: {
        name: to.name,
        address: to.email,
      },
      subject,
      html: template,
    });

    console.log("Message sent: %s", message.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(message));
  }
}
