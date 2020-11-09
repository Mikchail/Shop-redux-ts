import * as React from "react";
import {Link} from "react-router-dom";
import { routers } from './../../const/const';
interface Props {
  match?: any;
}
const Breadcrumbs: React.FC<Props> = (props: Props) => {
  const {match} = props;
  const urls = match && match.url.split("/").slice(2);
  
  return (
    <div className="breadcrumbs">
      <div className="container-fluid">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <Link to="/">Home</Link>
          </li>
          {urls &&
            urls.map((url, index, array) => {
              if(index === array.length - 1){
                return (
                  <li key={`${url}`} className="breadcrumbs__item">
                    <span style={{textTransform: 'capitalize'}} >{url}</span>
                  </li>
                );
              }
              return (
                <li key={`${url}`} className="breadcrumbs__item">
                  <Link style={{textTransform: 'capitalize'}} to={`${routers.PRODUCTS}/${url}`}>{url}</Link>
                </li>
              );
            })}
          
        </ul>
      </div>
    </div>
  );
};
export default Breadcrumbs;
