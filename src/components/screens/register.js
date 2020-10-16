import React from 'react';


function Register(){
  return(
    <div id="register">
    {/* <!--::regervation_part start::--> */}
    <section className="regervation_part section_padding">
        <div className="container">
            <div className="row align-items-center regervation_content">
                <div className="col-lg-7">
                    <div className="regervation_part_iner">
                        <form>
                            <h2>Register Your ambulance</h2>
                            <div className="form-row">
                            <div className="form-group col-md-6">
                                    <input type="text" className="form-control" id="inputEmail4" placeholder="First Name" />
                            </div>
                                <div className="form-group col-md-6">
                                    <input type="text" className="form-control" id="inputPassword4"
                                        placeholder="Last Name" />
                                </div>

                                <div className="form-group col-md-6">
                                    <input type="text" className="form-control" id="inputEmail4" placeholder="Contact" />
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="password" className="form-control" id="inputPassword3"
                                        placeholder="Enter Password" />
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="password" className="form-control" id="inputPassword4"
                                        placeholder="verify  password" />
                                </div>
                                <div className="form-group col-md-12">
                                    <input type="text" className="form-control" id="inputEmail4" placeholder="Address" />
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="text" className="form-control" id="inputPassword4"
                                        placeholder="City" />
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="text" className="form-control" id="inputPassword4"
                                        placeholder="State" />
                                </div>
                                <div className="form-group col-md-6">
                                    <select className="form-control" id="Select">
                                        <option value="1" selected>Select Vehicle Class</option>
                                        <option value="2">Tri Cycle</option>
                                        <option value="2">Cars</option>
                                        <option value="3">Ambulance</option>
                                        <option value="4">Bus</option>
                                        <option value="5">Helicopter</option>
                                    </select>
                                </div>
                                <div className="form-group time_icon col-md-6">
                                    <select className="form-control" id="Select2">
                                        <option value="" selected>Time Availability</option>
                                        <option value="1">8 AM TO 10AM</option>
                                        <option value="1">10 AM TO 12PM</option>
                                        <option value="1">12PM TO 2PM</option>
                                        <option value="1">2PM TO 4PM</option>
                                        <option value="1">4PM TO 6PM</option>
                                        <option value="1">6PM TO 8PM</option>
                                        <option value="1">4PM TO 10PM</option>
                                        <option value="1">10PM TO 12PM</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                    
                                    <div className="form-check col-md-3">
                                        <input className="form-check-input col-md-3" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                        <label className="form-check-label col-md-3" for="exampleRadios1">
                                            Male
                                        </label>
                                    </div>
                                    <div className="form-check col-md-3">
                                        <input className="form-check-input col-md-3" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                        <label className="form-check-label col-md-3" for="exampleRadios2">
                                            Female
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="regerv_btn">
                                <a href="#" className="btn_2">Register your Ambulance</a>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6">
                    <div className="reservation_img">
                        <img src="img/reservaion.png" alt="" className="reservation_img_iner" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!--::regervation_part end::--> */}
    </div>
  )
}

export default Register;
