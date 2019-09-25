import React from "react";

class Catergories extends React.Component {
  constructor() {
    super();
    this.newValue = {};
  }

  render() {
    return (
      <div className="buttons">
        <h1>Catergories</h1>
        <button className="Birthday-Party" onClick={this.BirthdayPartyButton}>
          Birthday Party
        </button>
        <button className="Halloween-Party" onClick={this.HalloweenPartyButton}>
          Halloween Party
        </button>
        <button className="Garden-Party" onClick={this.GarndenPartyButton}>
          Garden Party
        </button>
        <button className="Bachelor-Party" onClick={this.BachelorPartyButton}>
          Bachelor Party
        </button>
        <button className="Add-Party" onClick={this.AddPartyButton}>
          Add Party
        </button>
      </div>
    );
  }
}

export default Catergories;
