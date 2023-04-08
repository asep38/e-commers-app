import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Color from "../components/Color";

const OurStore = () => {
  return (
    <>
      <Meta tittle={"Our Store"} />
      <BreadCrumb tittle="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-tittle">Shope By Categories</h3>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>

              <div className="filter-card mb-3">
                <h3 className="filter-tittle">Filter By</h3>
                <div>
                  <h5 className="sub-tittle">Availablity</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="">
                        In Stock (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        checked
                      />
                      <label className="form-check-label" htmlFor="">
                        Out Of Stock (0)
                      </label>
                    </div>
                  </div>
                  {/* price start */}
                  <h5 className="sub-tittle">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="From"
                      />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput1"
                        placeholder="to"
                      />
                      <label htmlFor="floatingInput1">To</label>
                    </div>
                  </div>
                  {/* price end */}
                  <h5 className="sub-tittle">Colors</h5>
                  <div>
                    <Color />
                  </div>
                  <h5 className="sub-tittle">Size</h5>
                </div>
              </div>

              <div className="filter-card mb-3">
                <h3 className="filter-tittle">Product Tags</h3>
              </div>

              <div className="filter-card mb-3">
                <h3 className="filter-tittle">Random Product</h3>
              </div>
            </div>
            <div className="col-9"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
