import * as React from "react";
interface Props {
  className?: string;
}
const FormSearch: React.FC<Props> = (props: Props) => {
  const {className} = props;
  return (
    <div className={`search ${className}`}>
      <div className="container-fluid">
        <div className="search__inner">
          <button type="button" className="search__title">
            PRODUCT SEARCH
          </button>
          <form className="search__form">
            <div className="search__form-column">
              <div className="search__form-item">
                <div className="search__form-label">GROUP</div>
                <select name="group" className="search__form-select">
                  <option value="All">All</option>
                  <option value="All-1">All-1</option>
                  <option value="All-2">All-2</option>
                </select>
              </div>
              <div className="search__form-item">
                <div className="search__form-label">CATEGORY</div>
                <select name="CATEGORY" className="search__form-select">
                  <option value="All">All</option>
                  <option value="All-1">All-1</option>
                  <option value="All-2">All-2</option>
                </select>
              </div>
            </div>
            <div className="search__form-column">
              <div className="search__form-item">
                <div className="search__form-label">
                  DIN/ISO/ITEM NO{" "}
                  <div className="tooltip">
                    <div className="tooltip__content">
                      <span className="tooltip__title">Examples:</span>
                      <ul>
                        <li>DIN 34</li>
                        <li>180</li>
                        <li>3-42</li>
                        <li>TVZ</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <input type="text" className="search__form-input" />
              </div>
              <div className="search__form-row">
                <div className="search__form-item">
                  <div className="search__form-label">DIAMETER (mm)</div>
                  <input type="text" className="search__form-input" />
                </div>
                <div className="search__form-item">
                  <span className="search__form-label">LENGHT (mm)</span>
                  <input type="text" className="search__form-input" />
                </div>
              </div>
            </div>
            <div className="search__form-column">
              <div className="search__form-item">
                <div className="search__form-label">SURFACE</div>
                <select name="surface" className="search__form-select">
                  <option value="All">All</option>
                  <option value="All-1">All-1</option>
                  <option value="All-2">All-2</option>
                </select>
              </div>
              <div className="search__form-item">
                <div className="search__form-label">MATERIAL</div>
                <select name="material" className="search__form-select">
                  <option value="All">All</option>
                  <option value="All-1">All-1</option>
                  <option value="All-2">All-2</option>
                </select>
              </div>
            </div>
            <div className="search__form-btn">
              <button type="button" className="search__form-clear">
                <span></span>clear filter
              </button>
              <button type="button" className="btn">
                search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormSearch;
