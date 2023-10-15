import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
type Props = {};
function RegisterForm({}: Props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    city: "",
    address: "",
    pincode: "",
    state: "",
    time_slot: "",
    isMudgar: "",
    password: "",
  });
  const [isChecked, setIsChecked] = useState(false);
 const [single , setSingle] = useState(false)
 const countRef = useRef(0);
  useEffect(()=>{
    console.log("useEffect");
    const Script = document.createElement("script");
    //id should be same as given to form element
    const Form = document.getElementById('donateForm');
    Script.setAttribute('src','https://checkout.razorpay.com/v1/payment-button.js')
    Script.setAttribute('data-payment_button_id','pl_HAhlCsCYFddwiq')
    //@ts-ignore
    Form.appendChild(Script);
  },[])
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  }

  const {
    name,
    email,
    phoneNumber,
    city,
    address,
    pincode,
    state,
    time_slot,
    isMudgar,
    password,
  } = formData;
  const supabaseClient = useSupabaseClient();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    //reset formdata
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      city: "",
      address: "",
      pincode: "",
      state: "",
      time_slot: "",
      isMudgar: "",
      password: "",
    });

    // const { data, error } = await supabaseClient.auth.signInWithPassword({
    //   email: formData.email,
    //   password: formData.password,
    // });
    // if (!error) {
    //   router.push("/");
    // } else {
    //   console.log("some error occured");
    // }
  };

  return (
    <div id="register_form" className="register_form text-center">
      <h3 className="register_tag">Register Now</h3>
      {/* <div className="register_mobile_details">
          <span className="date-and-time"><img loading="lazy" src="/img/date-white.png" alt="Date" width={100} height={100} />
            4th Sep - 24th Sep everyday </span>
          <span className="date-and-time d-flex"><img loading="lazy" src="/img/time-white.png" alt="Date" width={100} height={100} />
            6 - 7 AM (IST) or 8 - 9 AM (IST)
          </span>
          <span className="date-and-time"><img loading="lazy" src="/img/rupee-white.png" alt="Date" width={100} height={100} /> Contribution: Rs: 590</span>
        </div> */}
      <div className="form_block">
        <div id="loader" className="loader d-none">
          <p>Please Wait. . . Payment In Progress. . . </p>
        </div>
        <form onSubmit={onSubmit} id="donateForm">
          {/* <input
            type="hidden"
            name="razorpay_payment_id"
            id="razorpay_payment_id"
          />
          <input
            type="hidden"
            name="razorpay_signature"
            id="razorpay_signature"
          />
          <input
            type="hidden"
            name="utm_source"
            id="utm_source"
            defaultValue=""
          />
          <input
            type="hidden"
            name="utm_medium"
            id="utm_medium"
            defaultValue=""
          />
          <input
            type="hidden"
            name="utm_campaign"
            id="utm_campaign"
            defaultValue=""
          />
          <input type="hidden" name="utm_term" id="utm_term" defaultValue="" />
          <input
            type="hidden"
            name="http_refer_id"
            id="http_refer_id"
            defaultValue=""
          />
          <input
            type="hidden"
            className="form-control"
            placeholder="Enter"
            name="register-amount"
            id="amount"
            defaultValue="{59000}"
          />
          <input type="hidden" name="country" id="country" defaultValue="" /> */}
          <div className="row">
            <div className="col-sm-12 col-lg-6 mb-3 mb-sm-0">
              <label className="d-none">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Name*"
                name="name"
                value={name}
                onChange={onChange}
                required
                id="name"
              />
              <div id="name_error" />
            </div>
            <div className="col-sm-12 col-lg-6 mb-3 mb-sm-0">
              <label className="d-none">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email*"
                name="email"
                value={email}
                required
                onChange={onChange}
                id="email"
                autoComplete="off"
              />
              <div id="email_error" />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 col-lg-6 mb-3 mb-sm-0">
              <label className="d-none">Phone Number</label>

              <input
                type="text"
                className="form-control"
                placeholder="Whatsapp Number*"
                name="phoneNumber"
                value={phoneNumber}
                required
                onChange={onChange}
                id="phone"
                autoComplete="off"
              />

              <div id="mob_error" />
            </div>
            <div className="col-sm-12 col-lg-6 mb-3 mb-sm-0 city_div">
              <label className="d-none">City</label>
              <input
                type="text"
                className="form-control"
                placeholder="City*"
                name="city"
                value={city}
                required
                onChange={onChange}
                id="city"
              />
              <div id="city_error" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-lg-6 mb-3 mb-sm-0 city_div">
              <label className="d-none">Address*</label>
              <input
                type="text"
                className="form-control"
                placeholder="Address*"
                name="address"
                value={address}
                required
                onChange={onChange}
                id="address"
              />
              <div id="address_error" />
            </div>
            <div className="col-sm-12 col-lg-6 mb-3 mb-sm-0 city_div">
              <label className="d-none">Pincode*</label>
              <input
                type="text"
                className="form-control"
                placeholder="Pincode*"
                name="pincode"
                value={pincode}
                required
                onChange={onChange}
                id="pincode"
              />
              <div id="pincode_error" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-lg-6 mb-3 mb-sm-0 city_div">
              <label className="d-none">State*</label>
              <input
                type="text"
                className="form-control"
                placeholder="State*"
                name="state"
                value={state}
                required
                onChange={onChange}
                id="state"
              />
              <div id="state_error" />
            </div>
            <div className="col-sm-12 col-lg-6 mb-3 mb-sm-0 city_div">
              <select
                name="isMudgar"
                value={isMudgar}
                onChange={onChangeSelect}
                id="time_slot-1"
                className="custom-select"
              >
                <option value="">Do you want Mudgar? *</option>
                <option value={"yes"}>Yes</option>
                <option value={"no"}>No</option>
              </select>
              <div id="state_error" />
            </div>
          </div>

          <div className="row ">
            <div
              className="col-sm-12 col-lg-6 mb-4 mb-sm-3 mb-md-3 w-100 d-flex"
              id="time_slot_div"
            >
              <span className="custom-autocomplete date-and-time time-slot">
                <img loading="lazy" src="/img/time-white.png" alt="Date" />
              </span>
              <select
                name="time_slot"
                value={time_slot}
                onChange={onChangeSelect}
                id="time_slot"
                className="custom-select"
              >
                <option value="">Choose your time slot*</option>
                <option
                  value={607}
                >
                  6 AM (IST)
                </option>
                <option
                  data-workshop_date="Monday, 13 November 2023"
                  value={708}
                  data-timeslot="7 AM (IST)"
                >
                  7 AM (IST)
                </option>
                <option
                  data-workshop_date="Monday, 13 November 2023"
                  value={101}
                  data-timeslot="10 AM (IST)"
                >
                  10 AM (IST)
                </option>
                <option
                  data-workshop_date="Monday, 13 November 2023"
                  value={187}//18 hrs to 7 o clock
                  data-timeslot="6 PM (IST)"
                >
                  6 PM (IST)
                </option>
                <option
                  data-workshop_date="Monday, 13 November 2023"
                  value={198} //19 hrs to 8 o clock
                  data-timeslot="7 PM (IST)"
                >
                  7 PM (IST)
                </option>
              </select>
              <div id="time_slot_error" />
            </div>
          </div>

          {/* <div className="row">
            <div className="col-sm-12 col-lg-12 mb-3 mb-sm-0">
              <label className="d-none">Referral Code</label>
              <input
                type="text"
                className="form-control d-none"
                placeholder="Referral Code (Add if any)"
                name="join_referral_code"
                required
                id="join_referral_code"
                autoComplete="off"
                defaultValue=""
              />
              <div className="mob_code" id="ref_code" />
              <div id="join_referral_code_error" className="text-white" />
            </div>
            <div className="col-sm-12 col-lg-4 mb-sm-0 d-none">
              <input
                type="button"
                className="form-control btn-get-started my-0 w-100"
                id="verify_button"
                defaultValue="{Verify}"
              />
            </div>
          </div> */}
          <div className="row">
            <div className="col-sm-12 col-lg-12 mb-2 mb-sm-1">
              <div className="form-check radio-container checkbox-space">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  required
                  id="selected_time_slot"
                />
                <label
                  className="form-check-label ps-0"
                  htmlFor="selected_time_slot"
                >
                  I am aware that I have to be available at my given time slot
                  for all days. I <b>cannot change my time slot</b> once
                  selected.
                </label>
              </div>
            </div>
            <div className="col-sm-12 col-lg-12 mb-2 mb-sm-1">
              <div className="form-check radio-container checkbox-space">
                <input
                  className="form-check-input"
                  type="checkbox"
                  required
                  defaultValue=""
                  id="pre_recorded"
                />
                <label className="form-check-label ps-0" htmlFor="pre_recorded">
                  I am aware that <b>recordings</b> for the sessions will{" "}
                  <b>not</b> be provided.
                </label>
              </div>
            </div>
            <div className="col-sm-12 col-lg-12 mb-3 mb-sm-0">
              <div className="form-check radio-container checkbox-space">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  required  
                  id="terms"
                />
                <label className="form-check-label ps-0 pb-0" htmlFor="terms">
                  I agree and accept the{" "}
                  <a href="/terms" target="_blank">
                    terms and conditions
                  </a>
                  .
                </label>
                <div id="terms_error" />
              </div>
              <div className="col-sm-12 col-lg-12 mb-3 mb-sm-0">
                <div className="form-check radio-container checkbox-space">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="terms"
                  />
                  
                  <label className="form-check-label ps-0 pb-0" htmlFor="terms">
                    Already Signed Up?{" "}
                    <a href="/login" target="">
                      click here{" "}
                    </a>
                    to login.
                  </label>
                  <div id="terms_error" />
                </div>
              </div>
            </div>
          </div>
          
          <button
            id="pay_button"
            className="btn-get-started"
            style={{ marginTop: "0px" }}
            type="submit"
          >
            Pay Now{" "}
            <img
              loading="lazy"
              className="btn_arrow"
              src="/img/btn-arrow-brown.png"
              alt="arrow"
              width={20}
              height={17}
            />
          </button>
          <div className="contribution mobile_display_none">
            Contribution: ₹ 0
          </div>
        </form>
      </div>
    </div>
  );
}
export default RegisterForm;
