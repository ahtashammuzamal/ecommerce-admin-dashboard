import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import { kanbanData, kanbanGrid } from "../data/dummy";
import { Breadcrumbs } from "../components/Breadcrumbs";

export const Kanban = () => {
  return (
    <main className='mx-4 my-8 md:my-20 md:mx-12 p-4 md:p-8 rounded-3xl shadow-lg bg-white '>
          <Breadcrumbs title='App' subtitle='Kanban' />
          <KanbanComponent
            id="kanban"
            keyField="Status"
            dataSource={kanbanData}
            cardSettings={{contentField: 'Summary', headerField: 'Id'}}
          >
            <ColumnsDirective>
              {kanbanGrid.map((item, index) => (
                <ColumnDirective key={index} {...item}/>
              ))}
            </ColumnsDirective>
          </KanbanComponent>
    </main>
  )
}