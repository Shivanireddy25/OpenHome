import React, { Component } from 'react';
import ImageGallery from '../../PropertyOverview/ImageGallery/ImageGallery.js'

class SearchCard extends Component {
    
    constructor(props){
        super(props);
        
        this.showProperty = this.showProperty.bind(this);
    }

    showProperty = (e) =>{
        this.props.onSave(this.props.data.propertyid);
    }
    
    render() { 
        
        const {data} = this.props;
        return (  
            
            <section>
            <div className="row mt-2 ml-4 mr-4" id="row-hover">
              <div className="col-md-4" style={{margin:'0px'}}>
              
              {/* <ImageGallery photos={data.photos} height="300px" /> */}
              </div>
              <div className="col-md-8" onClick={this.showProperty}>
                   <h3 className="card-title mt-4">{data.description}</h3>
                          <ul className="list-inline">
                          <li className="list-inline-item" style={{color:'black'}}>{data.cityName}</li>
                            <li className="list-inline-item" style={{color:'black'}}>{data.streetAddress}</li>
                            <li className="list-inline-item" style={{color:'black'}}>{data.placeArea}</li>
                            <li className="list-inline-item" style={{color:'black'}}>{`${data.noOfBedrooms} BA`}</li>
                            <li className="list-inline-item" style={{color:'black'}}>{data.placeArea}</li>
                          </ul>
                  <div className="mt-3">
                  <table>
                    <tr>
                      <td>
                          <img  width="24px" height="20px" className="align-baseline" src="https://png.icons8.com/material-rounded/64/000000/marker.png" alt=""/>
                      </td>
                    </tr>
                  </table>        
                  </div>
                  <div className="row mt-5">
                  <div className="col-md-3 row-highlight">
                <p className="font-md text-left" style={{color:'#008751'}} id="remove-margin">
                <strong>Wonderful! 4.9/5</strong>
              </p>
              <p id="remove-margin">
                <img width="22px" height="18px" src="https://png.icons8.com/material-sharp/64/666666/lightning-bolt.png" className="align-text-bottom-clearfix"  alt="" style={{paddingLeft:'0px'}}/>
                   <b className="font-lg">{data.weekRent}</b> <i className="font-sm">Week Rent</i>
                   <b className="font-lg">{data.weekendRent}</b> <i className="font-sm">Weekend Rent</i>
              </p>
                  </div>
                  
                  <div className="col-md-3 row-highlight ">
                <p className="text-right" id="remove-margin" >
                <span className="glyphicon glyphicon-star"></span>
                <span className="glyphicon glyphicon-star"></span>
                <span className="glyphicon glyphicon-star"></span>
                <span className="glyphicon glyphicon-star"></span>
                <span className="glyphicon glyphicon-star"></span>
                </p>
                  </div>
              </div>
              </div>
            </div>
          </section>  

        );
    }
}
 
export default SearchCard;