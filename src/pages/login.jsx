import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


export function Login() {
  const [validation, setValidation] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    await axios.post('http://localhost:8000/api/auth/login', data)
      .then((response) => {
        Swal.fire(
          'Selamat Login!',
          'Kamu Telah Berhasil Login!',
          'success'  
        )
        localStorage.setItem('token', response.data.access_token);
        navigate('/home')
      }).catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Gagal Login!',
          text: 'Username/Password Kamu Salah',
        })
        console.log(error)
        setValidation(error.response.data);
      })
  }
  return (
    <div className="w-100 row justify-content-center">
      <div className="col-12 col-md-9 col-lg-7 col-xl-6">
        <h1 className="m-3 text-center">
        Login
        </h1>
        <div className="card">
          <div className="card-body p-5">
        

            <form onSubmit={handleSubmit} method="POST">

            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" />
                <label htmlFor="floatingInput">Email address</label>
                <span className="fw-bold fs-6 text-danger">{validation ? validation.email : ""}</span>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" />
                <label htmlFor="floatingPassword">Password</label>
                <span className="fw-bold fs-6 text-danger">{validation ? validation.password : ""}</span>
              </div>

              <div className="d-grid">
                <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Login</button>
              </div>
              <hr className="my-4"/>
              

              {/* <div className="form-outline mb-4">
                <label className="form-label" htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control form-control-lg"
                  name="email" />
                 <span className="fw-bold fs-6 text-danger">{validation ? validation.email : ""}</span>
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-control form-control-lg"
                  name="password" />
                <span className="fw-bold fs-6 text-danger">{validation ? validation.password : ""}</span>
              </div> */}

              {/* <button type="submit" className="btn btn-primary px-4 text-white">
                Login
              </button> */}

              <p className="text-center text-muted mt-5 mb-0">Tidak Punya Akun?
                <a href="/register" className="fw-bold text-body">
                  <u>Register Here</u>
                </a>
              </p>

            </form>

          </div>
        </div>
      </div>

    </div>
  )
}