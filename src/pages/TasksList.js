import {message, Table} from "antd";
import {useState} from "react";
import {api} from "../config/api";

export default function TasksList() {
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1)
    const [currentPageSize, setCurrentPageSize] = useState(10)
    const [tableData, setTableData] = useState([{name: 'Помыть попу'}, {name: 'Приготовить пюре'}])

    const getTableData = (page = currentPage, pageSize = currentPageSize) => {
        setLoading(true);
        api.get('lists', {params: {page: page, pageSize: pageSize}})
            .then((res) => {
                setTableData(res.data)
            })
            .catch(() => {
                message.error('Не удалось загрузить список задач');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const columns = [{
        title: 'Название задачи',
        dataIndex: 'name',
        key: 'name',
    },]

    const handlePageChange = (page, pageSize) => {
        setCurrentPage(page);
        getTableData(page, pageSize);
    };

    const handlePageSizeChange = (page, pageSize) => {
        setCurrentPageSize(pageSize);
        getTableData(page, pageSize);
    };
    return <>
        <p>Список задач</p>
        <Table
            loading={loading}
            columns={columns}
            dataSource={tableData}
            pagination={{
                current: currentPage,
                defaultPageSize: 10,
                pageSizeOptions: ['10', '20', '50', '100'],
                showSizeChanger: true,
                total: tableData.length,
                onChange: handlePageChange,
                onShowSizeChange: handlePageSizeChange,
                showTotal: (total) => {
                    return <>Всего записей: {total}</>;
                },
            }}
        />
    </>
}