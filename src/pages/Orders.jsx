import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group, Inject, Page, Sort, Resize, ExcelExport, PdfExport, ContextMenu } from '@syncfusion/ej2-react-grids';
import { ordersData, ordersGrid } from '../data/dummy';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const Orders = () => {
    const editing = { allowDeleting: true, allowEditing: true };
    return(
      <main className='mx-4 my-8 md:my-20 md:mx-12 p-4 md:p-8 rounded-3xl shadow-lg bg-white '>
        <Breadcrumbs title='Pages' subtitle='Orders'/>
        <GridComponent 
          dataSource={ordersData} 
          allowPaging
          allowSorting
          editSettings={editing}
        > 
            <ColumnsDirective>
              {ordersGrid.map((item,index) => (
                <ColumnDirective
                  key={index}
                  {...item}
                />
              ))}
            </ColumnsDirective>
            <Inject services={[Resize, Page, Sort, Filter, Group, ExcelExport, PdfExport, ContextMenu]}/>
        </GridComponent>
      </main>
    )
};
