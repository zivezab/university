import React, {Component} from 'react';
import {Form, Button, Spinner} from 'react-bootstrap';
import countryList from './countries';

class SearchInput extends Component {
  render() {
    return (
      <Form onSubmit={this.props.onSubmit}>
        <fieldset disabled={this.props.disabled}>
          <Form.Label htmlFor='inlineFormKeyword'>Search</Form.Label>
          <Form.Control
            id='inlineFormKeyword'
            required
            type='text'
            placeholder='Keyword'
            onChange={(e) => this.props.onKeywordChange(e.target.value)}
          />
          <Form.Control.Feedback>OK</Form.Control.Feedback>
          <Form.Label
            className='my-1 mr-2'
            htmlFor='inlineFormCountrySelectPref'
          >
            Country
          </Form.Label>
          <Form.Control
            as='select'
            className='my-1 mr-sm-2'
            id='inlineFormCountrySelectPref'
            onChange={(e) => this.props.onCountryChange(e.target.value)}
            custom
          >
            <option value=''>Any</option>
            {countryList.map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </Form.Control>
          <div className='float-right'>
            <Button type='submit' className='my-1'>
              {this.props.disabled ? (
                <Spinner
                  as='span'
                  animation='grow'
                  size='sm'
                  role='status'
                  aria-hidden='true'
                />
              ) : (
                'Submit'
              )}
            </Button>{' '}
            <Button variant='success' onClick={this.props.exportData}>
              Newsletter
            </Button>
          </div>
        </fieldset>
      </Form>
    );
  }
}

SearchInput.defaultProps = {
  onKeywordChange: () => {},
  onCountryChange: () => {},
  onSubmit: () => {},
  exportData: () => {},
  disabled: false,
};

export default SearchInput;
