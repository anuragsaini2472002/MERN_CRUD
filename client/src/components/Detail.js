import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {useParams, useNavigate, Link} from 'react-router-dom';

const Detail = () => {

    const history = useNavigate();

    const [getUserdata, setUserdata] = useState([])

    const {id} = useParams("");
    console.log(id)

    const getdata = async () => {

        const res = await fetch(`/getuser/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setUserdata(data)
            console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
    }, [])

    const deleteUser = async (id) =>{
        const res2 = await fetch(`/deleteuser/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        });
        const deleteData = await res2.json();
        console.log(deleteData);
        if (res2.status === 422 || !deleteData){
            console.log("Error in delete data");
        } else {
            console.log("Delete data successfully");
            history('/');
        }
    }
    
    return (<>
        <div className="container">
            <h1 style={{ fontWeight: 400, marginTop:30 }}>Welcome, {getUserdata.name}</h1>
            <Card sx={{ maxWidth: 600 }} className="mt-3">
                <CardContent>
                    <div className="detail_btn" style={{textAlign:'right'}}>
                   <Link to={`/edit/>${getUserdata._id}`}><button className="btn btn-primary mx-2"><EditIcon/></button></Link>
                    <button onClick={()=>deleteUser(getUserdata._id)} className="btn btn-danger"><DeleteOutlineIcon/></button>
                    </div>
                    <img src='/photo.jpg' style={{height:80, width:80}} alt="profile"/>

                    <div className="row">
                        <div className="left_view mt-2 col-lg-6 col-md-6 col-12">
                            <h6>Name: <span>{getUserdata.name}</span></h6>
                            <h6>Age: <span>{getUserdata.age}</span></h6>
                            <p>Email: <span>{getUserdata.email}</span></p>
                            <p>Work: <span>{getUserdata.work}</span></p>
                        </div>
                        <div className="right_view mt-3 col-lg-6 col-md-6 col-12">
                            <p>Mobile: <span>{getUserdata.mobile}</span></p>
                            <p>Location: <span>{getUserdata.address}</span></p>
                            <p>Description: <span>{getUserdata.desc}</span></p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    </>)
}

export default Detail