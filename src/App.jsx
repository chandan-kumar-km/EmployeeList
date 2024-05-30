import EmployeeCard from "./components/EmployeeCard"
import { useState, useEffect } from "react";
function App() {

  const [data, setdata] = useState([]);
  const [employData, setEmployData] = useState(null);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(a => setdata(a))
      .catch(err => console.error(err))
  }

  const setemp = (data) => {
    setEmployData(data)
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <>
      <div className="box bg-neutral-500 h-screen w-screen flex justify-center items-center">
        <div className="w-2/3 h-2/3 bg-slate-100 border-2xl border-gray-400 shadow-2xl p-5">
          <p className="text-center">Employee Sheet</p>
          <div className="flex h-5/6">
            <div className="w-1/3 m-2 border-b-slate-300 border-2 p-5 shadow-xl shadow-red-200">
              <p className="text-center">Employee list</p>
              <div className="h-5/6 overflow-scroll text-center no-scrollbar overflow-y-auto ">
                {data.map((employ) => (
                  <EmployeeCard key={employ.id} employ={employ} setemp={setemp} />
                ))}
              </div>
            </div>
            <div className="w-2/3 border-b-slate-300 border-2 p-5 shadow-xl shadow-red-200 m-2">
              <p className="text-center">Employee Details</p>
              {console.log(employData)}
              {employData && <div className="text-sm h-5/6 overflow-scroll no-scrollbar overflow-y-auto ">
                <p className=""> Name : {employData.name}</p>
                <p className=""> Username : {employData.username}</p>
                <p className=""> Email : {employData.email}</p>
                <p className=""> Phone : {employData.phone}</p>
                <p className=""> Company Name : {employData.company.name}</p>
                <p className=""> Comapny Catch Phase : {employData.company.catchPhrase}</p>
                <p className=""> Company Bs : {employData.company.bs}</p>
                <p className=""> Website : {employData.website}</p>
                <p className=""> Address : {employData.address.street}{employData.address.suite}{employData.address.city}</p>
                <p className=""> ZipCode : {employData.address.zipcode}</p>
              </div>}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
