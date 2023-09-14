import { DataGrid, GridColDef } from '@mui/x-data-grid';
  
type Column = {
    name: string;
    type: string;
}
type Row = Line[]
type Line = any

type QueryData = {
    columns: Column[];
    rows: Row[];
  };

type CustomTableProps = {
    queryData: QueryData;
};


const CustomTable: React.FC<CustomTableProps> = ({ queryData }) => {

        const { columns, rows } = queryData;
        
        let idCounter = 0

        let formattedData = rows.map(row => {
            return row.reduce((acc, cell, index) => {
                acc[columns[index].name] = cell.data;
                return acc;
            }, { id: idCounter++ });
        });

        const transformedColumns = columns.map(column => ({
            field: column.name,
            headerName: column.name,
            flex:1
        }));

        const col_list: GridColDef[] = transformedColumns;

    return(
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={formattedData}
                columns={col_list}
                initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                },
                }}
                pageSizeOptions={[5, 10]}
            />
        </div>
    )
}

export default CustomTable