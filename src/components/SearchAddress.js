import React, {Component} from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

//https://reactjsexample.com/react-hook-for-google-maps-places-autocomplete/
//https://reactjsexample.com/tag/autocomplete/
class SearchAddress extends Component {


    componentDidMount() {
        // let response = Axios({
        //     url: `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=1600+Amphitheatre&key=AIzaSyDNireir1JOrh0NFqA5RpLDBnm1sb0VTog&sessiontoken=${ Date.now() }`,
        //     method: 'get',
        // })
        // response.then((r) => {
        //     console.log(r)
        // })
        // console.log(response)
    }

    render() {
        return (
            <div>
                <GooglePlacesAutocomplete
                    apiKey="AIzaSyDJyDdSdBIlLWyGDjIFBaEQyt9xMs0AwUo"
                    selectProps={{
                        styles: {
                            input: (provided) => ({
                                ...provided,
                                color: 'blue',
                            }),
                            option: (provided) => ({
                                ...provided,
                                color: 'blue',
                            }),
                            singleValue: (provided) => ({
                                ...provided,
                                color: 'blue',
                            }),
                        },
                    }}
                />
            </div>
        );
    }
}

export default SearchAddress;