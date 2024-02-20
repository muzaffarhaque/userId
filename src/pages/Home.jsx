import React, { useEffect, useState } from "react";
import commonGetApi from "../server/Api";
import { Image, Tab, Tabs } from "react-bootstrap";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState([]);
  const [searchVal,setSearchVal]=useState('');
  const location=useLocation();
  const navigate=useNavigate();
  const params = new URLSearchParams(location.search);
  async function getData() {
    const data = await commonGetApi(
      `https://randomuser.me/api/?page=1&results=12&seed=${params.get('q')??'alex'}`
    );
    if (data.status === 200) {
      setData(data.data);
    } else {
      toast.error("Some thing wrong to featch api");
    }
    console.log(data.data.results);
  }
  useEffect(() => {
    getData();
  }, [location.search]);
  const handlesearch = ()=>{
      if(searchVal){
        navigate({search:'q=' + searchVal})
      }
  }
  return (
    <section className="main-home-section">
      <header className="header ">
        <div className="container">
          <h4 className=" fs-28-18 fw-bold">User Details :-</h4>
        </div>
      </header>
      <div className="container">
        <div className="sub-header">
          <div className="input-searchbox">
            <input type="text" placeholder="Search user" className="serch-input fs-14-12 fw-semibold black-2" value={searchVal} onChange={(e)=>setSearchVal(e.target.value)} />
            <span className="serch-btn fs-14-12 fw-semibold  " onClick={handlesearch}> Aply </span>
          </div>
        </div>
      </div>

      <div className="user-details-card-wrapper">
        <div className="container">
          {data?.results.length>0?
           data?.results?.map((item, i) => {
            return (
              <div className="user-card-wrapper">
                <div className="image-box ">
                  <Image src={item?.picture?.large} alt="profile" />
                </div>
                <div className="content-box">
                  <div className="some-details">
                    <p className="fs-24-16 m-0 fw-bold">
                      {item.name.title} {item.name.first} {item.name.last}
                    </p>
                    <p className="fs-14-12 m-0 mt-1 fw-semibold black-2">
                      {item.cell}
                    </p>
                    <p className="fs-14-12 m-0 mt-1 fw-semibold black-2">
                      {item.location.country}
                    </p>
                  </div>
                  <Tabs
                    defaultActiveKey="Basic"
                    id="uncontrolled-tab-example"
                    className="mb-3 w-100 tab-frame"
                  >
                    <Tab eventKey="Basic" className="w-100" title="Basic">
                      <div className=" d-flex align-items-center gap-3 flex-wrap">
                        <div className="detail-frame d-flex">
                          <h6 className="fs-18-14 m-0 fw-semibold">
                            Email :-{" "}
                          </h6>
                          <p className="fs-18-14 m-0 fw-normal">{item.email}</p>
                        </div>
                        <div className="detail-frame">
                          <h6 className="fs-18-14 m-0 fw-semibold">
                            Gender :-{" "}
                          </h6>
                          <p className="fs-18-14 m-0 fw-normal">
                            {" "}
                            {item.gender}
                          </p>
                        </div>
                        <div className="detail-frame">
                          <h6 className="fs-18-14 m-0 fw-semibold">Age :- </h6>
                          <p className="fs-18-14 m-0 fw-normal">
                            {" "}
                            {item.dob.age}
                          </p>
                        </div>
                        <div className="detail-frame">
                          <h6 className="fs-18-14 m-0 fw-semibold">
                            Phone Number :-{" "}
                          </h6>
                          <p className="fs-18-14 m-0 fw-normal">
                            {" "}
                            {item.phone}
                          </p>
                        </div>
                        <div className="detail-frame">
                          <h6 className="fs-18-14 m-0 fw-semibold">NAT :- </h6>
                          <p className="fs-18-14 m-0 fw-normal"> {item.nat}</p>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="Addrace" title="Addrace">
                      <div className=" d-flex align-items-center gap-3 flex-wrap">
                        <div className="detail-frame">
                          <h6 className="fs-18-14 m-0 fw-semibold">
                            Street Name :-{" "}
                          </h6>
                          <p className="fs-18-14 m-0 fw-normal">
                            {" "}
                            {item.location.street?.name}
                          </p>
                        </div>
                        <div className="detail-frame">
                          <h6 className="fs-18-14 m-0 fw-semibold">
                            Street Number :-{" "}
                          </h6>
                          <p className="fs-18-14 m-0 fw-normal">
                            {" "}
                            {item.location.street?.number}
                          </p>
                        </div>
                        <div className="detail-frame">
                          <h6 className="fs-18-14 m-0 fw-semibold">City :- </h6>
                          <p className="fs-18-14 m-0 fw-normal">
                            {" "}
                            {item.location.city}
                          </p>
                        </div>
                        <div className="detail-frame">
                          <h6 className="fs-18-14 m-0 fw-semibold">
                            State :-{" "}
                          </h6>
                          <p className="fs-18-14 m-0 fw-normal">
                            {" "}
                            {item.location.state}
                          </p>
                        </div>
                        <div className="detail-frame">
                          <h6 className="fs-18-14 m-0 fw-semibold">
                            Postcode Number :-{" "}
                          </h6>
                          <p className="fs-18-14 m-0 fw-normal">
                            {" "}
                            {item.location.postcode}
                          </p>
                        </div>
                        <div className="detail-frame">
                          <h6 className="fs-18-14 m-0 fw-semibold">
                            Country :-{" "}
                          </h6>
                          <p className="fs-18-14 m-0 fw-normal">
                            {" "}
                            {item.location.country}
                          </p>
                        </div>
                        <div className="detail-frame">
                          <h6 className="fs-18-14 m-0 fw-semibold">
                            coordinates Number :-{" "}
                          </h6>
                          <p className="fs-18-14 m-0 fw-normal">
                            {" "}
                            {item.location.coordinates.latitude} ,{" "}
                            {item.location.coordinates.longitude}
                          </p>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="contact" title="Contact">
                      <div className=" d-flex align-items-center gap-3 flex-wrap">
                        <div className="detail-frame">
                          <h6 className="fs-18-14 m-0 fw-semibold">
                            Phone Number :-{" "}
                          </h6>
                          <p className="fs-18-14 m-0 fw-normal">
                            {" "}
                            {item.phone}
                          </p>
                        </div>
                        <div className="detail-frame">
                          <h6 className="fs-18-14 m-0 fw-semibold">
                            Email :-{" "}
                          </h6>
                          <p className="fs-18-14 m-0 fw-normal">
                            {" "}
                            {item.email}
                          </p>
                        </div>
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            );
          }):
          <h4 className="py-5 text-center">
            Result Not Found....
            </h4>}
        </div>
      </div>
    </section>
  );
}
