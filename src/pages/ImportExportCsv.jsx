import React, { useState } from 'react';
import { read, utils, writeFile } from 'xlsx';
import Button from 'react-bootstrap/Button';
import "../App.css";

const ImportExportCsv = () => {
    const [users, setUsers] = useState([]);

    const handleImport = (event) => {
        const files = event.target.files;
        if (files.length) {
            const file = files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                const wb = read(event.target.result);

                const sheets = wb.SheetNames;

                if (sheets.length) {
                    const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
                    setUsers(rows);
                }
            };
            reader.readAsArrayBuffer(file);
        }
    };

    const handleExport = () => {
        const headings = [['Name', 'Email', 'Field', 'Salary']];
        const wb = utils.book_new();
        const ws = utils.json_to_sheet(users, { header: headings });

        utils.book_append_sheet(wb, ws, 'Report');

        writeFile(wb, 'report.xlsx');
    };

    return (
        <>
            <div className="row mb-2 mt-5 ">
                <div className="title">
                    <h1>Upload Your CSV file</h1>
                </div>
                <div className="col-sm-12">
                    <div className="row choose-file">
                        <div className="col-md-6">
                            <div className="input-group">
                                <div className="custom-file">
                                    <input
                                        type="file"
                                        name="file"
                                        className="custom-file"
                                        id="inputFile"
                                        required
                                        onChange={handleImport}
                                        accept=".xlsx" // Updated to accept xlsx files
                                    />
                                    <label htmlFor="">Choose File</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 export-btn">
                            <Button onClick={handleExport} 
                            className="btn btn-scondary">
                                Export
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">

                    <table class="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Field</th>
                                <th scope="col">Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.length ? (
                                users.map((user, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{user.Name}</td> {/* Update to match headers */}
                                        <td>{user.Email}</td> {/* Update to match headers */}
                                        <td>{user.Field}</td> {/* Update to match headers */}
                                        <td>{user.Salary}</td> {/* Update to match headers */}
                                    </tr>
                                ))
                            ) : (
                                <tr colSpan='5' className="text-center ">
                                   no user Found
                                </tr>
                            )}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ImportExportCsv;
