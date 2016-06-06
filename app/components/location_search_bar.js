import React, { Component } from 'react';
import axios from 'axios';
import Autosuggest from 'react-autosuggest';

class LocationSearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      suggestions: []
    };

    this.onChange = this.onChange.bind(this);
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
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
    this.loadSuggestions(value);
  }

  loadSuggestions(value) {
    value = value.trim().toLowerCase();
    const request = axios.get('/location-suggestions', {
                        params: {
                          searchTerm: value
                        }
                      })
                      .then(response => {
                        if (value === this.state.value) { // Ignore suggestions if input value changed
                          this.setState({
                            suggestions: response.data.locations
                          })
                        }
                      })
                      .catch(response => {
                        // TODO handle error
                      })
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
    this.props.onLocationSelected(suggestion);
  }
}

LocationSearchBar.propTypes = {
  onLocationSelected: React.PropTypes.func.isRequired,
}

export default LocationSearchBar;
