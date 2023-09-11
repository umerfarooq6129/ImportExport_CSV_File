import React from 'react'

const about = () => {
    return (
        <>
            <h1>How it work?</h1>
            <br />
            <ol>
                <li>Create your csv file through excel sheet</li>
                <li>Click on choose file and upload your csv file here</li>
                <li>When you upload user table will automatically fill</li>
                <li>If you wanna Export this table content then simply click on export button</li>
                <li>You can also change your export extension name</li>
                <li>Go to ImportExportCsv file and search in handleExport function</li>
                <li>Change the extension in writeFile</li>
            </ol>
        </>
    )
}

export default about
