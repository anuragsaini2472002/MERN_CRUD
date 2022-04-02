import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Detail = () => {
    return (<>
        <div className="container">
            <h1 style={{ fontWeight: 400, marginTop:30 }}>Welcome, Anurag Saini</h1>
            <Card sx={{ maxWidth: 600 }} className="mt-3">
                <CardContent>
                    <div className="detail_btn" style={{textAlign:'right'}}>
                    <button className="btn btn-primary mx-2"><EditIcon/></button>
                    <button className="btn btn-danger"><DeleteOutlineIcon/></button>
                    </div>
                    <img src='/photo.jpg' style={{height:80, width:80}} alt="profile image"/>

                    <div className="row">
                        <div className="left_view mt-2 col-lg-6 col-md-6 col-12">
                            <h6>Name: <span>Anurag Saini</span></h6>
                            <h6>Age: <span>21</span></h6>
                            <p>Email: <span>anuragsaini@.com</span></p>
                            <p>Work: <span>Developer</span></p>
                        </div>
                        <div className="right_view mt-3 col-lg-6 col-md-6 col-12">
                            <p>Mobile: <span>83970073222</span></p>
                            <p>Location: <span>Sonipat, Haryana</span></p>
                            <p>Description: <span>Excellent</span></p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    </>)
}

export default Detail