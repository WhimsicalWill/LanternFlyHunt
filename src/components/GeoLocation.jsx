import React from "react";
import { useGeolocated } from "react-geolocated";
import { Button} from '@material-ui/core';

const GeoLocation = () => {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });
    return <span></span>

    // return !isGeolocationAvailable ? (
    //     <div>Your browser does not support Geolocation</div>
    // ) : !isGeolocationEnabled ? (
    //     <div>Geolocation is not enabled</div>
    // ) : coords ? (
        // <table>
        //     <tbody>
        //         <tr>
        //             <td>latitude</td>
        //             <td>{coords.latitude}</td>
        //         </tr>
        //         <tr>
        //             <td>longitude</td>
        //             <td>{coords.longitude}</td>
        //         </tr>
        //     </tbody>
        // </table>
//         <span>
//             <form method="POST"
            
//             action="https://docs.google.com/forms/d/e/1FAIpQLSeomqGwhJIEu0As8AjHttZAdXPLO0RgKpV30ifB0j6qdnaGPA/viewform"
//             onsubmit="return window.submitGoogleForm(this);">
                
//                 <label>name</label>
//                 <input name="" />
//                 <input name="" />
                
//                 <Button variant="contained">Submit</Button>
//                 {/* <button type=submit>Submit</button> */}
//             </form>
//         </span>
//     ) : (
//         <div>Getting the location data&hellip; </div>
//     );
};

export default GeoLocation;