import React,{useState} from 'react'
import { Link } from 'react-router-dom';

const Register = () => {

    const [inputVal, setInputVal] = useState({
        name:"",
        email:"",
        age:"",
        mobile:"",
        work:"",
        address:"",
        desc:""
    })

    const setData = (e) => {
        const {name,value} = e.target;
        setInputVal({...inputVal,[name]:value});
    }

    return (<>
        <div className="container">

            <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
            <form className="mt-4">
                <div className="row">
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" name="name" value={inputVal.name}  onChange={setData} className="form-control" autoComplete="Off" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                        <input type="email" name="email" value={inputVal.email} onChange={setData}  className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Age</label>
                        <input type="number" name="age" value={inputVal.age} onChange={setData}  className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Mobile</label>
                        <input type="number" name="mobile" value={inputVal.mobile} onChange={setData} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Work</label>
                        <input type="text" name="work" value={inputVal.work} onChange={setData} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                        <input type="text" name="address" value={inputVal.address} onChange={setData} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                        <textarea type="text" name="desc" value={inputVal.desc} onChange={setData} className="form-control" id="exampleInputPassword1" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>

        </div>
    </>)
}

export default Register