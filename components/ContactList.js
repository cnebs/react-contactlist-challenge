import React, { Component } from "react";

import ContactItem from "../components/ContactItem.js";

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: []
    };

    this.handlePush = this.handlePush.bind(this);

    this.contacts = [
      { firstName: "Allen", lastName: "Lane", phone: "542-987-3456" },
      { firstName: "Trey", lastName: "Smith", phone: "" },
      { firstName: "Richard", lastName: "Walker", phone: "542-737-3246" },
      { firstName: "Alejandro", lastName: "Lane", phone: "542-345-8721" },
      { firstName: "Bob", lastName: "Larson", phone: "(542) 321-3456" },
      { firstName: "Richard", lastName: "Julian", phone: "542-211-5678" },
      { firstName: "Bill", lastName: "Allen", phone: "542-654-2154" }
    ];
  }

  handlePush(firstName, lastName, phone) { // If a contact's favorite button is clicked, add contact to state
    const favorites = this.state.favorites;
      favorites.push({
        firstName: firstName,
        lastName: lastName,
        phone: phone
      });
      this.setState({favorites: favorites});
  }

  render() {
    // Render a list of contacts alphabetically by last name, first name.
    // The list should be broken up into sections where each section has a title of the first letter of the last names of contacts in that section.
    // Contacts without a phone number should be ignored.
    // Phone numbers should be displayed in a (xxx) xxx-xxxx format.
    // Ex.
    // J
    // –––––––
    // Richard Julian – (542) 211-5678
    //
    // L
    // –––––––
    // Alejandro Lane – (542) 345-8721
    // Allen Lane – (542) 987-3456
    // Bob Larson – (542) 321-3456
    // .....

    const {favorites} = this.state;

    return (
      <>
        <div style={{ width: 400 }}>
          {this.contacts.sort( (a, b) => { // Sort alphabetically regardless of u/l-case
            let strA = a.lastName.toUpperCase();
            let strB = b.lastName.toUpperCase();
            return (( strA < strB ) ? -1 : ( strA > strB ) ? 1 : 0);

          }).filter( contact => ( // Filter away contacts without phone numbers
            contact.phone.length 

          )).map((contact, idx, arr) => { // Build the contact list
            const prev = idx-1,
            firstName = contact.firstName,
            lastName = contact.lastName,
            phone = contact.phone;
            return (
              idx == 0 || contact.lastName[0] != arr[prev].lastName[0] ? // If first contact or new first letter of last name, build a header
              <div key={idx}>
                <p>{contact.lastName[0]}</p>
                <p>-------</p>
                <ContactItem key={idx} {...contact} handlePush={this.handlePush}/>
                <button onClick={() => (this.handlePush(firstName, lastName, phone))}>Favorite</button>
              </div>
              : // Otherwise render a standard ContactItem
              <div key={idx}>
                <ContactItem key={idx} {...contact} handlePush={this.handlePush}/>
                <button onClick={() => (this.handlePush(firstName, lastName, phone))}>Favorite</button>              
              </div>
            )
          })}
        </div>

        <br></br>
        
        {favorites.length ?
          <>
            <h2>Favorites</h2>
            {favorites.map( (favorite, idx) => (
              <ContactItem key={idx} {...favorite} />
            ))}
          </>
          :
          <></>
        }
      </>
    );
  }
}

export default ContactList;
