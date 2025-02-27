type ITemplateVariables = Record<string, string | number>

export default interface IParseMailTemplateDTO {
  file: string
  variables: ITemplateVariables
}
