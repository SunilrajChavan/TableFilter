import React from "react";

import SearchBox from "../SearchBox/SearchBox"
import Table from '../Table/Table'

class TableWithSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            loading: true,
            tableHeader: ["ID", "COMPANY NAME", "Currency Code", "Currency", "Departmant", "Sales Total", "City"],
            tableData: []
        };
    }

    componentDidMount = () => {
        try {
            fetch('/data/MOCK_DATA.json')
            .then(response => {
                return response.json();
            }).then(tableData => {
                this.setState({
                    tableData,
                    loading: false
                })
            });
        } catch (error) {
            console.log(error);
        }
    }

    debounce = (callback, delay) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => callback(...args), delay);
        };
    };

    debounceLog = this.debounce(text => this.setState({search: text}), 100)

    onSearch = search => {
        this.debounceLog(search);
    };

    filterData = (tableData, searchText) => {
        return tableData.filter((item) => item.company_name.toLowerCase().includes(searchText.toLowerCase()))
    }

    render() {
        const { search, loading, tableHeader, tableData } = this.state;
        return(
            <div>
                {loading ? <div>....Loading</div>
                : <div>
                    <SearchBox searchValue={search} onSearch={this.onSearch}></SearchBox>
                    <Table header={tableHeader} rows={this.filterData(tableData, search)}></Table>
                </div>
                }
            </div>
        );
    }

}

export default TableWithSearch;