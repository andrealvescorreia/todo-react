import { ToDoCard } from "../../components/ToDoCard"
import './styles.css'
export function Home() {
  return (
    <div className="home">
        <ToDoCard name="Tarefa 1"></ToDoCard>
        <ToDoCard name="Tarefa 2" description="Descricao"></ToDoCard>
        <ToDoCard name="Tarefa 3 com um nome muito grande se ta maluco mermao nome grande do caraio azideia" description="Descricao"></ToDoCard>
        <ToDoCard name="Tarefa 4" description="Uma descricao muito grande de uma tarefa que precisa ser feita o quanto antes! Mais texto é necessário para que essa caixa tenha mais de uma linha de texto."></ToDoCard>
    </div>
  )
}
