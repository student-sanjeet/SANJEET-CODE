import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import GoogleIcon from '../../assets/google.png'

const InsuranceModal = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div>
      <div className="ins-tabs">
        <div className={`ins-tab ${activeTab === 1 ? ' active-1' : ''}`} onClick={() => setActiveTab(1)}>
          Personal Account
        </div>
        <div className={`ins-tab ${activeTab === 2 ? ' active-2' : ''}`} onClick={() => setActiveTab(2)}>
          EMV Account
        </div>
      </div>
      <div>
        {activeTab === 1 && (
          <div>
            <div>
              <h1 className="form-items">
                Please login to purchase your travel Policy
              </h1>
              <br />

              <div style={{ marginBottom:"5px" }}>Email or mobile number</div>

              <TextField
                label="enter email or mobile number"
                id="outlined-size-small"
                size="small"
                fullWidth
              />
            </div>

            <div className="form-items">
              <Button variant="contained" fullWidth>
                Continue
              </Button>
            </div>
            <p class="googleLoginBar"><span> Or Login/Signup With </span></p>
          

            <div class="google-login">
            <div>
              <img src={GoogleIcon}/>
            </div>
              
            </div>

            <div style={{ fontSize: "13px" }}>
              By proceeding, you agree to Ease My Vacations Privacy Policy, User
              Agreement and T&Cs
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <div>
              <h1 className="form-items">
               Login/ Signup 
              </h1>
              <br />
              
              
              <div style={{ marginBottom: "5px" }}>Work or Email</div>
                <TextField
                  label="Enter your work email id"
                  id="outlined-size-small"
                  size="small"
                  fullWidth
                />
              
              <div className="form-items">
                <Button  variant="contained" fullWidth>
                  Continue
                </Button>
              </div>
              <br/>
              <div style={{ fontSize: "13px" }}>
                By proceeding, you agree to Ease My Vacations Privacy Policy,
                User Agreement and T&Cs
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InsuranceModal;
