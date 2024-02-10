import React from "react";
//import { useForm, ValidationError } from '@formspree/react';

//'Authorization': 'Basic ' + (new Buffer.from(clientId + ':' + clientSecret).toString('base64')),

const spotifyAuth = () => {
    //const [token, setToken] = useState('');
 
    //const getToken = (callback) => {
    //    const clientId = ''; // Your client ID
    //    const clientSecret = ''; // Your client secret
    
    //    const authOptions = {
    //    method: 'POST',
    //    headers: {
    //        'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret),
    //        'Content-Type': 'application/x-www-form-urlencoded'
    //    },
    //    body: 'grant_type=client_credentials'
    //    };
    
    //    fetch('https://accounts.spotify.com/api/token', authOptions)
    //    .then(response => {
    //        if (!response.ok) {
    //        throw new Error('Network response was not ok');
    //        }
    //        return response.json();
    //    })
    //    .then(data => {
    //        const token = data.access_token;
    //        callback(token);
    //    })
    //    .catch(error => {
    //        console.error('There was a problem with the fetch operation:', error);
    //        alert(error.message);
    //    });
    //}

    //useEffect(() => {
    //    getToken(setToken); // Pass setToken as a callback to getToken
    //}, []);

    return (
        <div>
            <section className="Section7">
                <div className="container my-p py-5">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h1 className="lead fs-7 display-5 fw-bolder text-center mt-2 mb-4 text-white">Have Some <b>Question?</b></h1>
                            <h3 className="lead display-4 fw-bolder text-center mb-0 text-white">Contact Us!</h3>
                            <hr className="w-75 mx-auto" />
                        </div>
                    </div>

                    <form action=''>
                        <input type='hidden' id='hidden_token' />
                        <div className='col-sm-6 form-group row mt-4 px-0'>
                            <label htmlFor='Genre' className='form-label col-sm-2'>Client_ID:</label>
                            <select name='' id='select_genre' className='form-control form-control-sm col-sm-10'>
                                <option>Select...</option>
                            </select>
                        </div>
                        <div className='col-sm-6 form-group row px-0'>
                            <label htmlFor='Genre' className='form-label col-sm-2'>Client_SECRET:</label>
                            <select name='' id='select_playlist' className='form-control form-control-sm col-sm-10'>
                                <option>Select...</option>
                            </select>
                        </div>
                        <div className='col-sm-6 row form-group px-0'>
                            <button type='submit' id='btn_submit' className='btn btn-success col-sm-12'>Search</button>
                        </div>
                    </form>
                    <div className='row'>
                        <div className='col-sm-6 px-0'>
                            <div className='list-group song-list'>
                                
                            </div>
                        </div>
                        <div className='offset-md-1 col-sm-4' id='song-detail'>
                        </div>
                    </div>
                </div>    
            </section>
        </div>
    );
};

export default spotifyAuth;