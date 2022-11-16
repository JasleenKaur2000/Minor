import "./gecinfo.css";
import { useState } from "react";
import React from 'react'
import { Fab, Paper, TextField } from "@mui/material";

function GecInfo() {
    //take argument and return

    return (

        <>
            <br></br>
            <h1>Enter the Gec Subject Details</h1>
            <div style={{display:"flex",justifyContent:"center"}}>

                <Paper className="paper-form" style={{ margin: "30px 10%", padding: "8px" }}>
                    <form className="gec-info-form">
                        <TextField

                            name="title"

                            label=" Gec subject name"

                        />

                        <TextField

                            name="title"

                            label=" Subject Code "

                        />

                        <TextField

                            name="title"

                            label="Department "

                        />
                        <TextField

                            name="title"

                            label="Submit pdf"

                        />
                        <input type="submit" value="submit"/>
                    </form>
                </Paper>

                

            </div>




            <div>
                <paper>
                    <paper>


                    </paper>
                </paper>


            </div>

        </>
    );
}
export default GecInfo;







