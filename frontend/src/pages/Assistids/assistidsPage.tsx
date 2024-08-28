import { ListAssistids } from "./assistidsView";

export const AssistidsPage: React.FC = () => {
  const cadastros = [
    {
      nome: "Mariza de Angelis",
      cpf: "123.456.789-00",
      dependentes: [
        { nome: "Lorenzo Henrique G. Ferro", idade: "1", relacao: "Filho" },
        { nome: "Lucas Henrique G. Ferro", idade: "9", relacao: "Filho" },
      ],
    },
    // ... outros cadastros
  ];

  return (
    <div style={{marginTop:"100px"}}>
      <ListAssistids cadastros={cadastros} />
    </div>
  );
};


