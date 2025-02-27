import handlebars from 'handlebars'
import fs from 'fs'

import type IParseMailTemplateDTO from '../dtos/IParseMailTemplateDTO'
import type IMailTemplateProvider from '../models/IMailTemplateProvider'

class HandlebarsMailTemplateProvider implements IMailTemplateProvider {
  public async parse ({ file, variables }: IParseMailTemplateDTO): Promise<string> {
    const templateFileContent = await fs.promises.readFile(file, {
      encoding: 'utf-8'
    })
    const parseTemplate = handlebars.compile(templateFileContent)

    return parseTemplate(variables)
  }
}

export default HandlebarsMailTemplateProvider
