import { useNavigate } from "react-router-dom";

const Missing = () => {
  const navigate = useNavigate();
  return (
    <div className="Missing">
      <h1>Erro 404</h1>
      <br />
      <h3>Página não encontrada</h3>
      <br />
      <p>Desculpe, mas a página que você está procurando não existe.</p>
      <button className="btn" onClick={() => navigate("/")}>Voltar para a página inicial</button>
    </div>
  );
};

export default Missing;
