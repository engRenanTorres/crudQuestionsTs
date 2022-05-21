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

export type QuestionToSend = {
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

export type QuestionForm = {
  id: string;
  banca: string;
  nivel: string;
  cargo: string;
  concurso: string;
  ano:  number;
  assunto: string;
  enunciado: string;
  alternativa0:string,
  alternativa1:string,  
  alternativa2:string,
  alternativa3:string,
  alternativa4:string
  resposta: string;
  observacao:string
}

