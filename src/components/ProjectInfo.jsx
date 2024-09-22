import { projects } from "../data/constants";
import { useParams } from "react-router-dom";
const ProjectInfo = () => {
  const { id } = useParams();
  const projectId = Number(id);
  const details = projects.find((project) => project.id === projectId);
  console.log(details);
  return (
    <div
      style={{
        backgroundColor: "#090917",
        height: "100vh",
        maxWidth: "100vw",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src={details.image}
        alt="Project"
        style={{
          width: "650px",
          height: "400px",
          borderRadius: "30px",
          marginBottom: "35px",
        }}
      />
      <p style={{ color: "#ffffff", textAlign: "center" }}>
        {details.description}
      </p>
    </div>
  );
};

export default ProjectInfo;
