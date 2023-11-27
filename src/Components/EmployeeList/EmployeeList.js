import React, { useState } from 'react'
import Footer from '../Footer/Footer'
import './EmployeeList.css'
import Employee_data from './EmployeeList.json'

export default function EmployeeList() {
    const [employeeName, setEmployeeName] = useState('')
    const filteredData = Employee_data.Employee_list.filter((e) => e.Name.toLowerCase().includes(employeeName.toLowerCase()))
    return (
        <div className='Employee-list-Component' style={{ height: filteredData.length > 2 ? "100%" : "100vh" }}>
            <div className='Header-section'>
                <img src='Header-icon.png' alt='Header-icon' className='Header-icon'></img>
            </div>
            <div className='Search-and-employeelist'>
                <span className='number'>4</span>
                <img src='Moptro-logo.png' alt='Moptro-logo' className='Moptro-logo'></img>

                <div className='Search_section'>
                    <input type='text' placeholder='Search with name' className='Search-Input' onChange={(e) => setEmployeeName(e.target.value)}></input>
                    <img src='Search-icon.png' alt='Search-icon' className='Search-icon'></img>
                </div>

                <div className='Employee-list-section'>
                    {
                        filteredData.map((employee, id) => {
                            return (
                                <div key={id} className={employee.EMP_ID % 2 === 0 ? 'Each-Employee-Even' : 'Each-Employee-Odd'}>
                                    
                                    <div>
                                        <p className='Employee-Detail'>EMP ID : <span style={{ color: "#a7a8a8", fontWeight: "bold",paddingLeft:"10px" }}>{employee.EMP_ID}</span></p>
                                        <p className='Employee-Detail'>Name : <span style={{ color: "#a7a8a8", fontWeight: "bold",paddingLeft:"10px" }}>{employee.Name}</span></p>
                                        <p className='Employee-Detail'>DOB : <span style={{ color: "#83571d", fontWeight: "bold",paddingLeft:"10px" }}>{employee.DOB}</span></p>
                                        <p className='Employee-Detail'>Role : <span style={{ color: "#287034", fontWeight: "bold",paddingLeft:"10px" }}>{employee.Role}</span></p>
                                    </div>
                                    <span className='Employee-Id'>
                                        {employee.EMP_ID}
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {
                filteredData.length === 0 && <p style={{ textAlign: "center", color: "#aaa", fontWeight: "500" }}>No Employee Found</p>
            }
            <Footer />
        </div>
    )
}
