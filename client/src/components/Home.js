import React from 'react'

const Home = () => {
    return (<>
        <div className="home_page container">
            <div className="add_btn mt-3 mb-2">
                <button className="btn btn-primary">Add User</button>
            </div>

            <table className="table">
                <thead>
                    <tr className="table-dark">
                        <th scope="col">id</th>
                        <th scope="col">Username</th>
                        <th scope="col">email</th>
                        <th scope="col">Job</th>
                        <th scope="col">Number</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Anurag</td>
                        <td>anurag@gmail.com</td>
                        <td>Developer</td>
                        <td>8397007400</td>
                        <td className="d-flex justify-content-between">
                            <button className="btn btn-primary">Check</button>
                            <button className="btn btn-warning">Update</button>
                            <button className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>)
}

export default Home