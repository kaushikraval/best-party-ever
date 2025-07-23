import React, { useState } from 'react';
import { Button } from 'primereact/button';

export default function Drinks() {
  const [showDrinkList, setShowDrinkList] = useState(false);
  const showDrinkListHandle = () => {
    setShowDrinkList(!showDrinkList);
  };
  return (
    <div className="drink_wrapper pt-120">
      <div className="container">
        <div className="text-center">
          <h2>DRINKS</h2>
          <p>*Prices are subject to change.</p>
          <p>
            Please note: If considering our Drinks Wristbands or any of the
            Drinks Packages, these are in addition to the ticket price and the
            same wristband or package must be ordered for each person in your
            booking.
          </p>
        </div>
        <div className="drink_list_wrapper">
          <div className="view_drink_list">
            <span onClick={() => showDrinkListHandle()}>VIEW DRINKS LIST</span>
          </div>
          {showDrinkList === true && (
            <div className="drink_list_inner">
              <h5 className="fw_500">Package Deals</h5>
              <ul>
                <li>
                  <div className="package_left_content">
                    <h5>Drinks Package A</h5>
                    <Button
                      tooltip="This product must be ordered one per each place booked"
                      tooltipOptions={{ position: 'top' }}
                      className="tooltip_btn"
                    >
                      <i className="pi pi-question-circle me-1"></i> (One per
                      Person)
                    </Button>
                    <p>
                      Half a bottle of house wine, half a bottle of water and 4
                      drink tokens per person.
                    </p>
                  </div>
                  <div className="package_price">
                    <h6>£30.60 inc VAT</h6>
                    <p>£25.50 excl VAT</p>
                  </div>
                </li>
                <li>
                  <div className="package_left_content">
                    <h5>Drinks Package B</h5>
                    <Button
                      tooltip="This product must be ordered one per each place booked"
                      tooltipOptions={{ position: 'top' }}
                      className="tooltip_btn"
                    >
                      <i className="pi pi-question-circle me-1"></i> (One per
                      Person)
                    </Button>
                    <p>
                      Half a bottle of house wine, half a bottle of water and 8
                      drink tokens per person.
                    </p>
                  </div>
                  <div className="package_price">
                    <h6>£44.22 inc VAT</h6>
                    <p>£36.85 excl VAT</p>
                  </div>
                </li>
                <li>
                  <div className="package_left_content">
                    <h5>
                      Inclusive Beers, Wines, Prosecco and Soft Drinks Wristband
                    </h5>
                    <Button
                      tooltip="This product must be ordered one per each place booked"
                      tooltipOptions={{ position: 'top' }}
                      className="tooltip_btn"
                    >
                      <i className="pi pi-question-circle me-1"></i> (One per
                      Person)
                    </Button>
                    <p>
                      Inclusive Bottled Beers, Cider, House Wines, Prosecco and
                      Soft Drinks Wristband
                    </p>
                  </div>
                  <div className="package_price">
                    <h6>£56.34 inc VAT</h6>
                    <p>£46.95 excl VAT</p>
                  </div>
                </li>
                <li>
                  <div className="package_left_content">
                    <h5>
                      Inclusive House Spirits, Beers, House Wines, Prosecco and
                      Soft Drinks
                    </h5>
                    <Button
                      tooltip="This product must be ordered one per each place booked"
                      tooltipOptions={{ position: 'top' }}
                      className="tooltip_btn"
                    >
                      <i className="pi pi-question-circle me-1"></i> (One per
                      Person)
                    </Button>
                    <p>
                      Inclusive House Spirits, Bottled Beers, Cider, House
                      Wines, Prosecco and Soft Drinks Wristband
                    </p>
                  </div>
                  <div className="package_price">
                    <h6>£69.54 inc VAT</h6>
                    <p>£57.95 excl VAT</p>
                  </div>
                </li>
                <li>
                  <div className="package_left_content">
                    <h5>Premium Inclusive Drinks Wristband</h5>
                    <Button
                      tooltip="This product must be ordered one per each place booked"
                      tooltipOptions={{ position: 'top' }}
                      className="tooltip_btn"
                    >
                      <i className="pi pi-question-circle me-1"></i> (One per
                      Person)
                    </Button>
                    <p>
                      Inclusive Premium Spirits, Bottled Beers, Cider, Wines,
                      Prosecco, a Selection of Cocktails and Soft Drinks
                      Wristband
                    </p>
                  </div>
                  <div className="package_price">
                    <h6>£76.20 inc VAT</h6>
                    <p>£63.50 excl VAT</p>
                  </div>
                </li>
                <li>
                  <div className="package_left_content">
                    <h5>A bucket of beers</h5>
                    <p>
                      10 Bottles of Lager, placed on your table in an iced
                      bucket. You can order any quantity to suit your group
                    </p>
                  </div>
                  <div className="package_price">
                    <h6>£65.40 inc VAT</h6>
                    <p>£54.50 excl VAT</p>
                  </div>
                </li>
              </ul>
              <h5 className="fw_500">Drinks Tokens</h5>
              <ul>
                <li>
                  <div className="package_left_content">
                    <h5>Drinks Token</h5>
                    <p>
                      One token valid for a soft drink. Two tokens valid for a
                      Bottle of Bitter, Cider or Lager, a small glass of house
                      wine or house spirit and mixer. Three tokens valid for a
                      premium spirit and mixer or a cocktail. Four tokens valid
                      for a glass of Champagne. You can order any quantity to
                      suit your group.
                    </p>
                  </div>
                  <div className="package_price">
                    <h6>£3.66 inc VAT</h6>
                    <p>£3.05 excl VAT</p>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="testimonial_wrap pt-120 pb-80">
        <div className="container">
          <div className="testimonial_inner">
            <div className="rating">
              <i className="pi pi-star-fill"></i>
              <i className="pi pi-star-fill"></i>
              <i className="pi pi-star-fill"></i>
              <i className="pi pi-star-fill"></i>
              <i className="pi pi-star-fill"></i>
            </div>
            <p className="big">
              "Fabulous! The best ever, has WOW factor all night, thank you for
              a memorable evening with great food, wonderful entertainment and
              perfect organisation!”
            </p>
            <h4>Arla Foods</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
