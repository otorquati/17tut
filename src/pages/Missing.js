import { useNavigate } from "react-router-dom";

const Missing = () => {
  const navigate = useNavigate();
  return (
    <div className="Missing">
      <h1>Erro 404 | Esta página não existe</h1>
      <button className="btn" onClick={() => navigate("/")}>Voltar para a página inicial</button>
    </div>
  );
};

export default Missing;
