import React from "react";
import PropTypes from 'prop-types';

import "./Table.scss"

const Table = ({header, rows}) => {
    return (
        <div className="table_wrapper">
            <table className="table_wrapper__table">
                <thead className="table_wrapper__header">
                    <tr>
                        {header.length && header.map((item) => <th key={item}>{item}</th>)}
                    </tr>
                </thead>
                <tbody className="table_wrapper__body">
                {!rows.length ? <tr><td>No Companies Matching the name</td></tr>
                : rows.map((row) => <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.company_name}</td>
                        <td>{row.currency_code}</td>
                        <td>{row.currency}</td>
                        <td>{row.department}</td>
                        <td>{row.sales_total}</td>
                        <td>{row.city}</td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
    )
}

Table.propTypes = {
    header: PropTypes.array.isRequired,
    rows: PropTypes.array.isRequired
};

export default Table;