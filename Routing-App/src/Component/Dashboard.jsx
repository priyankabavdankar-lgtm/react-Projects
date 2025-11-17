import { Outlet, useNavigate} from 'react-router-dom'
export function Dashboard() {
    let navigate=useNavigate();
  return (
    <div>
        <button onClick={()=>navigate("/dashboard/student")} className='btn btn-primary'>View Student Dashboard</button>
        <button onClick={()=>navigate("/dashboard/teacher")} className='btn btn-danger'>View Teacher Dashboard</button>

      <Outlet></Outlet>
    </div>
  )
}