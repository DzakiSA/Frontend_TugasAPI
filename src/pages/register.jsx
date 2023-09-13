import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export function Register() {
  const [validation, setValidation] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);



    await axios.post('http://localhost:8000/api/auth/register', data)
      .then(() => {x
        navigate('/login')
        Swal.fire(
          'Berhasil Membuat!',
          'Kamu Telah Berhasil Membuat Akun!',
          'success'
        )
      }).catch((error) => {
        setValidation(error.response.data);
      })
  }
  return (
    <div className="w-100 row justify-content-center">
      <div className="col-12 col-md-9 col-lg-7 col-xl-6">
        <h1 className="m-3 text-center">
          Registrasi
        </h1>
        <div className="card">
          <div className="card-body p-5">
            <form onSubmit={handleSubmit} method="POST">


            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="name" name="name"/>
                <label htmlFor="floatingInput">Nama</label>
                <span className="fw-bold fs-6 text-danger">{validation ? validation.name : ""}</span>
              </div>

              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput1" placeholder="name@example.com" name="email"/>
                <label htmlFor="floatingInput1">Email</label>
                <span className="fw-bold fs-6 text-danger">{validation ? validation.email : ""}</span>
              </div>

              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="password" name="password" />
                <label htmlFor="floatingInput">Password</label>
                <span className="fw-bold fs-6 text-danger">{validation ? validation.password : ""}</span>
              </div>

              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword2" placeholder="password" name="password_confirmation" />
                <label htmlFor="floatingInput2">Konfirmasi Password</label>
                <span className="fw-bold fs-6 text-danger">{validation ? validation.password_confirmation : ""}</span>
              </div>

              <div className="d-grid">
                <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign
                  in</button>
              </div>
              <hr className="my-4"/>
           <p className="text-center text-muted mt-5 mb-0">Udah Punya Akun?
                <a href="/login" className="fw-bold text-body">
                  <u>Login Disini</u>
                </a>
              </p>

            </form>

          </div>
        </div>
      </div>

    </div>
  )
}