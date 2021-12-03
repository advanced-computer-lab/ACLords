import React from 'react'
import {Grid} from "@material-ui/core"
import Paper from "@material-ui/core/Paper"
import './App.css';

export default function User({data}) {

    return (
        <div>
            <Grid container justify="center" >
                <Grid item>
                    <item><Paper style= {{width: 500, height: 150, backgroundColor:'blanchedalmond' , justifyContent:'center'}}>
                        <h3 key ={data._id} >{"First Name :  " + data.FirstName}  </h3> 
                        <h3 key ={data._id} >{"Last Name :  " + data.LastName}  </h3>
                        <h3 key ={data._id} >{"Passport Number :  " + data.PassportNumber}  </h3>
                        <h3 key ={data._id} >{"E-mail :  " + data.Email}  </h3>
    
                    </Paper>
                    </item>
                </Grid>
            </Grid>

            <br/>
            <br/>
            
        </div>
    )
        
}