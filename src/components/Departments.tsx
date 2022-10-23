import { useNavigate } from "react-router-dom";

const Departments = () => {
  const navigation = useNavigate();
  return (
    <section className="departments_header">
      <div className="container departments_header_container">
        <span
          onClick={() => navigation("/search?input=todos os departamentos")}
        >
          todos os departamentos
        </span>
        <span onClick={() => navigation("/search?input=brinquedos")}>
          brinquedos
        </span>
        <span onClick={() => navigation("/search?input=video games")}>
          video games
        </span>
        <span onClick={() => navigation("/search?input=televisões")}>
          televisões
        </span>
        <span onClick={() => navigation("/search?input=eletrodomésticos")}>
          eletrodomésticos
        </span>
        <span
          onClick={() => navigation("/search?input=celulares e smartphones")}
        >
          celulares e smartphones
        </span>
      </div>
    </section>
  );
};

export default Departments;
