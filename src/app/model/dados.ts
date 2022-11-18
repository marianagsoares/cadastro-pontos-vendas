export interface IUf {
    id: number,
    sigla: string,
    nome: string
}

export interface IMunicipio {
    id: number,
    nome: string
}

export interface IFormulario {
    nome: string,
    estado: string,
    cidade: string,
    local: string,
    horarioInicio: string,
    horarioTermino: string
}