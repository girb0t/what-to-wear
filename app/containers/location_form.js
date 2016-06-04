import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';

class LocationForm extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: this.getSuggestions('')
    };

    this.onChange = this.onChange.bind(this);
    this.onSuggestionsUpdateRequested = this.onSuggestionsUpdateRequested.bind(this);
  }

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: 'New York',
      value,
      onChange: this.onChange
    };

    return (
      <div>
        <h2>Location Form</h2>
        <Autosuggest suggestions={suggestions}
                     onSuggestionSelected={this.onSuggestionSelected}
                     onSuggestionsUpdateRequested={this.onSuggestionsUpdateRequested}
                     getSuggestionValue={this.getSuggestionValue}
                     renderSuggestion={this.renderSuggestion}
                     inputProps={inputProps} />
      </div>
    );
  }

  onChange(event, { newValue }) {
    this.setState({
      value: newValue
    });
  }

  onSuggestionsUpdateRequested({ value }) {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  }

  getLocations(term) {
    return [
      {
        description: 'New York, NY, USA'
      },
      {
        description: 'Boston, MA, USA'
      },
      {
        description: 'Oakland, CA, USA'
      },
      {
        description: 'Kiev, Ukraine'
      }
    ]
  }

  getSuggestions(value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : this.getLocations(inputValue);
  }

  getSuggestionValue(suggestion) { // when suggestion selected, this function tells what should be the value of the input
    return suggestion.description;
  }

  renderSuggestion(suggestion) {
    return (
      <span>{suggestion.description}</span>
    );
  }

  onSuggestionSelected(event, { suggestion, suggestionValue, sectionIndex, method }) {
    console.log(`Selected: ${suggestionValue}`)
  }
}

export default LocationForm;
