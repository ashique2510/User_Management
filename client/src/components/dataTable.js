import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'
import EditUser from '../EditUser/editUser';
import DataTable from 'react-data-table-component'
import axios from 'axios'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'

function Dashboard() {
    const [users, setusers] = useState([]);
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState([]);
    
    const getusers = async () => {
        try {
            const response = await axios.get("/server/user")
            setusers(response.data)
            console.log(response.data)
            setFilter(response.data);

        } catch (err) {
            console.log(err);
        }
    };

    const deleteUser = async(id)=>{
        try{
            const deleteUsers = await axios.delete(`/server/user/${id}`)
            getusers()
        }
       catch(err){
            console.log(err)
       }
    }

    const columns = [
        {
            name: "Name",
            selector: (row) => row.name,
            sortable: true
        },
        {
            name: " Phone Number",
            selector: (row) => row.phoneNumber,
        },
        {
            name: " Email",
            selector: (row) => row.email,
        },

        {
            name: " Edit",
            selector: (row) =>  <EditUser name = {row.name} phone = {row.phoneNumber} email={row.email} id={row._id} reload ={getusers}/>
        },
        {
            name: " Delete",
            selector: (row) => <FontAwesomeIcon  className='delete-icon' onClick={()=>{deleteUser(row._id)}}  icon={faTrashAlt} color='red' font-size='x-large' ></FontAwesomeIcon>,
        }

    ]
    useEffect(() => {
        getusers();
    }, [])

    useEffect(() => {
        const result = users.filter(country => {
            return country.name.toLowerCase().match(search.toLowerCase());
        })
        setFilter(result)
    }, [search])
    return (
        <div className='data-card' style={{ "padding": "100px 200px" }}>
            <DataTable columns={columns}
                data={filter}
                pagination
                fixedHeader
                fixedHeaderScrollHeight='900px'
                selectableRows
                selectableRowsHighlight
                highlightOnHover
                persistTableHead
                subHeader
                style={{ "border": "1px solid" }}
                subHeaderComponent={<input type='text' placeholder='Search Here' className='w-25 form-control' value={search} onChange={(e) => setSearch(e.target.value)} />} />
        </div>
    )
}


export default Dashboard