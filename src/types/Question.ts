export type Question = {
    id: string;
    banca: string;
    nivel: string;
    cargo: string;
    concurso: string;
    ano:  number;
    assunto: string;
    enunciado: string;
    alternativas:[
      string,
      string,  
      string,
      string,
      string
    ];
    resposta: string;
    observacao:string
}